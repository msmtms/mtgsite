import * as Scry from "scryfall-sdk";

export const getCardByName = async (cardName: string): Promise<Scry.Card> => Scry.Cards.byName(cardName);

export const getCardIdentifier = async (uuid: string): Promise<Scry.Card> => Scry.Cards.byName(uuid);

export const getCardByScryfallId = async (mtgoId: string): Promise<Scry.Card> => Scry.Cards.byId(mtgoId);
