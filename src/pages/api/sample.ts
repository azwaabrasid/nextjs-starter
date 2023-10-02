import { createRouter } from 'next-connect';

import type { NextApiRequest, NextApiResponse } from 'next';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get((_req, res) => {
  try {
    res.status(200).json({ message: 'Hello World!' });
  } catch (err) {
    res.status(500).end();
  }
});

export default router.handler();
