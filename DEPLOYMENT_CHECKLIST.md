# デプロイメントチェックリスト

## 📋 Vercelデプロイ前の確認事項

### 1. 環境変数の準備

#### ✅ ローカル開発環境
- [ ] `project/.env`ファイルが存在する
- [ ] `STRIPE_SECRET_KEY`が`sk_test_`で始まる
- [ ] `VITE_STRIPE_PUBLISHABLE_KEY`が`pk_test_`で始まる
- [ ] すべての`VITE_STRIPE_PRICE_*`が設定されている

#### ✅ Vercel本番環境
- [ ] Vercelダッシュボードで以下の環境変数を設定：
  - `STRIPE_SECRET_KEY` (sk_live_...)
  - `VITE_STRIPE_PUBLISHABLE_KEY` (pk_live_...)
  - `VITE_STRIPE_PRICE_SCHOLARSHIP`
  - `VITE_STRIPE_PRICE_FACILITY`
  - `VITE_STRIPE_PRICE_CLUB`
  - `VITE_STRIPE_PRICE_GLOBAL`
  - `VITE_STRIPE_PRICE_HERO`
  - `NODE_ENV` (production)

### 2. Stripe設定

#### ✅ テストモード（開発環境）
- [ ] Stripeダッシュボードでテストモードに切り替え
- [ ] テスト用の商品と価格を作成
- [ ] テスト用APIキーを取得
- [ ] Webhookエンドポイントを設定（オプション）

#### ✅ 本番モード（本番環境）
- [ ] Stripeダッシュボードで本番モードに切り替え
- [ ] 本番用の商品と価格を作成
- [ ] 本番用APIキーを取得
- [ ] Webhookエンドポイントを設定（推奨）
- [ ] 決済フローのテスト実施

### 3. コード確認

#### ✅ ファイル構成
- [ ] `project/vite.config.ts` - APIプロキシ設定が追加されている
- [ ] `vercel.json` - Vercel設定ファイルが存在する
- [ ] `api/create-checkout-session.ts` - APIエンドポイントが実装されている
- [ ] `project/package.json` - Vercel CLIと`dev:vercel`スクリプトが追加されている

#### ✅ セキュリティ
- [ ] `.env`ファイルが`.gitignore`に含まれている
- [ ] `.env.local`ファイルが`.gitignore`に含まれている
- [ ] シークレットキーがコードにハードコードされていない
- [ ] `.vercel`ディレクトリが`.gitignore`に含まれている

### 4. ローカルテスト

#### ✅ 開発サーバーの動作確認
```bash
cd project
npm run dev:vercel
```

- [ ] サーバーが正常に起動する
- [ ] http://localhost:3000 でアプリが表示される
- [ ] ブラウザコンソールにStripe環境変数チェックの結果が表示される
- [ ] エラーがない

#### ✅ 決済フローのテスト
- [ ] 寄付ページにアクセスできる
- [ ] 「寄付する」ボタンをクリックできる
- [ ] Stripe Checkoutページにリダイレクトされる
- [ ] テストカード（4242 4242 4242 4242）で決済できる
- [ ] 成功後に`/donations?success=true`にリダイレクトされる
- [ ] キャンセル後に`/donations?cancelled=true`にリダイレクトされる

### 5. Vercelデプロイ

#### ✅ デプロイ手順
```bash
# Vercel CLIでデプロイ
vercel --prod
```

または

- [ ] GitHubにコードをプッシュ
- [ ] Vercelダッシュボードでプロジェクトをインポート
- [ ] ビルド設定を確認
- [ ] 環境変数を設定
- [ ] デプロイを実行

#### ✅ デプロイ後の確認
- [ ] 本番URLにアクセスできる
- [ ] すべてのページが正常に表示される
- [ ] 決済フローが動作する（テストモードで確認）
- [ ] エラーログを確認（Vercelダッシュボード）
- [ ] パフォーマンスを確認（Lighthouse等）

### 6. 本番移行

#### ✅ Stripeを本番モードに切り替え
- [ ] 本番用の商品と価格が作成されている
- [ ] 本番用APIキーをVercelに設定
- [ ] 本番環境で決済テストを実施
- [ ] Webhookが正しく動作することを確認

#### ✅ モニタリング設定
- [ ] Vercel Analyticsを有効化
- [ ] Stripeダッシュボードで決済を監視
- [ ] エラーアラートを設定
- [ ] バックアップ計画を策定

### 7. ドキュメント

#### ✅ 必読ドキュメント
- [ ] `project/README_STRIPE.md` - Stripe設定の詳細ガイド
- [ ] `project/QUICKSTART_STRIPE.md` - クイックスタートガイド
- [ ] `project/README_ENV.md` - 環境変数設定ガイド

## 🚨 トラブルシューティング

### デプロイ時のよくあるエラー

#### エラー: "STRIPE_SECRET_KEY is not set"
**解決策**: Vercelダッシュボードで環境変数を設定し、再デプロイ

#### エラー: "Build failed"
**解決策**: 
1. ローカルで`npm run build`を実行して確認
2. `package.json`の依存関係を確認
3. Vercelのビルドログを確認

#### エラー: APIエンドポイントが404
**解決策**:
1. `vercel.json`の設定を確認
2. `api/`ディレクトリの構造を確認
3. Vercel Functionsのログを確認

## 📞 サポート

問題が解決しない場合：
1. Vercelのログを確認
2. Stripeのログを確認
3. ブラウザの開発者ツールを確認
4. プロジェクト管理者に連絡

## 🎉 デプロイ成功後

- [ ] チームメンバーに通知
- [ ] 動作確認URLを共有
- [ ] ドキュメントを更新
- [ ] 本番環境の監視を開始

