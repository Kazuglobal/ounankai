import Stripe from 'stripe';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { setCorsHeaders, handlePreflight } from './utils/cors';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set. Please configure your environment variables.');
}

if (!stripeSecretKey.startsWith('sk_')) {
  throw new Error('Invalid STRIPE_SECRET_KEY. Please provide a secret key that starts with "sk_".');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
});

type SupportedMethod = 'card' | 'paypay' | 'konbini' | 'bank_transfer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set secure CORS headers - only allow whitelisted origins
  const isCorsValid = setCorsHeaders(req, res, 'POST, OPTIONS');

  // Handle preflight requests
  if (handlePreflight(req, res)) {
    return;
  }

  // Reject requests from unauthorized origins
  if (!isCorsValid) {
    return res.status(403).json({
      error: 'Forbidden',
      message: 'Origin not allowed'
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { priceId, successUrl, cancelUrl, paymentMethod } = req.body ?? {};

  if (!priceId) {
    return res.status(400).json({ error: 'Missing priceId in request body.' });
  }

  const method: SupportedMethod = ['card', 'paypay', 'konbini', 'bank_transfer'].includes(
    paymentMethod,
  )
    ? paymentMethod
    : 'card';

  let paymentMethodTypes: Stripe.Checkout.SessionCreateParams.PaymentMethodType[] = ['card'];
  const paymentMethodOptions: Stripe.Checkout.SessionCreateParams.PaymentMethodOptions = {};
  let customerCreation: Stripe.Checkout.SessionCreateParams.CustomerCreation | undefined;
  const phoneNumberCollection: Stripe.Checkout.SessionCreateParams.PhoneNumberCollection = {
    enabled: method === 'konbini',
  };

  switch (method) {
    case 'paypay':
      paymentMethodTypes = ['paypay'];
      break;
    case 'konbini':
      paymentMethodTypes = ['konbini'];
      paymentMethodOptions.konbini = {
        expires_after_days: 3,
      };
      break;
    case 'bank_transfer':
      paymentMethodTypes = ['customer_balance'];
      paymentMethodOptions.customer_balance = {
        funding_type: 'bank_transfer',
        bank_transfer: {
          type: 'jp_bank_transfer',
        },
      };
      customerCreation = 'always';
      break;
    default:
      paymentMethodTypes = ['card'];
      break;
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl ?? `${req.headers.origin ?? ''}/donations?success=true`,
      cancel_url: cancelUrl ?? `${req.headers.origin ?? ''}/donations?cancelled=true`,
      payment_method_types: paymentMethodTypes,
      payment_method_options:
        Object.keys(paymentMethodOptions).length > 0 ? paymentMethodOptions : undefined,
      customer_creation: customerCreation,
      phone_number_collection,
      billing_address_collection: 'required',
      automatic_tax: { enabled: true },
      locale: 'ja',
      payment_intent_data: {
        metadata: {
          donation_price_id: priceId,
          donation_payment_method: method,
        },
      },
      metadata: {
        donation_price_id: priceId,
        donation_payment_method: method,
      },
    });

    return res.status(200).json({
      url: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    if (error instanceof Stripe.errors.StripeError) {
      return res.status(500).json({
        error: error.message,
        type: error.type,
        code: error.code,
      });
    }

    console.error('Unexpected error creating checkout session:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

