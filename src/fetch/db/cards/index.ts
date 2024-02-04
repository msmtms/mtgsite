import { CardCondition, CardWithIdentifier, CurrentCardData, InventoryCard } from '@/types/cards';
import { card_condition, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const fetchCards = async (cardName: string): Promise<CardWithIdentifier[]> => {
  return prisma.cards.findMany({ take: 10,
    where: {
      name: {
        contains: cardName,
        mode: 'insensitive'
      }
    },
    include: {
      cardidentifiers: true,
    }
  });
};

export const addCard = async (card: CardWithIdentifier, condition: CardCondition): Promise<any> => {
  return prisma.cards_owned.create({
    data: {
      condition: condition as unknown as card_condition,
      card_id: card.id,
    }
  });
}

export const fetchInventory = async (): Promise<any> => {
  return prisma.cards_owned.findMany({
    orderBy: {
      added_on: 'desc'
    },
    include: {
      cards: {
        include: {
          cardidentifiers: true,
        }
      }
    },
  });
}
