# Quick Start: Contact Form Integration

This guide provides the fastest path to getting the contact form working with Resend.

## 1. Get Resend API Key (2 minutes)

1. Visit https://resend.com
2. Sign up for a free account
3. Navigate to API Keys
4. Create a new API key
5. Copy the API key (starts with `re_`)

## 2. Choose Your Backend Option

### Option A: Vercel Serverless Function (Recommended for quick setup)

1. Install Resend:
```bash
npm install resend
```

2. Create `api/contact.ts`:
```typescript
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, interest, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'R2M Protocol <noreply@your-domain.com>',
      to: ['your-email@example.com'],
      subject: `New Contact: ${interest}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Failed to send' });
  }
}
```

3. Add environment variable in Vercel dashboard:
   - Key: `RESEND_API_KEY`
   - Value: Your API key from step 1

4. Deploy to Vercel:
```bash
npm install -g vercel
vercel deploy
```

### Option B: Netlify Function (Alternative)

1. Create `netlify/functions/contact.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event: any) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, phone, interest, message } = JSON.parse(event.body);

  try {
    await resend.emails.send({
      from: 'R2M Protocol <noreply@your-domain.com>',
      to: ['your-email@example.com'],
      subject: `New Contact: ${interest}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ success: false }) };
  }
}
```

2. Add environment variable in Netlify:
   - Key: `RESEND_API_KEY`
   - Value: Your API key

3. Deploy:
```bash
netlify deploy --prod
```

## 3. Update Frontend (if needed)

The contact form is already set to POST to `/api/contact`. If you need to change this:

Edit `src/components/ContactForm.tsx`, line 42:
```typescript
const response = await fetch('https://your-api-url.com/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## 4. Test It Out

1. Build and deploy your frontend:
```bash
npm run build
```

2. Fill out the contact form
3. Check your email inbox
4. Done! 🎉

## Troubleshooting

### Email not received?
- Check spam folder
- Verify API key is correct
- Check server logs for errors
- Ensure "from" email domain is verified in Resend

### CORS errors?
Add CORS headers to your backend:
```typescript
res.setHeader('Access-Control-Allow-Origin', 'https://your-domain.com');
res.setHeader('Access-Control-Allow-Methods', 'POST');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
```

### Need help?
- Resend Docs: https://resend.com/docs
- Full integration guide: See RESEND_INTEGRATION.md
- GitHub Issues: Open an issue in this repo

## Security Checklist

- [ ] API key stored in environment variables (not in code)
- [ ] Backend validates all form inputs
- [ ] Rate limiting enabled on API endpoint
- [ ] CORS configured for your domain only
- [ ] HTTPS enabled on all endpoints

That's it! Your contact form is now live and collecting leads. 🚀
