import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { input } = req.body;
  console.log('Received input:', input);
  res.status(200).json({ message: 'Input received successfully.' });
}