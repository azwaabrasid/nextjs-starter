import nextConnect from 'next-connect';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = nextConnect().get(
  async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
      res.status(200).json({ message: 'Hello World!' });
    } catch (err) {
      res.status(500).end();
    }
  }
);

export default handler;
