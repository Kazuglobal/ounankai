# Security Policy

## CORS Configuration

### Overview
This application implements strict Cross-Origin Resource Sharing (CORS) policies to prevent unauthorized access and CSRF attacks.

### Allowed Origins
The following origins are whitelisted for API access:

**Production:**
- `https://ounankai.vercel.app`
- `https://www.ounankai.jp`
- `https://ounankai.jp`

**Development (NODE_ENV=development only):**
- `http://localhost:5173` (Vite dev server)
- `http://localhost:3000` (Alternative dev server)

### Implementation

#### API Endpoints
All API endpoints use the CORS utility located at `api/utils/cors.ts`:

```typescript
import { setCorsHeaders, handlePreflight } from './utils/cors';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set secure CORS headers
  setCorsHeaders(req, res, 'POST, OPTIONS');

  // Handle preflight
  if (handlePreflight(req, res)) {
    return;
  }

  // ... rest of handler
}
```

#### Adding New Origins
To add a new allowed origin:

1. Open `api/utils/cors.ts`
2. Add the origin to the `ALLOWED_ORIGINS` array
3. Ensure the origin uses HTTPS in production
4. Test thoroughly before deploying

### Security Headers

The following security headers are set globally in `vercel.json`:

- **X-Content-Type-Options**: `nosniff` - Prevents MIME type sniffing
- **X-Frame-Options**: `DENY` - Prevents clickjacking attacks
- **X-XSS-Protection**: `1; mode=block` - Enables XSS filtering

### Monitoring

Unauthorized origin access attempts are logged:
```
Blocked request from unauthorized origin: https://malicious-site.com
```

Monitor your logs regularly for suspicious activity.

### Reporting Security Issues

If you discover a security vulnerability, please report it to:
- Create a private security advisory on GitHub
- Or email: security@ounankai.jp (if configured)

**Do not** create public issues for security vulnerabilities.

## Best Practices

### For Developers

1. **Never use wildcard CORS (`*`)** in production
2. **Always validate origin** before setting CORS headers
3. **Use HTTPS** for all production origins
4. **Keep dependencies updated** to patch security vulnerabilities
5. **Review logs** for unauthorized access attempts
6. **Implement rate limiting** for API endpoints (recommended)
7. **Use environment variables** for sensitive configuration

### For API Consumers

1. Ensure your requests come from an allowed origin
2. Use HTTPS connections only
3. Include proper `Origin` headers in requests
4. Handle CORS errors gracefully in your application

## Environment Variables

The following environment variables should be configured:

### Required
- `STRIPE_SECRET_KEY` - Stripe API secret key (starts with `sk_`)
- `NODE_ENV` - Set to `production` in production environments

### Security Considerations
- Never commit `.env` files to version control
- Rotate secrets regularly
- Use different keys for development and production
- Implement proper secret management in CI/CD pipelines

## Compliance

This security configuration helps meet requirements for:
- PCI DSS (for payment processing)
- OWASP Top 10 security standards
- General data protection best practices

---

Last Updated: 2025-10-23
