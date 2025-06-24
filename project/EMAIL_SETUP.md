# EmailJS設定手順

お問い合わせフォームからounankai@gmail.comへの自動転送機能を有効にするための設定手順です。

## 前提条件
- Gmail アカウント (ounankai@gmail.com) にアクセス権限があること
- EmailJS の無料アカウントを作成すること

## 1. EmailJSアカウント作成

1. [EmailJS公式サイト](https://www.emailjs.com/)にアクセス
2. 「Sign Up」をクリックしてアカウントを作成
3. メール認証を完了
4. ダッシュボードにログイン

## 2. メールサービス設定

1. 「Email Services」で「Add New Service」をクリック
2. 「Gmail」を選択
3. サービス名を「ounankai_service」に設定
4. ounankai@gmail.comでGmail連携を行う
5. Service IDをメモ（例：service_ounankai）

## 3. メールテンプレート作成

1. 「Email Templates」で「Create New Template」をクリック
2. Template名を「Contact Form」に設定
3. 以下のテンプレートを設定：

**件名：**
```
【同窓会サイト】{{subject}} - {{from_name}}様より
```

**メール本文：**
```
青森県立八戸西高等学校同窓会奥南会 様

同窓会サイトのお問い合わせフォームより以下のメッセージが届きました。

------------------
お名前: {{from_name}}
メールアドレス: {{from_email}}
電話番号: {{phone}}
卒業年: {{graduation_year}}
お問い合わせ種別: {{category}}
件名: {{subject}}

メッセージ:
{{message}}
------------------

このメッセージは自動送信されました。
```

4. Template IDをメモ（例：template_contact）

## 4. Public Key取得

1. 「Account」→「General」でPublic Keyを確認
2. Public Keyをメモ

## 5. 設定ファイル更新

`src/config/emailjs.ts`ファイルを以下のように更新：

```typescript
export const EMAIL_CONFIG = {
  SERVICE_ID: 'your_service_id', // ステップ2でメモしたService ID
  TEMPLATE_ID: 'your_template_id', // ステップ3でメモしたTemplate ID
  PUBLIC_KEY: 'your_public_key', // ステップ4でメモしたPublic Key
};
```

## 6. 動作確認

1. `npm run dev`でアプリケーションを起動
2. お問い合わせフォームからテストメッセージを送信
3. ounankai@gmail.comにメールが届くことを確認

## 注意事項

- EmailJSの無料プランでは月200通までの制限があります
- 大量のメール送信が必要な場合は有料プランへのアップグレードを検討してください
- スパムフィルターに引っかからないよう、適切な件名とメール本文を設定してください