/**
 * 環境変数チェックユーティリティ
 * 開発時にStripe関連の環境変数が正しく設定されているか確認
 */

export interface EnvCheckResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  info: Record<string, string>;
}

export function checkStripeEnv(): EnvCheckResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const info: Record<string, string> = {};

  // 必須環境変数のチェック
  const requiredVars = [
    'VITE_STRIPE_PUBLISHABLE_KEY',
    'VITE_STRIPE_PRICE_SCHOLARSHIP',
    'VITE_STRIPE_PRICE_FACILITY',
    'VITE_STRIPE_PRICE_CLUB',
    'VITE_STRIPE_PRICE_GLOBAL',
  ];

  requiredVars.forEach((varName) => {
    const value = import.meta.env[varName];
    if (!value) {
      errors.push(`❌ ${varName} が設定されていません`);
    } else {
      info[varName] = value.substring(0, 20) + '...';
    }
  });

  // 公開可能キーの検証
  const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
  if (publishableKey) {
    if (!publishableKey.startsWith('pk_')) {
      errors.push('❌ VITE_STRIPE_PUBLISHABLE_KEY は pk_ で始まる必要があります');
    } else if (publishableKey.startsWith('pk_test_')) {
      info['環境'] = 'テストモード';
    } else if (publishableKey.startsWith('pk_live_')) {
      info['環境'] = '本番モード';
      warnings.push('⚠️ 本番モードのキーが使用されています');
    }
  }

  // 価格IDの検証
  const priceVars = [
    'VITE_STRIPE_PRICE_SCHOLARSHIP',
    'VITE_STRIPE_PRICE_FACILITY',
    'VITE_STRIPE_PRICE_CLUB',
    'VITE_STRIPE_PRICE_GLOBAL',
  ];

  priceVars.forEach((varName) => {
    const value = import.meta.env[varName];
    if (value && !value.startsWith('price_')) {
      errors.push(`❌ ${varName} は price_ で始まる必要があります`);
    }
  });

  // ヒーロー価格IDのチェック（オプション）
  const heroPrice = import.meta.env.VITE_STRIPE_PRICE_HERO;
  if (!heroPrice) {
    warnings.push('⚠️ VITE_STRIPE_PRICE_HERO が未設定（奨学金支援を使用）');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    info,
  };
}

/**
 * 開発環境で環境変数をコンソールに出力
 */
export function logStripeEnv(): void {
  if (import.meta.env.DEV) {
    console.group('🔍 Stripe環境変数チェック');
    
    const result = checkStripeEnv();

    if (result.errors.length > 0) {
      console.error('エラー:');
      result.errors.forEach((error) => console.error(error));
    }

    if (result.warnings.length > 0) {
      console.warn('警告:');
      result.warnings.forEach((warning) => console.warn(warning));
    }

    if (Object.keys(result.info).length > 0) {
      console.log('設定情報:');
      console.table(result.info);
    }

    if (result.isValid) {
      console.log('✅ すべての必須環境変数が設定されています');
    } else {
      console.error('❌ 環境変数の設定に問題があります');
      console.log('💡 .env ファイルを確認して、開発サーバーを再起動してください');
    }

    console.groupEnd();
  }
}

