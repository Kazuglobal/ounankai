# Stripe決済 クイックスタートガイド

## 🚀 5分で始めるStripe決済

### ステップ1: Stripeアカウントの準備

1. [Stripe](https://stripe.com) でアカウントを作成（既にある場合はスキップ）
2. **テストモード**に切り替える（画面右上のトグル）
3. [APIキーページ](https://dashboard.stripe.com/test/apikeys)を開く
4. 以下の2つのキーをコピー：
   - **公開可能キー**: `pk_test_...`で始まる
   - **シークレットキー**: `sk_test_...`で始まる（「表示」ボタンをクリック）

### ステップ2: 環境変数の設定

`project/.env`ファイルを開いて、以下を更新：

```env
# この行を実際のキーに置き換え
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_SECRET_KEY_HERE
```

**重要**: 
- `pk_test_`で始まる公開キーを`VITE_STRIPE_PUBLISHABLE_KEY`に
- `sk_test_`で始まるシークレットキーを`STRIPE_SECRET_KEY`に

### ステップ3: テスト用の商品と価格を作成

#### オプションA: Stripe CLIで自動作成（推奨）

```bash
# Stripe CLIをインストール（初回のみ）
# Windows: https://github.com/stripe/stripe-cli/releases からダウンロード

# Stripeにログイン
stripe login

# テスト商品を作成
stripe products create --name="奨学金支援" --description="未来の学生たちを支援"
# 表示されたProduct IDをコピー: prod_xxx

# 価格を作成（10,000円）
stripe prices create --product=prod_xxx --currency=jpy --unit-amount=10000
# 表示されたPrice IDをコピー: price_xxx
```

#### オプションB: Stripeダッシュボードで手動作成

1. [商品ページ](https://dashboard.stripe.com/test/products)を開く
2. 「商品を追加」をクリック
3. 商品情報を入力：
   - **名前**: 奨学金支援
   - **説明**: 未来の学生たちを支援するための奨学基金です。
   - **価格**: ¥10,000（JPY）
4. 「商品を保存」をクリック
5. 作成された価格IDをコピー（`price_`で始まる）

同様に、以下の商品も作成：
- 施設整備基金: ¥50,000
- 部活動応援: ¥5,000
- 海外交流支援: ¥20,000

### ステップ4: 価格IDを環境変数に設定

`project/.env`ファイルに価格IDを追加：

```env
VITE_STRIPE_PRICE_SCHOLARSHIP=price_YOUR_SCHOLARSHIP_ID
VITE_STRIPE_PRICE_FACILITY=price_YOUR_FACILITY_ID
VITE_STRIPE_PRICE_CLUB=price_YOUR_CLUB_ID
VITE_STRIPE_PRICE_GLOBAL=price_YOUR_GLOBAL_ID
VITE_STRIPE_PRICE_HERO=price_YOUR_SCHOLARSHIP_ID
```

### ステップ5: 開発サーバーの起動

```bash
cd project

# Vercel Dev Serverで起動（推奨）
npm run dev:vercel
```

ブラウザで http://localhost:3000 を開く

### ステップ6: 動作確認

1. 寄付ページ（`/donations`）にアクセス
2. 任意の「寄付する」ボタンをクリック
3. Stripe Checkoutページにリダイレクトされることを確認

### ステップ7: テスト決済

Stripe Checkoutページで以下のテストカードを使用：

```
カード番号: 4242 4242 4242 4242
有効期限: 12/34（未来の任意の日付）
CVC: 123（任意の3桁）
郵便番号: 123-4567（任意）
```

決済完了後、`/donations?success=true`にリダイレクトされることを確認！

---

## ⚠️ よくあるエラーと解決方法

### エラー: "STRIPE_SECRET_KEY must start with 'sk_'"

**原因**: 公開キー（pk_）をシークレットキーに設定している

**解決策**: `.env`ファイルの`STRIPE_SECRET_KEY`を`sk_test_`で始まるキーに変更

### エラー: "決済ページの表示に失敗しました"

**原因**: APIエンドポイントに接続できない

**解決策**: 
1. `npm run dev:vercel`でサーバーを起動
2. ブラウザをリロード
3. それでもダメなら、サーバーを再起動

### ボタンを押しても何も起こらない

**原因**: 環境変数が読み込まれていない

**解決策**:
1. `.env`ファイルを保存
2. 開発サーバーを再起動（Ctrl+C → `npm run dev:vercel`）
3. ブラウザをリロード

---

## 📝 次のステップ

✅ ローカル開発環境でテスト完了したら：

1. **本番環境の準備**
   - Stripeを本番モードに切り替え
   - 本番用のAPIキーを取得（`sk_live_`、`pk_live_`）
   - 本番用の商品と価格を作成

2. **Vercelへのデプロイ**
   - Vercelダッシュボードで環境変数を設定
   - 本番用のキーと価格IDを追加
   - デプロイして動作確認

3. **Webhook設定（推奨）**
   - 決済の成功/失敗を確実に検知
   - 寄付者への確認メール送信

詳細は`README_STRIPE.md`を参照してください。

---

## 🆘 サポートが必要な場合

1. ブラウザのコンソールを確認（F12キー）
2. サーバーのターミナル出力を確認
3. `README_STRIPE.md`のトラブルシューティングセクションを確認
4. それでも解決しない場合は、プロジェクト管理者に連絡

