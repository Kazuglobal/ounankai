// シンプルなローカルAPIサーバー（HTTP 431エラー回避用）
import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// .envファイルを読み込み
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = 3001;

// Stripeの初期化
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error('❌ STRIPE_SECRET_KEY is not set in environment variables');
  process.exit(1);
}

if (!stripeSecretKey.startsWith('sk_')) {
  console.error('❌ STRIPE_SECRET_KEY must start with "sk_"');
  console.error('Current value starts with:', stripeSecretKey.substring(0, 5));
  process.exit(1);
}

console.log('✅ Stripe initialized with key:', stripeSecretKey.substring(0, 15) + '...');

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
});

// ミドルウェア
app.use(cors());
app.use(express.json());

// リクエストログ
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Stripe Checkout セッション作成エンドポイント
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { priceId, successUrl, cancelUrl } = req.body;

    console.log('📝 Checkout request:', { priceId, successUrl, cancelUrl });

    if (!priceId) {
      return res.status(400).json({ error: 'Missing priceId in request body' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl || 'http://localhost:3000/donations?success=true',
      cancel_url: cancelUrl || 'http://localhost:3000/donations?cancelled=true',
      automatic_tax: { enabled: true },
    });

    console.log('✅ Checkout session created:', session.id);

    res.json({
      url: session.url,
      sessionId: session.id,
    });

  } catch (error) {
    console.error('❌ Error creating checkout session:', error);

    if (error instanceof Stripe.errors.StripeError) {
      return res.status(500).json({
        error: error.message,
        type: error.type,
        code: error.code,
      });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
});

// ヘルスチェック
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// サーバー起動
app.listen(PORT, () => {
  console.log('');
  console.log('🚀 ローカルAPIサーバーが起動しました！');
  console.log('');
  console.log(`   ポート: ${PORT}`);
  console.log(`   URL: http://localhost:${PORT}`);
  console.log('');
  console.log('📝 利用可能なエンドポイント:');
  console.log(`   POST http://localhost:${PORT}/api/create-checkout-session`);
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log('');
  console.log('💡 次のステップ:');
  console.log('   別のターミナルで: npm run dev');
  console.log('   アクセス: http://localhost:5173/donations');
  console.log('');
  console.log('⏹  停止: Ctrl+C');
  console.log('');
});

// エラーハンドリング
process.on('unhandledRejection', (error) => {
  console.error('Unhandled rejection:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);
});

