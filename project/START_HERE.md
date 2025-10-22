# 🚀 Stripe決済機能 - 起動手順（HTTP 431エラー解決済み）

## ✅ 解決済みの問題

HTTP 431エラー（Request Header Fields Too Large）を回避するため、シンプルなExpressサーバーを実装しました。

---

## 🎯 推奨起動方法

### 方法1: 自動起動（最も簡単）

**1つのコマンドでAPIサーバーとViteサーバーの両方を起動：**

```bash
npm run dev:full
```

これにより以下が自動的に起動します：
- ✅ APIサーバー（ポート3001）
- ✅ Viteフロントエンドサーバー（ポート5173）

**アクセス**: http://localhost:5173/donations

---

### 方法2: 手動起動（デバッグ用）

**ターミナル1: APIサーバー**
```bash
npm run dev:api
```

出力例：
```
🚀 ローカルAPIサーバーが起動しました！
   ポート: 3001
   URL: http://localhost:3001
```

**ターミナル2: Viteサーバー**
```bash
npm run dev
```

出力例：
```
VITE v5.4.2  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

**アクセス**: http://localhost:5173/donations

---

## 🧪 動作確認

1. **ブラウザで開く**: http://localhost:5173/donations

2. **「寄付する」ボタンをクリック**

3. **コンソールで以下のログを確認**:
   ```
   🔄 決済リクエスト開始
   プロキシリクエスト: POST /api/create-checkout-session
   プロキシレスポンス: 200 /api/create-checkout-session
   📡 レスポンス受信 {status: 200, ok: true}
   📦 受信データ {url: "https://checkout.stripe.com/...", sessionId: "..."}
   ✅ Checkoutページにリダイレクト
   ```

4. **Stripe Checkoutページが表示されることを確認**

5. **テストカードで決済**:
   - カード番号: `4242 4242 4242 4242`
   - 有効期限: `12/34`
   - CVC: `123`

---

## 🔧 トラブルシューティング

### エラー: "Cannot find module 'express'"

**解決策**:
```bash
npm install
```

### エラー: "Port 3001 is already in use"

**解決策**:
```bash
# Windowsの場合
netstat -ano | findstr :3001
taskkill /PID <PID番号> /F

# または別のポートを使用
# server.js の PORT を変更
```

### APIサーバーが起動しない

**確認事項**:
1. `.env`ファイルが存在するか
2. `STRIPE_SECRET_KEY`が`sk_test_`または`sk_live_`で始まるか
3. Node.jsのバージョンが18以上か

### 決済ページが表示されない

**確認事項**:
1. 両方のサーバーが起動しているか（APIとVite）
2. ブラウザのコンソールにエラーがないか
3. http://localhost:3001/api/health にアクセスして`{"status":"ok"}`が返るか

---

## 📝 ファイル構成

```
project/
├── server.js              # 新規: ローカルAPIサーバー（HTTP 431回避）
├── package.json           # 更新: express, cors, dotenv, concurrently追加
├── vite.config.ts         # 更新: プロキシ先をポート3001に変更
├── .env                   # 環境変数（STRIPE_SECRET_KEY必須）
└── src/
    └── pages/
        └── Donations.tsx  # 更新: 詳細なログ出力追加
```

---

## 🎉 成功！

この手順で以下が解決されました：
- ✅ HTTP 431エラーの回避
- ✅ シンプルで安定したローカル開発環境
- ✅ 詳細なデバッグログ出力
- ✅ Stripe決済の完全な動作

**次のステップ**: 本番環境へのデプロイ（`DEPLOYMENT_CHECKLIST.md`参照）

