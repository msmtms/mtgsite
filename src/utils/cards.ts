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
