import { NextApiRequest, NextApiResponse } from 'next';
import { searchDBForCardsByName } from '@/fetch/db/cards';

export default async function searchCardByName(req: NextApiRequest, res: NextApiResponse) {
  return searchDBForCardsByName(req.query?.cardName as string).then((cards) => {
    res.status(200).json(cards);
  });
}
