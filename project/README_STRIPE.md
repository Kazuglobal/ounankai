# Stripe決済機能 設定ガイド

## 概要
このプロジェクトでは、Stripe Checkoutを使用して寄付の決済機能を実装しています。ローカル開発環境とVercel本番環境の両方で動作するように設定されています。

## 前提条件

1. **Stripeアカウント**: [https://stripe.com](https://stripe.com) でアカウントを作成
2. **Node.js**: v18以上
3. **Vercel CLI**: ローカル開発用（自動インストール済み）

## セットアップ手順

### 1. Stripeダッシュボードでの設定

#### APIキーの取得
1. Stripeダッシュボードにログイン: [https://dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys)
2. **テストモード**に切り替え（開発環境用）
3. 以下のキーを取得：
   - **公開可能キー** (Publishable key): `pk_test_...`
   - **シークレットキー** (Secret key): `sk_test_...`

#### 価格（Price）の作成
1. Stripeダッシュボード > **商品** > **商品を追加**
2. 各寄付オプション用の商品を作成：
   - 奨学金支援（推奨: ¥10,000）
   - 施設整備基金（推奨: ¥50,000）
   - 部活動応援（推奨: ¥5,000）
   - 海外交流支援（推奨: ¥20,000）
3. 各商品の**価格ID** (price_xxx) をメモ

### 2. 環境変数の設定

#### ローカル開発環境
`project/.env`ファイルを編集：

```env
# Stripe公開キー（クライアント側で使用）
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY

# Stripe価格ID
VITE_STRIPE_PRICE_SCHOLARSHIP=price_YOUR_SCHOLARSHIP_PRICE_ID
VITE_STRIPE_PRICE_FACILITY=price_YOUR_FACILITY_PRICE_ID
VITE_STRIPE_PRICE_CLUB=price_YOUR_CLUB_PRICE_ID
VITE_STRIPE_PRICE_GLOBAL=price_YOUR_GLOBAL_PRICE_ID
VITE_STRIPE_PRICE_HERO=price_YOUR_HERO_PRICE_ID

# Stripeシークレットキー（サーバー側で使用）
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY
```

**重要**: 
- `VITE_`プレフィックスが付いた変数はクライアント側で使用されます
- `STRIPE_SECRET_KEY`はサーバー側でのみ使用され、クライアントに露出しません

#### Vercel本番環境
1. Vercelダッシュボード > プロジェクト > **Settings** > **Environment Variables**
2. 以下の環境変数を追加：

| 変数名 | 値 | 環境 |
|--------|-----|------|
| `VITE_STRIPE_PUBLISHABLE_KEY` | `pk_live_...` | Production |
| `VITE_STRIPE_PRICE_SCHOLARSHIP` | `price_...` | Production |
| `VITE_STRIPE_PRICE_FACILITY` | `price_...` | Production |
| `VITE_STRIPE_PRICE_CLUB` | `price_...` | Production |
| `VITE_STRIPE_PRICE_GLOBAL` | `price_...` | Production |
| `VITE_STRIPE_PRICE_HERO` | `price_...` | Production |
| `STRIPE_SECRET_KEY` | `sk_live_...` | Production |

**注意**: 本番環境では必ず`pk_live_`と`sk_live_`のキーを使用してください。

### 3. ローカル開発環境の起動

#### 方法1: Vercel Dev Server（推奨）
Vercel Dev Serverを使用すると、本番環境と同じ動作を再現できます。

```bash
cd project
npm install
npm run dev:vercel
```

このコマンドは以下を実行します：
- Vite開発サーバーの起動
- Vercel Serverless Functionsのエミュレート
- APIエンドポイント `/api/create-checkout-session` が使用可能

アクセス: http://localhost:3000

#### 方法2: 通常のVite開発サーバー
```bash
cd project
npm install
npm run dev
```

この方法では、APIリクエストが`vite.config.ts`のプロキシ設定を通じて`localhost:3000`にリダイレクトされます。

**注意**: この方法を使用する場合は、別のターミナルで`npm run dev:vercel`も実行する必要があります。

アクセス: http://localhost:5173

## 動作確認

### 1. ローカルでのテスト
1. 開発サーバーを起動（`npm run dev:vercel`）
2. ブラウザで寄付ページにアクセス
3. 任意の寄付オプションで「寄付する」ボタンをクリック
4. Stripe Checkoutページにリダイレクトされることを確認

### 2. テストカード情報
Stripeのテストモードでは、以下のカード情報を使用できます：

- **カード番号**: `4242 4242 4242 4242`
- **有効期限**: 未来の任意の日付（例: `12/34`）
- **CVC**: 任意の3桁（例: `123`）
- **郵便番号**: 任意の番号

### 3. 成功の確認
- 決済成功後、`/donations?success=true`にリダイレクトされます
- キャンセル後、`/donations?cancelled=true`にリダイレクトされます

## トラブルシューティング

### エラー: "決済ページの表示に失敗しました"

#### 原因1: STRIPE_SECRET_KEYが未設定または誤っている
**解決策**:
1. `.env`ファイルの`STRIPE_SECRET_KEY`を確認
2. `sk_test_`または`sk_live_`で始まる正しいシークレットキーを設定
3. `pk_`で始まる公開キーを設定していないか確認

#### 原因2: APIエンドポイントに接続できない
**解決策**:
1. Vercel Dev Serverが起動しているか確認（`npm run dev:vercel`）
2. ブラウザの開発者ツールでネットワークタブを確認
3. `/api/create-checkout-session`へのリクエストが404エラーの場合、Vercel Dev Serverを再起動

#### 原因3: 価格IDが無効
**解決策**:
1. Stripeダッシュボードで価格IDが正しいか確認
2. `.env`ファイルの`VITE_STRIPE_PRICE_*`変数を確認
3. テストモードと本番モードの価格IDが混在していないか確認

### エラー: "This value must be greater than or equal to 50"

**原因**: Stripeでは最小金額が設定されています（JPYの場合は¥50）

**解決策**: Stripeダッシュボードで価格を¥50以上に設定

### ボタンを押しても何も起こらない

**解決策**:
1. ブラウザのコンソールを確認（F12キー）
2. 環境変数が正しく読み込まれているか確認：
   ```javascript
   console.log(import.meta.env.VITE_STRIPE_PRICE_SCHOLARSHIP)
   ```
3. 開発サーバーを再起動

## 本番環境へのデプロイ

### 1. Vercelへのデプロイ
```bash
# Vercel CLIでデプロイ
vercel --prod
```

または、GitHub連携でデプロイ：
1. GitHubにコードをプッシュ
2. Vercelダッシュボードでプロジェクトをインポート
3. 環境変数を設定（上記参照）

### 2. 本番環境の確認
1. デプロイ後、本番URLにアクセス
2. 寄付機能をテスト（テストモードで）
3. 問題なければ、Stripeを本番モードに切り替え
4. 本番用の環境変数（`pk_live_`、`sk_live_`）を設定

## セキュリティのベストプラクティス

1. **シークレットキーを絶対にGitにコミットしない**
   - `.env`ファイルは`.gitignore`に追加済み
   - 環境変数はVercelダッシュボードで管理

2. **公開キーと秘密キーを混同しない**
   - 公開キー（`pk_`）: クライアント側で使用可能
   - シークレットキー（`sk_`）: サーバー側でのみ使用

3. **テストモードと本番モードを分離**
   - 開発環境: `sk_test_`、`pk_test_`
   - 本番環境: `sk_live_`、`pk_live_`

4. **Webhookの設定（推奨）**
   - Stripeダッシュボードでwebhookを設定
   - 決済の成功/失敗を確実に検知

## 参考リンク

- [Stripe Checkout ドキュメント](https://stripe.com/docs/checkout)
- [Stripe API リファレンス](https://stripe.com/docs/api)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Vite 環境変数](https://vitejs.dev/guide/env-and-mode.html)

## サポート

問題が解決しない場合は、以下を確認してください：
1. ブラウザのコンソールログ
2. Vercel Dev Serverのターミナル出力
3. Stripeダッシュボードのログ

それでも解決しない場合は、プロジェクト管理者にお問い合わせください。

