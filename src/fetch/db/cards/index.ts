import { CardCondition } from '@/types/cards';
import { client } from '@/utils/config';
import { searchCardsWithIdentifier } from '@/graphql/customMutations';

export const searchDBForCardsByName = async (cardName: string) => {
  return client.graphql({
    query: searchCardsWithIdentifier,
    variables: {
      filter: {
        name: {
          matchPhrasePrefix: cardName
        }
      },
      limit: 10
    }
  }).then((result: any) => {
    return result.data.searchCards?.items;
  });
};

export const addCard = async (card: any, condition: CardCondition): Promise<any> => {
  // TODO
}

export const fetchInventory = async (): Promise<any> => {
  // TODO
}
