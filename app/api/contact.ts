// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  const { name, email, message } = req.body;
  console.log('Contact submission:', { name, email, message });
  // TODO: integrate with your email service or database here
  return res.status(200).json({ message: 'Message received' });
}
