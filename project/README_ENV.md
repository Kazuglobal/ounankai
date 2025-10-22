# 環境設定ファイルの設定方法

## 概要
このプロジェクトでは、環境変数とアプリケーション設定を適切に管理するための設定ファイルを提供しています。

## ファイル構成

### 1. 環境変数ファイル
- **`.env`** - 実際の環境変数（手動作成が必要）
- **`.env.template`** - 環境変数のテンプレート（作成済み）

### 2. 設定ファイル
- **`src/config/environment.ts`** - 環境変数の管理と型定義
- **`src/config/constants.ts`** - アプリケーション定数
- **`src/config/index.ts`** - 設定のエクスポート

## セットアップ手順

### 1. 環境変数ファイルの作成
```bash
# プロジェクトルートで実行
cp .env.template .env
```

### 2. 環境変数の設定
`.env`ファイルを編集して、必要な環境変数を設定してください：

```env
# アプリケーション設定
VITE_APP_TITLE=大南会
VITE_APP_VERSION=1.0.0

# API設定（必要に応じて）
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key

# EmailJS設定（必要に応じて）
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. 設定の使用
```typescript
import { environment, APP_INFO, ROUTES } from './config';

// 環境変数の使用
console.log(environment.appTitle);
console.log(environment.apiUrl);

// 定数の使用
console.log(APP_INFO.TITLE);
console.log(ROUTES.HOME);
```

## 注意事項

1. **`.env`ファイルは`.gitignore`に追加済み**です
2. **Viteプロジェクトでは`VITE_`プレフィックスが必要**です
3. **機密情報は環境変数で管理**し、コードに直接記述しないでください
4. **本番環境では適切な環境変数管理システム**を使用してください

## トラブルシューティング

### 環境変数が読み込まれない場合
1. `.env`ファイルがプロジェクトルートに存在するか確認
2. 環境変数名に`VITE_`プレフィックスが付いているか確認
3. アプリケーションを再起動

### 型エラーが発生する場合
1. `src/config/environment.ts`の型定義を確認
2. TypeScriptの設定を確認
3. 必要な型定義を追加
