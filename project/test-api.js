// Stripe API エンドポイントのテストスクリプト
// 使用方法: node test-api.js

const testAPIEndpoint = async () => {
  console.log('🧪 Stripe APIエンドポイントのテスト開始\n');

  const endpoint = 'http://localhost:3000/api/create-checkout-session';
  const testPriceId = process.env.VITE_STRIPE_PRICE_SCHOLARSHIP || 'price_1SL1EKC4XG5f5gwPgClswr7s';

  console.log('📍 エンドポイント:', endpoint);
  console.log('💰 テスト価格ID:', testPriceId);
  console.log('');

  try {
    console.log('🔄 リクエスト送信中...');
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: testPriceId,
        successUrl: 'http://localhost:3000/donations?success=true',
        cancelUrl: 'http://localhost:3000/donations?cancelled=true',
      }),
    });

    console.log('📡 レスポンス受信');
    console.log('  ステータス:', response.status, response.statusText);
    console.log('  OK:', response.ok);
    console.log('');

    const contentType = response.headers.get('content-type');
    console.log('📋 Content-Type:', contentType);
    console.log('');

    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      console.log('📦 レスポンスデータ:');
      console.log(JSON.stringify(data, null, 2));
      console.log('');

      if (response.ok) {
        if (data.url) {
          console.log('✅ テスト成功！');
          console.log('🔗 Checkout URL:', data.url);
        } else {
          console.log('⚠️ URLが見つかりません');
        }
      } else {
        console.log('❌ テスト失敗');
        console.log('エラー:', data.error || data.message || 'Unknown error');
      }
    } else {
      const text = await response.text();
      console.log('📄 レスポンステキスト:');
      console.log(text);
      console.log('');
      console.log('❌ JSONレスポンスではありません');
    }

  } catch (error) {
    console.log('');
    console.log('❌ エラー発生:');
    console.error(error);
    console.log('');
    console.log('💡 確認事項:');
    console.log('  1. Vercel Dev Serverが起動していますか？');
    console.log('     → npm run dev:vercel');
    console.log('  2. .envファイルにSTRIPE_SECRET_KEYが設定されていますか？');
    console.log('  3. ポート3000が使用可能ですか？');
  }

  console.log('');
  console.log('🏁 テスト終了');
};

// Node.js 18+ でfetchが利用可能
testAPIEndpoint().catch(console.error);

