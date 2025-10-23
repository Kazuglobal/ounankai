import type { VercelRequest, VercelResponse } from '@vercel/node';

// Whitelist of allowed origins for CORS
export const ALLOWED_ORIGINS = [
  'https://ounankai.vercel.app',
  'https://www.ounankai.jp',
  'https://ounankai.jp',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:5173', 'http://localhost:3000'] : []),
];

/**
 * Sets secure CORS headers on the response
 * Only allows requests from whitelisted origins to prevent CSRF attacks
 *
 * @param req - Vercel request object
 * @param res - Vercel response object
 * @param allowedMethods - HTTP methods to allow (default: 'POST, OPTIONS')
 * @returns true if the origin is allowed, false otherwise
 */
export function setCorsHeaders(
  req: VercelRequest,
  res: VercelResponse,
  allowedMethods: string = 'POST, OPTIONS'
): boolean {
  const origin = req.headers.origin;

  // Reject requests without an Origin header
  if (!origin) {
    console.warn('Blocked request with missing Origin header');
    return false;
  }

  // Check if origin is in whitelist
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', allowedMethods);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return true;
  } else {
    // Origin not allowed - log for monitoring
    console.warn(`Blocked request from unauthorized origin: ${origin}`);
    return false;
  }
}

/**
 * Handles OPTIONS preflight requests with proper CORS headers
 * Must be called AFTER setCorsHeaders to ensure CORS headers are set
 *
 * @param req - Vercel request object
 * @param res - Vercel response object
 * @returns true if this was an OPTIONS request and was handled
 */
export function handlePreflight(req: VercelRequest, res: VercelResponse): boolean {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  return false;
}
