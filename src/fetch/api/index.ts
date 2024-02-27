import { Card as GQLCardType, CardCondition } from '@/types/cards';

export const searchCardsByName = async (cardName: string): Promise<any> => {
    return fetch(`/api/search/${cardName}`)
        .then(res => res.json())
        .catch(err => {});
}

export const addCard = async (card: GQLCardType, condition: CardCondition): Promise<any> => {
  return fetch(`/api/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      card,
      condition
    })
  })
  .then(res => res.json())
  .catch(err => {
      console.log(err);});
}
