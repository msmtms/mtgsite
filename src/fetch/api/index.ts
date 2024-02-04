import { CardCondition, CardWithIdentifier } from '@/types/cards';

export const fetchCards = async (cardName: string): Promise<any> => {
    return fetch(`http://localhost:3000/api/search/${cardName}`)
        .then(res => res.json())
        .catch(err => {});
}

export const addCard = async (card: CardWithIdentifier, condition: CardCondition): Promise<any> => {
  return fetch(`http://localhost:3000/api/add`, {
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