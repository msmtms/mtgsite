import * as APITypes from '../API';
import { GeneratedQuery } from '@aws-amplify/api-graphql';

export const searchCardsWithIdentifier = /* GraphQL */ `query SearchCards(
  $filter: SearchableCardFilterInput
  $sort: [SearchableCardSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCardAggregationInput]
) {
  searchCards(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      uuid
      artist
      asciiName
      availability
      borderColor
      colorIdentity
      colorIndicator
      colors
      convertedManaCost
      count
      duelDeck
      edhrecRank
      faceConvertedManaCost
      faceName
      flavorName
      flavorText
      frameEffects
      frameVersion
      hand
      hasContentWarning
      hasFoil
      hasAlternativeDeckLimit
      hasNonFoil
      isAlternative
      isFoil
      isFullArt
      isOnlineOnly
      isOversized
      isPromo
      isReprint
      isReserved
      isStarter
      isStorySpotlight
      isTextless
      isTimeshifted
      keywords
      layout
      life
      loyalty
      manaCost
      name
      number
      originalText
      originalType
      otherFaceIds
      power
      printings
      promoTypes
      rarity
      setCode
      side
      subTypes
      superTypes
      text
      toughness
      type
      types
      variations
      watermark
      createdAt
      updatedAt
      identifier {
        scryfallId
      }
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchCardsQueryVariables,
  APITypes.SearchCardsQuery
>;
