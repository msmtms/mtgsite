import { NextApiRequest, NextApiResponse } from 'next';
import { createCardsOwned } from '@/graphql/mutations';
import { client } from '@/utils/config';

export default async function addCard(req: NextApiRequest, res: NextApiResponse): Promise<any> {
  const { card, condition } = req.body;
  client.graphql({
    query: createCardsOwned,
    variables: {
      input: card,
      condition
    }
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(JSON.stringify(err.errors[0]['locations']));
    console.log(JSON.stringify(err.errors[0]['path']));
    console.log(err);
  });
}
