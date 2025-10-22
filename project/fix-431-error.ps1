# HTTP 431エラーの即座解決スクリプト

Write-Host "================================" -ForegroundColor Cyan
Write-Host "HTTP 431 Error Fix Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "問題: Request Header Fields Too Large (431)" -ForegroundColor Yellow
Write-Host "原因: ブラウザのCookieが大きすぎる、またはVercel Dev Serverの制限" -ForegroundColor Yellow
Write-Host ""

Write-Host "解決方法を選択してください:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Vercel Dev Serverを再起動（推奨）"
Write-Host "2. 別のポート(3001)でVercel Dev Serverを起動"
Write-Host "3. Vite開発サーバーを別途起動（デュアルサーバーモード）"
Write-Host ""

$choice = Read-Host "選択 (1-3)"

switch ($choice) {
    "1" {
        Write-Host ""
        Write-Host "Vercel Dev Serverを再起動します..." -ForegroundColor Green
        Write-Host ""
        Write-Host "現在のプロセスを確認中..." -ForegroundColor Yellow
        
        $vercelProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object {
            $_.CommandLine -like "*vercel*dev*"
        }
        
        if ($vercelProcesses) {
            Write-Host "Vercel Dev Serverプロセスを停止中..." -ForegroundColor Yellow
            $vercelProcesses | Stop-Process -Force
            Start-Sleep -Seconds 2
            Write-Host "プロセスを停止しました" -ForegroundColor Green
        }
        
        Write-Host ""
        Write-Host "次のステップ:" -ForegroundColor Cyan
        Write-Host "1. npm run dev:vercel を実行"
        Write-Host "2. ブラウザでシークレットモード/プライベートウィンドウを開く"
        Write-Host "3. http://localhost:3000/donations にアクセス"
        Write-Host ""
    }
    
    "2" {
        Write-Host ""
        Write-Host "ポート3001でVercel Dev Serverを起動します..." -ForegroundColor Green
        Write-Host ""
        Set-Location "C:\Users\s1598\Downloads\ounamkai2025"
        Start-Process pwsh -ArgumentList "-NoExit", "-Command", "vercel dev --listen 3001"
        
        Write-Host "Vercel Dev Serverを別ウィンドウで起動しました" -ForegroundColor Green
        Write-Host ""
        Write-Host "次のステップ:" -ForegroundColor Cyan
        Write-Host "1. ブラウザでシークレットモードを開く"
        Write-Host "2. http://localhost:3001/donations にアクセス"
        Write-Host ""
    }
    
    "3" {
        Write-Host ""
        Write-Host "デュアルサーバーモードで起動します..." -ForegroundColor Green
        Write-Host ""
        
        # Vercel Dev Server (ポート3001)
        Set-Location "C:\Users\s1598\Downloads\ounamkai2025"
        Start-Process pwsh -ArgumentList "-NoExit", "-Command", "Write-Host 'Vercel Dev Server (API)' -ForegroundColor Cyan; vercel dev --listen 3001"
        
        Start-Sleep -Seconds 2
        
        # Vite Dev Server (ポート5173)
        Set-Location "C:\Users\s1598\Downloads\ounamkai2025\project"
        Start-Process pwsh -ArgumentList "-NoExit", "-Command", "Write-Host 'Vite Dev Server (Frontend)' -ForegroundColor Cyan; `$env:VITE_API_URL='http://localhost:3001'; npm run dev"
        
        Write-Host "2つのサーバーを別ウィンドウで起動しました:" -ForegroundColor Green
        Write-Host "  - Vercel Dev Server: http://localhost:3001 (API)" -ForegroundColor Yellow
        Write-Host "  - Vite Dev Server: http://localhost:5173 (Frontend)" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "次のステップ:" -ForegroundColor Cyan
        Write-Host "1. ブラウザでシークレットモードを開く"
        Write-Host "2. http://localhost:5173/donations にアクセス"
        Write-Host ""
    }
    
    default {
        Write-Host ""
        Write-Host "無効な選択です" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "追加のヒント:" -ForegroundColor Cyan
Write-Host "- ブラウザのCookieをクリアしてください (F12 > Application > Cookies)"
Write-Host "- シークレットモード/プライベートウィンドウを使用してください"
Write-Host "- それでもエラーが続く場合は START_DEV.md を参照"
Write-Host ""

