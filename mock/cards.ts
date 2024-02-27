import { CurrentCardData } from '@/types/cards';
import { Set, Ruling, Card, RelatedCard, ImageUris } from 'scryfall-sdk';

export const mockManaCost = '{1}{W}{U}{B}{R}{G}';

export const mockCardsWithIdentifier: any[] = [
  {
    id: 1,
    name: 'card name 1',
    manacost: '1',
    rarity: 'common',
    power: '1',
    toughness: '1',
    type: 'type 1',
    setcode: 'setcode 1',
    number: '1'
  },
  {
    id: 2,
    name: 'card name 2',
    manacost: '2',
    rarity: 'uncommon',
    power: '2',
    toughness: '2',
    type: 'type 2',
    setcode: 'setcode 2',
    number: '2'
  },
  {
    id: 3,
    name: 'card name 3',
    manacost: '3',
    rarity: 'rare',
    power: '3',
    toughness: '3',
    type: 'type 3',
    setcode: 'setcode 3',
    number: '3'
  }
] as any[];

export const mockCurrentCardDataList: CurrentCardData[] = [
  {
    gqlCard: mockCardsWithIdentifier[0],
    scryfallCard: {
      id: '1',
      name: 'card name 1',
      mana_cost: '1',
      type_line: 'type 1',
      set: 'setcode 1',
      collector_number: '1',
      rarity: 'common',
      power: '1',
      toughness: '1',
      object: 'card',
      lang: '',
      oracle_id: '',
      layout: 'normal',
      prints_search_uri: '',
      rulings_uri: '',
      scryfall_uri: '',
      uri: '',
      card_faces: [],
      cmc: 0,
      color_identity: [],
      keywords: [],
      legalities: {
        standard: 'legal',
        future: 'legal',
        historic: 'legal',
        gladiator: 'legal',
        pioneer: 'legal',
        explorer: 'legal',
        modern: 'legal',
        legacy: 'legal',
        pauper: 'legal',
        vintage: 'legal',
        penny: 'legal',
        commander: 'legal',
        oathbreaker: 'legal',
        brawl: 'legal',
        historicbrawl: 'legal',
        alchemy: 'legal',
        paupercommander: 'legal',
        duel: 'legal',
        premodern: 'legal',
        oldschool: 'legal'
      },
      reserved: false,
      booster: false,
      border_color: 'black',
      card_back_id: '',
      digital: false,
      finishes: [],
      frame: '1993',
      full_art: false,
      games: [],
      highres_image: false,
      image_status: 'missing',
      image_uris: {
        png: 'https://cards.scryfall.io/large/front/9/2/928036c9-11b8-493e-b9f2-8fbd3487cd19.jpg?1681130108',
        small: '',
        art_crop: '',
        border_crop: '',
        large: '',
        normal: '',
      },
      oversized: false,
      prices: {
        usd: '1.09',
        usd_foil: '2.09',
        eur: '',
        tix: ''
      },
      promo: false,
      related_uris: {
        gatherer: '',
        tcgplayer_decks: '',
        edhrec: '',
        mtgtop8: ''
      },
      released_at: '',
      reprint: false,
      scryfall_set_uri: '',
      set_name: '',
      set_search_uri: '',
      set_type: 'vanguard',
      set_uri: '',
      set_id: '',
      story_spotlight: false,
      textless: false,
      variation: false,
      getSet: function (): Promise<Set> {
        throw new Error('Function not implemented.');
      },
      getRulings: function (): Promise<Ruling[]> {
        throw new Error('Function not implemented.');
      },
      getPrints: function (): Promise<Card[]> {
        throw new Error('Function not implemented.');
      },
      getTokens: function (): RelatedCard[] {
        throw new Error('Function not implemented.');
      },
      isLegal: function (format: 'standard' | 'future' | 'historic' | 'gladiator' | 'pioneer' | 'explorer' | 'modern' | 'legacy' | 'pauper' | 'vintage' | 'penny' | 'commander' | 'oathbreaker' | 'brawl' | 'historicbrawl' | 'alchemy' | 'paupercommander' | 'duel' | 'premodern' | 'oldschool'): boolean {
        throw new Error('Function not implemented.');
      },
      isIllegal: function (format: 'standard' | 'future' | 'historic' | 'gladiator' | 'pioneer' | 'explorer' | 'modern' | 'legacy' | 'pauper' | 'vintage' | 'penny' | 'commander' | 'oathbreaker' | 'brawl' | 'historicbrawl' | 'alchemy' | 'paupercommander' | 'duel' | 'premodern' | 'oldschool'): boolean {
        throw new Error('Function not implemented.');
      },
      getText: function (): string | null | undefined {
        throw new Error('Function not implemented.');
      },
      getCost: function (): string | null | undefined {
        throw new Error('Function not implemented.');
      },
      getImageURI: function (version: keyof ImageUris): string | undefined {
        return 'https://cards.scryfall.io/large/front/9/2/928036c9-11b8-493e-b9f2-8fbd3487cd19.jpg?1681130108';
      },
      getFrontImageURI: function (version: keyof ImageUris): string | undefined {
        throw new Error('Function not implemented.');
      },
      getBackImageURI: function (version: keyof ImageUris): string {
        throw new Error('Function not implemented.');
      }
    }
  },
  {
    gqlCard: mockCardsWithIdentifier[1],
    scryfallCard: {
      id: '2',
      name: 'card name 2',
      mana_cost: '2',
      type_line: 'type 2',
      set: 'setcode 2',
      collector_number: '2',
      rarity: 'uncommon',
      power: '2',
      toughness: '2',
      object: 'card',
      lang: '',
      oracle_id: '',
      layout: 'normal',
      prints_search_uri: '',
      rulings_uri: '',
      scryfall_uri: '',
      uri: '',
      card_faces: [],
      cmc: 0,
      color_identity: [],
      keywords: [],
      legalities: {
        standard: 'legal',
        future: 'legal',
        historic: 'legal',
        gladiator: 'legal',
        pioneer: 'legal',
        explorer: 'legal',
        modern: 'legal',
        legacy: 'legal',
        pauper: 'legal',
        vintage: 'legal',
        penny: 'legal',
        commander: 'legal',
        oathbreaker: 'legal',
        brawl: 'legal',
        historicbrawl: 'legal',
        alchemy: 'legal',
        paupercommander: 'legal',
        duel: 'legal',
        premodern: 'legal',
        oldschool: 'legal'
      },
      reserved: false,
      booster: false,
      border_color: 'black',
      card_back_id: '',
      digital: false,
      finishes: [],
      frame: '1993',
      full_art: false,
      games: [],
      highres_image: false,
      image_status: 'missing',
      oversized: false,
      prices: {
        usd: '$1',
        usd_foil: '',
        eur: '',
        tix: ''
      },
      promo: false,
      related_uris: {
        gatherer: '',
        tcgplayer_decks: '',
        edhrec: '',
        mtgtop8: ''
      },
      released_at: '',
      reprint: false,
      scryfall_set_uri: '',
      set_name: '',
      set_search_uri: '',
      set_type: 'vanguard',
      set_uri: '',
      set_id: '',
      story_spotlight: false,
      textless: false,
      variation: false,
      getSet: function (): Promise<Set> {
        throw new Error('Function not implemented.');
      },
      getRulings: function (): Promise<Ruling[]> {
        throw new Error('Function not implemented.');
      },
      getPrints: function (): Promise<Card[]> {
        throw new Error('Function not implemented.');
      },
      getTokens: function (): RelatedCard[] {
        throw new Error('Function not implemented.');
      },
      isLegal: function (format: 'standard' | 'future' | 'historic' | 'gladiator' | 'pioneer' | 'explorer' | 'modern' | 'legacy' | 'pauper' | 'vintage' | 'penny' | 'commander' | 'oathbreaker' | 'brawl' | 'historicbrawl' | 'alchemy' | 'paupercommander' | 'duel' | 'premodern' | 'oldschool'): boolean {
        throw new Error('Function not implemented.');
      },
      isIllegal: function (format: 'standard' | 'future' | 'historic' | 'gladiator' | 'pioneer' | 'explorer' | 'modern' | 'legacy' | 'pauper' | 'vintage' | 'penny' | 'commander' | 'oathbreaker' | 'brawl' | 'historicbrawl' | 'alchemy' | 'paupercommander' | 'duel' | 'premodern' | 'oldschool'): boolean {
        throw new Error('Function not implemented.');
      },
      getText: function (): string | null | undefined {
        throw new Error('Function not implemented.');
      },
      getCost: function (): string | null | undefined {
        throw new Error('Function not implemented.');
      },
      getImageURI: function (version: keyof ImageUris): string | undefined {
        throw new Error('Function not implemented.');
      },
      getFrontImageURI: function (version: keyof ImageUris): string | undefined {
        throw new Error('Function not implemented.');
      },
      getBackImageURI: function (version: keyof ImageUris): string {
        throw new Error('Function not implemented.');
      }
    },
  },
  {
    gqlCard: mockCardsWithIdentifier[2],
    scryfallCard: {
      id: '3',
      name: 'card name 3',
      mana_cost: '3',
      type_line: 'type 3',
      set: 'setcode 3',
      collector_number: '3',
      rarity: 'rare',
      power: '3',
      toughness: '3',
      object: 'card',
      lang: '',
      oracle_id: '',
      layout: 'normal',
      prints_search_uri: '',
      rulings_uri: '',
      scryfall_uri: '',
      uri: '',
      card_faces: [],
      cmc: 0,
      color_identity: [],
      keywords: [],
      legalities: {
        standard: 'legal',
        future: 'legal',
        historic: 'legal',
        gladiator: 'legal',
        pioneer: 'legal',
        explorer: 'legal',
        modern: 'legal',
        legacy: 'legal',
        pauper: 'legal',
        vintage: 'legal',
        penny: 'legal',
        commander: 'legal',
        oathbreaker: 'legal',
        brawl: 'legal',
        historicbrawl: 'legal',
        alchemy: 'legal',
        paupercommander: 'legal',
        duel: 'legal',
        premodern: 'legal',
        oldschool: 'legal'
      },
      reserved: false,
      booster: false,
      border_color: 'black',
      card_back_id: '',
      digital: false,
      finishes: [],
      frame: '1993',
      full_art: false,
      games: [],
      highres_image: false,
      image_status: 'missing',
      oversized: false,
      prices: {
        usd: '$1',
        usd_foil: '',
        eur: '',
        tix: ''
      },
      promo: false,
      related_uris: {
        gatherer: '',
        tcgplayer_decks: '',
        edhrec: '',
        mtgtop8: ''
      },
      released_at: '',
      reprint: false,
      scryfall_set_uri: '',
      set_name: '',
      set_search_uri: '',
      set_type: 'vanguard',
      set_uri: '',
      set_id: '',
      story_spotlight: false,
      textless: false,
      variation: false,
      getSet: function (): Promise<Set> {
        throw new Error('Function not implemented.');
      },
      getRulings: function (): Promise<Ruling[]> {
        throw new Error('Function not implemented.');
      },
      getPrints: function (): Promise<Card[]> {
        throw new Error('Function not implemented.');
      },
      getTokens: function (): RelatedCard[] {
        throw new Error('Function not implemented.');
      },
      isLegal: function (format: 'standard' | 'future' | 'historic' | 'gladiator' | 'pioneer' | 'explorer' | 'modern' | 'legacy' | 'pauper' | 'vintage' | 'penny' | 'commander' | 'oathbreaker' | 'brawl' | 'historicbrawl' | 'alchemy' | 'paupercommander' | 'duel' | 'premodern' | 'oldschool'): boolean {
        throw new Error('Function not implemented.');
      },
      isIllegal: function (format: 'standard' | 'future' | 'historic' | 'gladiator' | 'pioneer' | 'explorer' | 'modern' | 'legacy' | 'pauper' | 'vintage' | 'penny' | 'commander' | 'oathbreaker' | 'brawl' | 'historicbrawl' | 'alchemy' | 'paupercommander' | 'duel' | 'premodern' | 'oldschool'): boolean {
        throw new Error('Function not implemented.');
      },
      getText: function (): string | null | undefined {
        throw new Error('Function not implemented.');
      },
      getCost: function (): string | null | undefined {
        throw new Error('Function not implemented.');
      },
      getImageURI: function (version: keyof ImageUris): string | undefined {
        throw new Error('Function not implemented.');
      },
      getFrontImageURI: function (version: keyof ImageUris): string | undefined {
        throw new Error('Function not implemented.');
      },
      getBackImageURI: function (version: keyof ImageUris): string {
        throw new Error('Function not implemented.');
      }
    },
  },
];
