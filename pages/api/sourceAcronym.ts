import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sourceAcronym = [...Array(3)].map(() => (Math.random() * 26 + 65 | 0).toString(36)).join('').toUpperCase();
  res.status(200).json({ sourceAcronym });
}