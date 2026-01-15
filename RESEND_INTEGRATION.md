# Resend Integration Guide

## Overview
This document describes how to integrate the contact form with Resend email service.

## Prerequisites
1. Sign up for a Resend account at https://resend.com
2. Get your API key from the Resend dashboard
3. Set up a backend API endpoint to handle form submissions

## Environment Variables

Create a `.env` file (DO NOT commit this to version control):

```
RESEND_API_KEY=your_api_key_here
```

## Backend Implementation

### Option 1: Using Next.js API Routes

Create `pages/api/contact.ts`:

```typescript
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, interest, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'R2M Protocol <onboarding@resend.dev>', // Replace with your verified domain
      to: ['your-email@example.com'], // Replace with your email
      subject: `New Contact Form Submission: ${interest}`,
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
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
```

### Option 2: Using Express.js

Create an Express API endpoint:

```typescript
import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, interest, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'R2M Protocol <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: `New Contact Form Submission: ${interest}`,
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

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.listen(3000, () => {
  console.log('API server running on port 3000');
});
```

## Frontend Configuration

The ContactForm component is already set up to make POST requests to `/api/contact`. 

To customize the endpoint:

1. Update the fetch URL in `src/components/ContactForm.tsx`
2. If using a different backend URL, update the endpoint accordingly

Example for external API:
```typescript
const response = await fetch('https://your-api-domain.com/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## Installation

Install Resend SDK in your backend:

```bash
npm install resend
```

## Testing

1. Start your backend server
2. Fill out the contact form
3. Check that the email is received

## Security Considerations

- Never expose your Resend API key in the frontend code
- Always validate and sanitize form inputs on the backend
- Implement rate limiting to prevent abuse
- Consider adding CAPTCHA for additional security

## Resources

- Resend Documentation: https://resend.com/docs
- Resend Node.js SDK: https://github.com/resend/resend-node
