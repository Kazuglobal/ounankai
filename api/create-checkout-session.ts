import Stripe from 'stripe';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error('❌ STRIPE_SECRET_KEY is not set in environment variables');
  throw new Error('STRIPE_SECRET_KEY is not set. Please configure your environment variables.');
}

// Stripeシークレットキーのバリデーション
if (!stripeSecretKey.startsWith('sk_')) {
  console.error('❌ STRIPE_SECRET_KEY must start with "sk_" (secret key), not "pk_" (publishable key)');
  throw new Error('Invalid STRIPE_SECRET_KEY format. Please use a secret key (sk_test_... or sk_live_...)');
}

console.log('✅ Stripe initialized with key:', stripeSecretKey.substring(0, 15) + '...');

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORSヘッダーの追加
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONSリクエストへの対応
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { priceId, successUrl, cancelUrl } = req.body ?? {};

  console.log('📝 Checkout request received:', { priceId, successUrl, cancelUrl });

  if (!priceId) {
    console.error('❌ Missing priceId in request');
    return res.status(400).json({ error: 'Missing priceId in request body.' });
  }

  try {
    console.log('🔄 Creating Stripe checkout session...');
    
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl ?? `${req.headers.origin ?? ''}/donations?success=true`,
      cancel_url: cancelUrl ?? `${req.headers.origin ?? ''}/donations?cancelled=true`,
      automatic_tax: { enabled: true },
    });

    console.log('✅ Checkout session created:', session.id);

    return res.status(200).json({
      url: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    console.error('❌ Failed to create checkout session:', error);
    
    if (error instanceof Stripe.errors.StripeError) {
      console.error('Stripe error details:', {
        type: error.type,
        message: error.message,
        code: error.code,
      });
      return res.status(500).json({ 
        error: error.message,
        type: error.type,
        code: error.code,
      });
    }
    
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

