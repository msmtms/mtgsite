import { ManaSymbolType } from '@/types/cards';

export const MANA_COST_REGEX: RegExp = /(?<=\{)([0-9WUBRG/XYZ])(?=})/g;
export const COLORLESS_MANA_REGEX: RegExp = /([0-9])/g;

export const MANA_SYMBOL_URL: { [key: string]: string } = {
  W: '/images/white-mana-symbol.svg',
  U: '/images/blue-mana-symbol.svg',
  B: '/images/black-mana-symbol.svg',
  R: '/images/red-mana-symbol.svg',
  G: '/images/green-mana-symbol.svg',
};

export const DEFAULT_CARD = {
  artist: null,
  asciiName: null,
  availability: null,
  borderColor: null,
  colorIdentity: null,
  colorIndicator: null,
  colors: null,
  convertedManaCost: null,
  count: null,
  duelDeck: null,
  edhrecRank: null,
  faceConvertedManaCost: null,
  faceName: null,
  flavorName: null,
  flavorText: null,
  frameEffects: null,
  frameVersion: null,
  hand: null,
  hasContentWarning: null,
  hasFoil: null,
  hasAlternativeDeckLimit: null,
  hasNonFoil: null,
  isAlternative: null,
  isFoil: null,
  isFullArt: null,
  isOnlineOnly: null,
  isOversized: null,
  isPromo: null,
  isReprint: null,
  isReserved: null,
  isStarter: null,
  isStorySpotlight: null,
  isTextless: null,
  isTimeshifted: null,
  keywords: null,
  layout: null,
  life: null,
  loyalty: null,
  manaCost: null,
  number: null,
  originalText: null,
  originalType: null,
  otherFaceIds: null,
  power: null,
  printings: null,
  promoTypes: null,
  rarity: null,
  side: null,
  subTypes: null,
  superTypes: null,
  text: null,
  toughness: null,
  type: null,
  types: null,
  variation: null,
  watermark: null
}

export const getManaCost = (manaCost: string): ManaSymbolType[] | undefined => {
  const matches = manaCost.match(MANA_COST_REGEX);
  if (!matches) return;
  return matches.map((match) => {
    let symbol: ManaSymbolType;
    if (match.match(COLORLESS_MANA_REGEX)) {
      symbol = {
        type: 'colorless',
        value: match
      };
    } else {
      symbol = {
        type: 'standard',
        value: MANA_SYMBOL_URL[match]
      };
    }
    return symbol;
  });
}
