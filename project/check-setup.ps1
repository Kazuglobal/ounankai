# Stripe決済機能のセットアップ診断スクリプト
Write-Host "🔍 Stripe決済機能 診断スタート" -ForegroundColor Cyan
Write-Host ""

# 1. .envファイルの存在確認
Write-Host "1️⃣ 環境変数ファイルの確認" -ForegroundColor Yellow
if (Test-Path ".env") {
    Write-Host "  ✅ .env ファイルが存在します" -ForegroundColor Green
    
    # STRIPE_SECRET_KEYの確認
    $envContent = Get-Content ".env" -Raw
    if ($envContent -match "STRIPE_SECRET_KEY=(.+)") {
        $secretKey = $matches[1].Trim()
        if ($secretKey -eq "sk_test_REPLACE_WITH_YOUR_SECRET_KEY") {
            Write-Host "  ❌ STRIPE_SECRET_KEY がプレースホルダーのままです" -ForegroundColor Red
            Write-Host "     → Stripeダッシュボードから実際のキーを取得して設定してください" -ForegroundColor Yellow
        } elseif ($secretKey -match "^sk_test_") {
            Write-Host "  ✅ STRIPE_SECRET_KEY (テストモード) が設定されています" -ForegroundColor Green
        } elseif ($secretKey -match "^sk_live_") {
            Write-Host "  ✅ STRIPE_SECRET_KEY (本番モード) が設定されています" -ForegroundColor Green
            Write-Host "     ⚠️ 本番モードです。開発環境ではテストキーを推奨します" -ForegroundColor Yellow
        } elseif ($secretKey -match "^pk_") {
            Write-Host "  ❌ STRIPE_SECRET_KEY に公開キー(pk_)が設定されています" -ForegroundColor Red
            Write-Host "     → シークレットキー(sk_test_ または sk_live_)を設定してください" -ForegroundColor Yellow
        } else {
            Write-Host "  ⚠️ STRIPE_SECRET_KEY の形式が不正です: $($secretKey.Substring(0, [Math]::Min(20, $secretKey.Length)))..." -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ❌ STRIPE_SECRET_KEY が見つかりません" -ForegroundColor Red
    }
    
    # 公開キーの確認
    if ($envContent -match "VITE_STRIPE_PUBLISHABLE_KEY=(.+)") {
        $pubKey = $matches[1].Trim()
        if ($pubKey -match "^pk_test_") {
            Write-Host "  ✅ VITE_STRIPE_PUBLISHABLE_KEY (テストモード) が設定されています" -ForegroundColor Green
        } elseif ($pubKey -match "^pk_live_") {
            Write-Host "  ✅ VITE_STRIPE_PUBLISHABLE_KEY (本番モード) が設定されています" -ForegroundColor Green
        }
    }
    
    # 価格IDの確認
    $priceIds = @("VITE_STRIPE_PRICE_SCHOLARSHIP", "VITE_STRIPE_PRICE_FACILITY", "VITE_STRIPE_PRICE_CLUB", "VITE_STRIPE_PRICE_GLOBAL")
    $priceCount = 0
    foreach ($priceId in $priceIds) {
        if ($envContent -match "$priceId=(.+)") {
            $priceCount++
        }
    }
    Write-Host "  ✅ 価格ID: $priceCount / $($priceIds.Count) 設定済み" -ForegroundColor Green
} else {
    Write-Host "  ❌ .env ファイルが見つかりません" -ForegroundColor Red
}

Write-Host ""

# 2. 必要なファイルの確認
Write-Host "2️⃣ 必要なファイルの確認" -ForegroundColor Yellow
$requiredFiles = @(
    "vite.config.ts",
    "package.json",
    "../vercel.json",
    "../api/create-checkout-session.ts"
)

foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file が見つかりません" -ForegroundColor Red
    }
}

Write-Host ""

# 3. node_modulesの確認
Write-Host "3️⃣ 依存パッケージの確認" -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "  ✅ node_modules が存在します" -ForegroundColor Green
    
    # Vercel CLIの確認
    if (Test-Path "node_modules/.bin/vercel") {
        Write-Host "  ✅ Vercel CLI がインストールされています" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️ Vercel CLI が見つかりません (npm install を実行してください)" -ForegroundColor Yellow
    }
} else {
    Write-Host "  ❌ node_modules が見つかりません" -ForegroundColor Red
    Write-Host "     → npm install を実行してください" -ForegroundColor Yellow
}

Write-Host ""

# 4. ポート3000の確認
Write-Host "4️⃣ ポート3000の使用状況" -ForegroundColor Yellow
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    Write-Host "  ✅ ポート3000 が使用中です (Vercel Dev Server起動済み?)" -ForegroundColor Green
} else {
    Write-Host "  ⚠️ ポート3000 が空いています" -ForegroundColor Yellow
    Write-Host "     → npm run dev:vercel を実行してください" -ForegroundColor Yellow
}

Write-Host ""

# 診断結果のサマリー
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "📋 診断結果サマリー" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

$envContent = Get-Content ".env" -Raw -ErrorAction SilentlyContinue
if ($envContent -match "STRIPE_SECRET_KEY=sk_test_REPLACE_WITH_YOUR_SECRET_KEY") {
    Write-Host "⚠️ 次のステップ: Stripeシークレットキーを設定してください" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. https://dashboard.stripe.com/test/apikeys を開く"
    Write-Host "2. 'シークレットキー' の '表示' をクリック"
    Write-Host "3. sk_test_ で始まるキーをコピー"
    Write-Host "4. .env ファイルの STRIPE_SECRET_KEY に貼り付け"
    Write-Host "5. npm run dev:vercel を実行"
    Write-Host ""
} elseif ($envContent -match "STRIPE_SECRET_KEY=pk_") {
    Write-Host "❌ 緊急: シークレットキーに公開キーが設定されています" -ForegroundColor Red
    Write-Host ""
    Write-Host "公開キー(pk_)ではなく、シークレットキー(sk_)を設定してください"
    Write-Host ""
} elseif (-not $port3000) {
    Write-Host "⚠️ 次のステップ: Vercel Dev Serverを起動してください" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "npm run dev:vercel"
    Write-Host ""
} else {
    Write-Host "✅ セットアップは正常です！" -ForegroundColor Green
    Write-Host ""
    Write-Host "ブラウザで http://localhost:3000/donations にアクセスして動作確認してください"
    Write-Host ""
}

Write-Host "🔍 診断完了" -ForegroundColor Cyan

