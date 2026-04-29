// Vercel Serverless Function - POST /api/subscribe
// Handles newsletter signups
//
// To persist emails, connect a database later (Vercel KV, Postgres, Supabase, etc.)
// For now, this validates and logs the signup.

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.'
      });
    }

    // TODO: Save to database (Vercel KV / Postgres / Supabase)
    // Example with Vercel KV:
    // import { kv } from '@vercel/kv';
    // await kv.sadd('subscribers', email);

    console.log(`New subscriber: ${email}`);

    return res.status(200).json({
      success: true,
      message: 'Welcome to the Trini family! 🎉 Check your inbox.'
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
}
