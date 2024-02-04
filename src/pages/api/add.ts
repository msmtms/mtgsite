import { NextApiRequest, NextApiResponse } from 'next';
import { addCard as dbAddCard } from '../../fetch/db/cards';

export default async function addCard(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  const { card, condition } = req.body;
  return dbAddCard(card, condition)
    .then((card: any) => {
      res.status(200).json(card);
      return card;
    })
    .catch((err: any) => {
      console.log(err);
      res.status(500).json(err);
    });
}
