import { CardCondition, CardWithIdentifier } from '@/types/cards';
import { client } from '@/utils/config';
import { searchCardsWithIdentifier } from '@/graphql/customMutations';

export const searchDBForCardsByName = async (cardName: string) => {
  const cleanedQuery = cardName.replaceAll(' ', '\s');
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
  }).then((result) => {
    return result.data.searchCards?.items;
  });
};

export const addCard = async (card: CardWithIdentifier, condition: CardCondition): Promise<any> => {
  // return prisma.cards_owned.create({
  //   data: {
  //     condition: condition as unknown as card_condition,
  //     card_id: card.id,
  //   }
  // });
}

export const fetchInventory = async (): Promise<any> => {
  // return prisma.cards_owned.findMany({
  //   orderBy: {
  //     added_on: 'desc'
  //   },
  //   include: {
  //     cards: {
  //       include: {
  //         cardidentifiers: true,
  //       }
  //     }
  //   },
  // });
}
