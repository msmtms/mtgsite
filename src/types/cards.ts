import { Card as ScryfallCard } from 'scryfall-sdk';
import { Card as GQLCardType } from '@/query';

export enum CardCondition {
  DAMAGED = 'DAMAGED',
  HEAVILY_PLAYED = 'HEAVILY_PLAYED',
  MODERATELY_PLAYED = 'MODERATELY_PLAYED',
  LIGHTLY_PLAYED = 'LIGHTLY_PLAYED',
  NEAR_MINT = 'NEAR_MINT'
}

export type CurrentCardData = {
  gqlCard: GQLCardType;
  scryfallCard: Partial<ScryfallCard>;
};

export type InventoryCard = {
  cardidentifiers: any;
  cards: any;
  condition: CardCondition;
  id: string;
  added_on: string;
};

export type ManaSymbolType = {
  type: 'colorless' | 'standard';
  value: string;
};

export * from '@/query';
