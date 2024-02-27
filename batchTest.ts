import * as data from './AllPrintings.json';
import { Amplify } from 'aws-amplify';
import { batchCreateIdentifiers } from './src/graphql/mutations';
import { generateClient } from 'aws-amplify/api';

if (!Amplify.getConfig().API) {
  Amplify.configure({
    API: {
      GraphQL: {
        endpoint: process.env.GRAPHQL_ENDPOINT as string,
        region: 'us-west-2',
        defaultAuthMode: 'apiKey',
        apiKey: process.env.API_KEY
      }
    }
  });
}

const client = generateClient();

// Object.keys((data as unknown as any).data).forEach(async (set: any) => {
//   const cards = (data as unknown as any).data[set].cards
//   for (let i = 0; i < cards.length; i += 10) {
//     const chunk = cards.slice(i, i + 10);
//     const updatedChunk = chunk.map((card: any): any => {
//       const updatedCard: any = {};
//       Object.keys(DEFAULT_IDENTIFIER).forEach((key: string) => {
//         updatedCard[key] = card?.identifiers[key];
//       });
//       updatedCard.uuid = card.uuid;
//       updatedCard.mtgJsonV4Id = card.identifiers.mtgJsonV4Id || '';
//       updatedCard.scryfallId = card.identifiers.scryfallId || '';
//       return updatedCard;
//     });
//     try {
//       const res = await client.graphql({
//         query: batchCreateIdentifiers,
//         variables: {
//           identifiers: updatedChunk
//         }
//       });
//       if (res.errors) {
//         console.log('Error creating cards for set', set, 'num:', i, 'error:', res.errors);
//       } else {
//         console.log('Successfully created cards for set', set, 'num:', i);
//       }
//     } catch (err) {
//       console.log('Error creating cards for set', set, 'num:', i, 'error:', err);
//     }
//   }
// });

// let count = 0;
// Object.keys((data as unknown as any).data).forEach(async (set: any) => {
//   count += (data as unknown as any).data[set].cards.length;
// })
// console.log(count);
// const cards = data.data['2X2'].cards.slice(50).map((card) => {
//   return updatedCard;
// });
// const setWithoutCards = data.data['2X2'];
// setWithoutCards.cards = [];
// fs.writeFileSync('set1.json', JSON.stringify(setWithoutCards, null, 2));
// Object.keys(data.data).forEach((key) => {
//   console.log(key);
// });
// console.log((data as unknown as any).data['P06'].cards[1]);

// const DEFAULT_CARD = {
//   uuid: null,
//   artist: null,
//   asciiName: null,
//   availability: null,
//   borderColor: null,
//   colorIdentity: null,
//   colorIndicator: null,
//   colors: null,
//   convertedManaCost: null,
//   count: null,
//   duelDeck: null,
//   edhrecRank: null,
//   faceConvertedManaCost: null,
//   faceName: null,
//   flavorName: null,
//   flavorText: null,
//   frameEffects: null,
//   frameVersion: null,
//   hand: null,
//   hasContentWarning: null,
//   hasFoil: null,
//   hasAlternativeDeckLimit: null,
//   hasNonFoil: null,
//   isAlternative: null,
//   isFoil: null,
//   isFullArt: null,
//   isOnlineOnly: null,
//   isOversized: null,
//   isPromo: null,
//   isReprint: null,
//   isReserved: null,
//   isStarter: null,
//   isStorySpotlight: null,
//   isTextless: null,
//   isTimeshifted: null,
//   keywords: null,
//   layout: null,
//   life: null,
//   loyalty: null,
//   manaCost: null,
//   name: null,
//   number: null,
//   originalText: null,
//   originalType: null,
//   otherFaceIds: null,
//   power: null,
//   printings: null,
//   promoTypes: null,
//   rarity: null,
//   setCode: null,
//   side: null,
//   subTypes: null,
//   superTypes: null,
//   text: null,
//   toughness: null,
//   type: null,
//   types: null,
//   variations: null,
//   watermark: null
// }

// CARDS IMPL
// Object.keys((data as unknown as any).data).forEach(async (set: any) => {
//   const cards = (data as unknown as any).data[set].cards
//   for (let i = 0; i < cards.length; i += 10) {
//     const chunk = cards.slice(i, i + 10);
//     const updatedChunk = chunk.map((card: any): any => {
//       const updatedCard: any = {};
//       Object.keys(DEFAULT_CARD).forEach((key: string) => {
//         updatedCard[key] = card[key];
//       });
//       return updatedCard;
//     });
//     try {
//       const res = await client.graphql({
//         query: batchCreateCards,
//         variables: {
//           cards: updatedChunk
//         }
//       });
//       if (res.errors) {
//         console.log('Error creating cards for set', set, 'num:', i, 'error:', res.errors);
//       } else {
//         console.log('Successfully created cards for set', set, 'num:', i);
//       }
//     } catch (err) {
//       console.log('Error creating cards for set', set, 'num:', i, 'error:', err);
//     }
//   }
// });

// const DEFAULT_IDENTIFIER = {
//   cardKingdomFoilId: null,
//   cardKingdomId: null,
//   mcmId: null,
//   mcmMetaId: null,
//   mtgArenaId: null,
//   mtgoFoilId: null,
//   mtgoId: null,
//   mtgJsonV4Id: 'n/a',
//   multiverseId: null,
//   scryfallId: 'n/a',
//   scryfallOracleId: null,
//   scryfallIllustrationId: null,
//   tcgplayerProductId: null,
// }
//
// Object.keys((data as unknown as any).data).forEach(async (set: any) => {
//   const cards = (data as unknown as any).data[set].cards
//   for (let i = 0; i < cards.length; i += 10) {
//     const chunk = cards.slice(i, i + 10);
//     const updatedChunk = chunk.map((card: any): any => {
//       const updatedCard: any = {};
//       Object.keys(DEFAULT_IDENTIFIER).forEach((key: string) => {
//         updatedCard[key] = card?.identifiers[key];
//       });
//       updatedCard.uuid = card.uuid;
//       updatedCard.mtgJsonV4Id = card.identifiers.mtgJsonV4Id || '';
//       updatedCard.scryfallId = card.identifiers.scryfallId || '';
//       return updatedCard;
//     });
//     try {
//       const res = await client.graphql({
//         query: batchCreateIdentifiers,
//         variables: {
//           identifiers: updatedChunk
//         }
//       });
//       if (res.errors) {
//         console.log('Error creating cards for set', set, 'num:', i, 'error:', res.errors);
//       } else {
//         console.log('Successfully created cards for set', set, 'num:', i);
//       }
//     } catch (err) {
//       console.log('Error creating cards for set', set, 'num:', i, 'error:', err);
//     }
//   }
// });
