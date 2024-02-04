import { NextApiRequest, NextApiResponse } from 'next';
import { fetchCards } from '../../../fetch/db/cards';
import { CardWithIdentifier } from '@/types/cards';

export default async function searchCardByName(req: NextApiRequest, res: NextApiResponse): Promise<CardWithIdentifier[]> {
  return fetchCards(req.query?.cardName as string).then((cards) => {
    res.status(200).json(cards);
    return cards;
  });
}
