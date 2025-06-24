# 🎯 EmailJS設定完了手順

## 現在の実装状況 ✅
- EmailJSライブラリ インストール済み
- Contact.tsx メール送信機能実装済み
- 送信状態管理（送信中、成功、エラー）実装済み
- 設定ファイル (`src/config/emailjs.ts`) 作成済み
- セットアップ手順書作成済み

## ⚡ 今すぐ実行する手順

### 1. EmailJS アカウント作成 (5分)
```
1. https://www.emailjs.com/ でアカウント作成
2. ounankai@gmail.com でログイン推奨
3. 無料プラン選択（月200通まで無料）
```

### 2. Gmail サービス連携 (3分)
```
EmailJSダッシュボードで：
1. 「Email Services」→「Add New Service」
2. 「Gmail」選択
3. 「Connect Account」でounankai@gmail.com連携
4. Service ID をコピー（例：service_abc123）
```

### 3. メールテンプレート作成 (5分)
```
1. 「Email Templates」→「Create New Template」
2. 以下の設定をコピペ：

件名：
【奥南会サイト】{{subject}} - {{from_name}}様

本文：
青森県立八戸西高等学校同窓会奥南会 様

お問い合わせフォームよりメッセージが届きました。

お名前: {{from_name}}
メール: {{from_email}} 
電話: {{phone}}
卒業年: {{graduation_year}}
種別: {{category}}
件名: {{subject}}

メッセージ:
{{message}}

3. Template ID をコピー（例：template_xyz789）
```

### 4. Public Key 取得 (1分)
```
1. 「Account」→「General」
2. Public Key をコピー（例：user_abc123xyz）
```

### 5. 設定ファイル更新 (1分)
`src/config/emailjs.ts` を以下のように更新：

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_abc123', // ステップ2のService ID
  TEMPLATE_ID: 'template_xyz789', // ステップ3のTemplate ID
  PUBLIC_KEY: 'user_abc123xyz', // ステップ4のPublic Key
};
```

### 6. 動作確認 (2分)
```bash
npm run dev
```
お問い合わせフォームからテスト送信して、ounankai@gmail.com にメールが届けばOK！

## 🚨 注意事項
- 無料プランは月200通制限
- スパムフィルターチェック推奨
- 本番運用前にテスト必須

## 💡 完了後の動作
フォーム送信 → 自動でounankai@gmail.comにメール転送 → 成功メッセージ表示