import { cardidentifiers, cards, cards_owned } from '@prisma/client';
import { Card } from 'scryfall-sdk';

export type CardWithIdentifier = cards & {
  cardidentifiers: cardidentifiers
}

export enum CardCondition {
  DAMAGED = 'DAMAGED',
  HEAVILY_PLAYED = 'HEAVILY_PLAYED',
  MODERATELY_PLAYED = 'MODERATELY_PLAYED',
  LIGHTLY_PLAYED = 'LIGHTLY_PLAYED',
  NEAR_MINT = 'NEAR_MINT'
}

export type CurrentCardData = {
  card: CardWithIdentifier;
  scryfallCard: Partial<Card>;
};

export type InventoryCard = cards_owned & {
  cards: CardWithIdentifier;
};

export type ManaSymbolType = {
  type: 'colorless' | 'standard';
  value: string;
};
