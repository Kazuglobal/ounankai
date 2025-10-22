# 🚨 HTTP 431エラーの解決方法

## 問題
`Request Header Fields Too Large (431)` エラーが発生しています。

これはVercel Dev Serverの既知の問題で、ブラウザのCookieやセッションデータが大きすぎる場合に発生します。

## 解決方法

### 方法1: ブラウザのキャッシュとCookieをクリア（推奨）

1. **ブラウザの開発者ツールを開く** (F12キー)
2. **Application タブ**（Chromeの場合）または **Storage タブ**（Firefoxの場合）を開く
3. **Cookies** セクションで `localhost` を右クリック → **Clear**
4. **Local Storage** と **Session Storage** も同様にクリア
5. **ページをリロード** (Ctrl+Shift+R)

### 方法2: シークレットモード/プライベートブラウジングを使用

1. ブラウザのシークレットモード/プライベートウィンドウを開く
2. http://localhost:3000/donations にアクセス
3. 寄付ボタンをテスト

### 方法3: Vercel Dev Serverを再起動

```bash
# 現在のサーバーを停止 (Ctrl+C)
# 再起動
npm run dev:vercel
```

### 方法4: 異なるポートを使用

Vercel Dev Serverの代わりに、通常のVite開発サーバーを使用：

#### ターミナル1: Vercel Functions（APIのみ）
```bash
cd C:\Users\s1598\Downloads\ounamkai2025
vercel dev --listen 3001
```

#### ターミナル2: Vite開発サーバー
```bash
cd C:\Users\s1598\Downloads\ounamkai2025\project
npm run dev
```

この場合、`vite.config.ts`のプロキシ設定により、`/api`リクエストがポート3001に転送されます。

アクセス: http://localhost:5173/donations

### 方法5: 一時的な回避策（開発用）

`project/src/pages/Donations.tsx`のAPIエンドポイントを直接指定：

```typescript
const checkoutEndpoint = 'http://localhost:3001/api/create-checkout-session';
```

この場合、Vercel Dev Serverをポート3001で起動してください。

---

## 推奨される開発フロー

1. **ブラウザのCookieをクリア**（最も簡単）
2. **シークレットモードで開発**（キャッシュの問題を回避）
3. **定期的にサーバーを再起動**

---

## それでも解決しない場合

以下の情報を確認してください：

1. **ブラウザのネットワークタブ**
   - `/api/create-checkout-session`のリクエストヘッダーサイズ
   - Cookieの数とサイズ

2. **Vercel Dev Serverのログ**
   - ターミナルに表示されるエラーメッセージ

3. **別のブラウザで試す**
   - Chrome → Firefox または Edge

---

## 本番環境では問題ありません

この431エラーはローカル開発環境特有の問題です。Vercelにデプロイした本番環境では発生しません。

