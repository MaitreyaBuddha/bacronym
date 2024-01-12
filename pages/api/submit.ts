import type { NextApiRequest, NextApiResponse } from 'next';

let ratings: { [key: string]: { userId: string, rating: 'up' | 'down' }[] } = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { submission, rating } = req.body;
  const userId = req.headers['x-user-id'] as string;

  if (!ratings[submission]) {
    ratings[submission] = [];
  }

  ratings[submission].push({ userId, rating });

  res.status(200).json({ message: 'Rating received successfully.' });
}