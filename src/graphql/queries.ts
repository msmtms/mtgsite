/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const searchCards = /* GraphQL */ `query SearchCards(
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
export const getLeadershipSkills = /* GraphQL */ `query GetLeadershipSkills($uuid: ID!) {
  getLeadershipSkills(uuid: $uuid) {
    uuid
    brawl
    commander
    oathbreaker
    card {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLeadershipSkillsQueryVariables,
  APITypes.GetLeadershipSkillsQuery
>;
export const listLeadershipSkills = /* GraphQL */ `query ListLeadershipSkills(
  $uuid: ID
  $filter: ModelLeadershipSkillsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLeadershipSkills(
    uuid: $uuid
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      uuid
      brawl
      commander
      oathbreaker
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLeadershipSkillsQueryVariables,
  APITypes.ListLeadershipSkillsQuery
>;
export const getLegalities = /* GraphQL */ `query GetLegalities($id: ID!) {
  getLegalities(id: $id) {
    id
    alchemy
    brawl
    commander
    duel
    explorer
    future
    gladiator
    historic
    historicbrawl
    legacy
    modern
    oathbreaker
    oldschool
    pauper
    paupercommander
    penny
    pioneer
    predh
    premodern
    standard
    vintage
    cardUuid
    card {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLegalitiesQueryVariables,
  APITypes.GetLegalitiesQuery
>;
export const listLegalities = /* GraphQL */ `query ListLegalities(
  $id: ID
  $filter: ModelLegalitiesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLegalities(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      alchemy
      brawl
      commander
      duel
      explorer
      future
      gladiator
      historic
      historicbrawl
      legacy
      modern
      oathbreaker
      oldschool
      pauper
      paupercommander
      penny
      pioneer
      predh
      premodern
      standard
      vintage
      cardUuid
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLegalitiesQueryVariables,
  APITypes.ListLegalitiesQuery
>;
export const getPurchaseUrls = /* GraphQL */ `query GetPurchaseUrls($id: ID!) {
  getPurchaseUrls(id: $id) {
    cardKingdom
    cardKingdomFoil
    cardmarket
    tcgplayer
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPurchaseUrlsQueryVariables,
  APITypes.GetPurchaseUrlsQuery
>;
export const listPurchaseUrls = /* GraphQL */ `query ListPurchaseUrls(
  $filter: ModelPurchaseUrlsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPurchaseUrls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      cardKingdom
      cardKingdomFoil
      cardmarket
      tcgplayer
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPurchaseUrlsQueryVariables,
  APITypes.ListPurchaseUrlsQuery
>;
export const getSourceProducts = /* GraphQL */ `query GetSourceProducts($id: ID!) {
  getSourceProducts(id: $id) {
    foil
    nonfoil
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSourceProductsQueryVariables,
  APITypes.GetSourceProductsQuery
>;
export const listSourceProducts = /* GraphQL */ `query ListSourceProducts(
  $filter: ModelSourceProductsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSourceProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      foil
      nonfoil
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSourceProductsQueryVariables,
  APITypes.ListSourceProductsQuery
>;
export const getCard = /* GraphQL */ `query GetCard($uuid: ID!) {
  getCard(uuid: $uuid) {
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
    cardsOwned {
      nextToken
      __typename
    }
    identifier {
      uuid
      cardKingdomFoilId
      cardKingdomId
      mcmId
      mcmMetaId
      mtgArenaId
      mtgoFoilId
      mtgoId
      mtgJsonV4Id
      multiverseId
      scryfallId
      scryfallOracleId
      scryfallIllustrationId
      tcgplayerProductId
      createdAt
      updatedAt
      __typename
    }
    foreignData {
      uuid
      faceName
      flavorText
      language
      multiverseId
      name
      text
      type
      createdAt
      updatedAt
      __typename
    }
    leadershipSkills {
      uuid
      brawl
      commander
      oathbreaker
      createdAt
      updatedAt
      __typename
    }
    legalities {
      id
      alchemy
      brawl
      commander
      duel
      explorer
      future
      gladiator
      historic
      historicbrawl
      legacy
      modern
      oathbreaker
      oldschool
      pauper
      paupercommander
      penny
      pioneer
      predh
      premodern
      standard
      vintage
      cardUuid
      createdAt
      updatedAt
      __typename
    }
    purchaseUrls {
      cardKingdom
      cardKingdomFoil
      cardmarket
      tcgplayer
      id
      createdAt
      updatedAt
      __typename
    }
    rulings {
      nextToken
      __typename
    }
    set {
      id
      baseSetSize
      block
      code
      codeV3
      isForeignOnly
      isFoilOnly
      isNonFoilOnly
      isOnlineOnly
      isPaperOnly
      isPartialPreview
      keyruneCode
      mcmName
      mcmId
      mtgoCode
      name
      parentCode
      releaseDate
      tcgplayerGroupId
      totalSetSize
      type
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCardQueryVariables, APITypes.GetCardQuery>;
export const listCards = /* GraphQL */ `query ListCards(
  $uuid: ID
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCards(
    uuid: $uuid
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCardsQueryVariables, APITypes.ListCardsQuery>;
export const getForeignData = /* GraphQL */ `query GetForeignData($uuid: ID!) {
  getForeignData(uuid: $uuid) {
    uuid
    faceName
    flavorText
    language
    multiverseId
    name
    text
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetForeignDataQueryVariables,
  APITypes.GetForeignDataQuery
>;
export const listForeignData = /* GraphQL */ `query ListForeignData(
  $uuid: ID
  $filter: ModelForeignDataFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listForeignData(
    uuid: $uuid
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      uuid
      faceName
      flavorText
      language
      multiverseId
      name
      text
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListForeignDataQueryVariables,
  APITypes.ListForeignDataQuery
>;
export const getIdentifier = /* GraphQL */ `query GetIdentifier($uuid: ID!) {
  getIdentifier(uuid: $uuid) {
    uuid
    cardKingdomFoilId
    cardKingdomId
    mcmId
    mcmMetaId
    mtgArenaId
    mtgoFoilId
    mtgoId
    mtgJsonV4Id
    multiverseId
    scryfallId
    scryfallOracleId
    scryfallIllustrationId
    tcgplayerProductId
    createdAt
    updatedAt
    card {
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
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIdentifierQueryVariables,
  APITypes.GetIdentifierQuery
>;
export const listIdentifiers = /* GraphQL */ `query ListIdentifiers(
  $uuid: ID
  $filter: ModelIdentifierFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listIdentifiers(
    uuid: $uuid
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      uuid
      cardKingdomFoilId
      cardKingdomId
      mcmId
      mcmMetaId
      mtgArenaId
      mtgoFoilId
      mtgoId
      mtgJsonV4Id
      multiverseId
      scryfallId
      scryfallOracleId
      scryfallIllustrationId
      tcgplayerProductId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIdentifiersQueryVariables,
  APITypes.ListIdentifiersQuery
>;
export const getRulings = /* GraphQL */ `query GetRulings($id: ID!) {
  getRulings(id: $id) {
    id
    date
    text
    cardUuid
    card {
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
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRulingsQueryVariables,
  APITypes.GetRulingsQuery
>;
export const listRulings = /* GraphQL */ `query ListRulings(
  $id: ID
  $filter: ModelRulingsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRulings(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      date
      text
      cardUuid
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRulingsQueryVariables,
  APITypes.ListRulingsQuery
>;
export const getCardsOwned = /* GraphQL */ `query GetCardsOwned($id: ID!) {
  getCardsOwned(id: $id) {
    id
    condition
    addedOn
    soldOn
    isFoil
    initialValue
    createdAt
    updatedAt
    ownerUuid
    addedByUuid
    cardUuid
    card {
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
      __typename
    }
    owner {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    addedBy {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCardsOwnedQueryVariables,
  APITypes.GetCardsOwnedQuery
>;
export const listCardsOwneds = /* GraphQL */ `query ListCardsOwneds(
  $id: ID
  $filter: ModelCardsOwnedFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCardsOwneds(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      condition
      addedOn
      soldOn
      isFoil
      initialValue
      createdAt
      updatedAt
      ownerUuid
      addedByUuid
      cardUuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCardsOwnedsQueryVariables,
  APITypes.ListCardsOwnedsQuery
>;
export const getPerson = /* GraphQL */ `query GetPerson($id: ID!) {
  getPerson(id: $id) {
    id
    name
    cardsOwned {
      nextToken
      __typename
    }
    cardsAddedBy {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPersonQueryVariables, APITypes.GetPersonQuery>;
export const listPeople = /* GraphQL */ `query ListPeople(
  $id: ID
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPeople(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPeopleQueryVariables,
  APITypes.ListPeopleQuery
>;
export const getSet = /* GraphQL */ `query GetSet($id: ID!) {
  getSet(id: $id) {
    id
    baseSetSize
    block
    code
    codeV3
    isForeignOnly
    isFoilOnly
    isNonFoilOnly
    isOnlineOnly
    isPaperOnly
    isPartialPreview
    keyruneCode
    mcmName
    mcmId
    mtgoCode
    name
    parentCode
    releaseDate
    tcgplayerGroupId
    totalSetSize
    type
    cards {
      nextToken
      __typename
    }
    setBoosterContents {
      nextToken
      __typename
    }
    setBoosterContentWeights {
      nextToken
      __typename
    }
    setBoosterSheets {
      nextToken
      __typename
    }
    setBoosterSheetCards {
      nextToken
      __typename
    }
    tokens {
      nextToken
      __typename
    }
    translations {
      AncientGreek
      Arabic
      ChineseSimplified
      ChineseTraditional
      French
      German
      Hebrew
      Italian
      Japanese
      Korean
      Latin
      Phyrexian
      PortugueseBrazil
      Russian
      Sanskrit
      Spanish
      setCode
      id
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSetQueryVariables, APITypes.GetSetQuery>;
export const listSets = /* GraphQL */ `query ListSets(
  $id: ID
  $filter: ModelSetFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSets(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      baseSetSize
      block
      code
      codeV3
      isForeignOnly
      isFoilOnly
      isNonFoilOnly
      isOnlineOnly
      isPaperOnly
      isPartialPreview
      keyruneCode
      mcmName
      mcmId
      mtgoCode
      name
      parentCode
      releaseDate
      tcgplayerGroupId
      totalSetSize
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListSetsQueryVariables, APITypes.ListSetsQuery>;
export const getSetBoosterContent = /* GraphQL */ `query GetSetBoosterContent($id: ID!) {
  getSetBoosterContent(id: $id) {
    id
    boosterIndex
    boosterName
    setCode
    sheetName
    sheetPicks
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSetBoosterContentQueryVariables,
  APITypes.GetSetBoosterContentQuery
>;
export const listSetBoosterContents = /* GraphQL */ `query ListSetBoosterContents(
  $id: ID
  $filter: ModelSetBoosterContentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSetBoosterContents(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      boosterIndex
      boosterName
      setCode
      sheetName
      sheetPicks
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSetBoosterContentsQueryVariables,
  APITypes.ListSetBoosterContentsQuery
>;
export const getSetBoosterContentWeight = /* GraphQL */ `query GetSetBoosterContentWeight($id: ID!) {
  getSetBoosterContentWeight(id: $id) {
    id
    boosterIndex
    boosterName
    boosterWeight
    setCode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSetBoosterContentWeightQueryVariables,
  APITypes.GetSetBoosterContentWeightQuery
>;
export const listSetBoosterContentWeights = /* GraphQL */ `query ListSetBoosterContentWeights(
  $id: ID
  $filter: ModelSetBoosterContentWeightFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSetBoosterContentWeights(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      boosterIndex
      boosterName
      boosterWeight
      setCode
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSetBoosterContentWeightsQueryVariables,
  APITypes.ListSetBoosterContentWeightsQuery
>;
export const getSetBoosterSheet = /* GraphQL */ `query GetSetBoosterSheet($id: ID!) {
  getSetBoosterSheet(id: $id) {
    id
    boosterName
    setCode
    sheetHasBalanceColors
    sheetIsFoil
    sheetName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSetBoosterSheetQueryVariables,
  APITypes.GetSetBoosterSheetQuery
>;
export const listSetBoosterSheets = /* GraphQL */ `query ListSetBoosterSheets(
  $id: ID
  $filter: ModelSetBoosterSheetFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSetBoosterSheets(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      boosterName
      setCode
      sheetHasBalanceColors
      sheetIsFoil
      sheetName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSetBoosterSheetsQueryVariables,
  APITypes.ListSetBoosterSheetsQuery
>;
export const getSetBoosterSheetCard = /* GraphQL */ `query GetSetBoosterSheetCard($id: ID!) {
  getSetBoosterSheetCard(id: $id) {
    id
    boosterName
    cardUuid
    cardWeight
    setCode
    sheetName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSetBoosterSheetCardQueryVariables,
  APITypes.GetSetBoosterSheetCardQuery
>;
export const listSetBoosterSheetCards = /* GraphQL */ `query ListSetBoosterSheetCards(
  $id: ID
  $filter: ModelSetBoosterSheetCardFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSetBoosterSheetCards(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      boosterName
      cardUuid
      cardWeight
      setCode
      sheetName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSetBoosterSheetCardsQueryVariables,
  APITypes.ListSetBoosterSheetCardsQuery
>;
export const getCardToken = /* GraphQL */ `query GetCardToken($id: ID!) {
  getCardToken(id: $id) {
    id
    artist
    asciiName
    availability
    borderColor
    colorIdentity
    colorIndicator
    colors
    edhrecRank
    faceName
    flavorText
    frameEffects
    frameVersion
    hasFoil
    hasNonFoil
    identifiers {
      uuid
      cardKingdomFoilId
      cardKingdomId
      mcmId
      mcmMetaId
      mtgArenaId
      mtgoFoilId
      mtgoId
      mtgJsonV4Id
      multiverseId
      scryfallId
      scryfallOracleId
      scryfallIllustrationId
      tcgplayerProductId
      createdAt
      updatedAt
      __typename
    }
    isFullArt
    isOnlineOnly
    isPromo
    isReprint
    keywords
    layout
    loyalty
    name
    number
    power
    promoTypes
    reverseRelated
    setCode
    side
    subTypes
    text
    toughness
    type
    types
    uuid
    watermark
    identifier {
      id
      cardKingdomEtchedId
      cardKingdomFoilId
      cardKingdomId
      cardSphereId
      mcmId
      mcmMetaId
      mtgArenaId
      mtgJsonFoilVersionId
      mtgJsonNonFoilVersionId
      mtgJsonv4Id
      mtgoFoilId
      mtgoId
      multiverseId
      scryfallId
      scryfallIllustrationId
      scryfallOracleId
      tcgplayerEtchedProductId
      tcgplayerProductId
      tokenUuid
      createdAt
      updatedAt
      __typename
    }
    set {
      id
      baseSetSize
      block
      code
      codeV3
      isForeignOnly
      isFoilOnly
      isNonFoilOnly
      isOnlineOnly
      isPaperOnly
      isPartialPreview
      keyruneCode
      mcmName
      mcmId
      mtgoCode
      name
      parentCode
      releaseDate
      tcgplayerGroupId
      totalSetSize
      type
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCardTokenQueryVariables,
  APITypes.GetCardTokenQuery
>;
export const listCardTokens = /* GraphQL */ `query ListCardTokens(
  $id: ID
  $filter: ModelCardTokenFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCardTokens(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      artist
      asciiName
      availability
      borderColor
      colorIdentity
      colorIndicator
      colors
      edhrecRank
      faceName
      flavorText
      frameEffects
      frameVersion
      hasFoil
      hasNonFoil
      isFullArt
      isOnlineOnly
      isPromo
      isReprint
      keywords
      layout
      loyalty
      name
      number
      power
      promoTypes
      reverseRelated
      setCode
      side
      subTypes
      text
      toughness
      type
      types
      uuid
      watermark
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCardTokensQueryVariables,
  APITypes.ListCardTokensQuery
>;
export const getTranslations = /* GraphQL */ `query GetTranslations($id: ID!) {
  getTranslations(id: $id) {
    AncientGreek
    Arabic
    ChineseSimplified
    ChineseTraditional
    French
    German
    Hebrew
    Italian
    Japanese
    Korean
    Latin
    Phyrexian
    PortugueseBrazil
    Russian
    Sanskrit
    Spanish
    setCode
    set {
      id
      baseSetSize
      block
      code
      codeV3
      isForeignOnly
      isFoilOnly
      isNonFoilOnly
      isOnlineOnly
      isPaperOnly
      isPartialPreview
      keyruneCode
      mcmName
      mcmId
      mtgoCode
      name
      parentCode
      releaseDate
      tcgplayerGroupId
      totalSetSize
      type
      createdAt
      updatedAt
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTranslationsQueryVariables,
  APITypes.GetTranslationsQuery
>;
export const listTranslations = /* GraphQL */ `query ListTranslations(
  $filter: ModelTranslationsFilterInput
  $limit: Int
  $nextToken: String
) {
  listTranslations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      AncientGreek
      Arabic
      ChineseSimplified
      ChineseTraditional
      French
      German
      Hebrew
      Italian
      Japanese
      Korean
      Latin
      Phyrexian
      PortugueseBrazil
      Russian
      Sanskrit
      Spanish
      setCode
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTranslationsQueryVariables,
  APITypes.ListTranslationsQuery
>;
export const getTokenIdentifier = /* GraphQL */ `query GetTokenIdentifier($id: ID!) {
  getTokenIdentifier(id: $id) {
    id
    cardKingdomEtchedId
    cardKingdomFoilId
    cardKingdomId
    cardSphereId
    mcmId
    mcmMetaId
    mtgArenaId
    mtgJsonFoilVersionId
    mtgJsonNonFoilVersionId
    mtgJsonv4Id
    mtgoFoilId
    mtgoId
    multiverseId
    scryfallId
    scryfallIllustrationId
    scryfallOracleId
    tcgplayerEtchedProductId
    tcgplayerProductId
    tokenUuid
    token {
      id
      artist
      asciiName
      availability
      borderColor
      colorIdentity
      colorIndicator
      colors
      edhrecRank
      faceName
      flavorText
      frameEffects
      frameVersion
      hasFoil
      hasNonFoil
      isFullArt
      isOnlineOnly
      isPromo
      isReprint
      keywords
      layout
      loyalty
      name
      number
      power
      promoTypes
      reverseRelated
      setCode
      side
      subTypes
      text
      toughness
      type
      types
      uuid
      watermark
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTokenIdentifierQueryVariables,
  APITypes.GetTokenIdentifierQuery
>;
export const listTokenIdentifiers = /* GraphQL */ `query ListTokenIdentifiers(
  $id: ID
  $filter: ModelTokenIdentifierFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTokenIdentifiers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      cardKingdomEtchedId
      cardKingdomFoilId
      cardKingdomId
      cardSphereId
      mcmId
      mcmMetaId
      mtgArenaId
      mtgJsonFoilVersionId
      mtgJsonNonFoilVersionId
      mtgJsonv4Id
      mtgoFoilId
      mtgoId
      multiverseId
      scryfallId
      scryfallIllustrationId
      scryfallOracleId
      tcgplayerEtchedProductId
      tcgplayerProductId
      tokenUuid
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTokenIdentifiersQueryVariables,
  APITypes.ListTokenIdentifiersQuery
>;
export const legalitiesByCardUuid = /* GraphQL */ `query LegalitiesByCardUuid(
  $cardUuid: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLegalitiesFilterInput
  $limit: Int
  $nextToken: String
) {
  legalitiesByCardUuid(
    cardUuid: $cardUuid
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alchemy
      brawl
      commander
      duel
      explorer
      future
      gladiator
      historic
      historicbrawl
      legacy
      modern
      oathbreaker
      oldschool
      pauper
      paupercommander
      penny
      pioneer
      predh
      premodern
      standard
      vintage
      cardUuid
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LegalitiesByCardUuidQueryVariables,
  APITypes.LegalitiesByCardUuidQuery
>;
export const cardsBySetCode = /* GraphQL */ `query CardsBySetCode(
  $setCode: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCardFilterInput
  $limit: Int
  $nextToken: String
) {
  cardsBySetCode(
    setCode: $setCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CardsBySetCodeQueryVariables,
  APITypes.CardsBySetCodeQuery
>;
export const rulingsByCardUuid = /* GraphQL */ `query RulingsByCardUuid(
  $cardUuid: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelRulingsFilterInput
  $limit: Int
  $nextToken: String
) {
  rulingsByCardUuid(
    cardUuid: $cardUuid
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      date
      text
      cardUuid
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RulingsByCardUuidQueryVariables,
  APITypes.RulingsByCardUuidQuery
>;
export const cardsOwnedsByOwnerUuid = /* GraphQL */ `query CardsOwnedsByOwnerUuid(
  $ownerUuid: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCardsOwnedFilterInput
  $limit: Int
  $nextToken: String
) {
  cardsOwnedsByOwnerUuid(
    ownerUuid: $ownerUuid
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      condition
      addedOn
      soldOn
      isFoil
      initialValue
      createdAt
      updatedAt
      ownerUuid
      addedByUuid
      cardUuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CardsOwnedsByOwnerUuidQueryVariables,
  APITypes.CardsOwnedsByOwnerUuidQuery
>;
export const cardsOwnedsByAddedByUuid = /* GraphQL */ `query CardsOwnedsByAddedByUuid(
  $addedByUuid: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCardsOwnedFilterInput
  $limit: Int
  $nextToken: String
) {
  cardsOwnedsByAddedByUuid(
    addedByUuid: $addedByUuid
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      condition
      addedOn
      soldOn
      isFoil
      initialValue
      createdAt
      updatedAt
      ownerUuid
      addedByUuid
      cardUuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CardsOwnedsByAddedByUuidQueryVariables,
  APITypes.CardsOwnedsByAddedByUuidQuery
>;
export const cardsOwnedsByCardUuid = /* GraphQL */ `query CardsOwnedsByCardUuid(
  $cardUuid: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCardsOwnedFilterInput
  $limit: Int
  $nextToken: String
) {
  cardsOwnedsByCardUuid(
    cardUuid: $cardUuid
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      condition
      addedOn
      soldOn
      isFoil
      initialValue
      createdAt
      updatedAt
      ownerUuid
      addedByUuid
      cardUuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CardsOwnedsByCardUuidQueryVariables,
  APITypes.CardsOwnedsByCardUuidQuery
>;
export const setsByCode = /* GraphQL */ `query SetsByCode(
  $code: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSetFilterInput
  $limit: Int
  $nextToken: String
) {
  setsByCode(
    code: $code
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      baseSetSize
      block
      code
      codeV3
      isForeignOnly
      isFoilOnly
      isNonFoilOnly
      isOnlineOnly
      isPaperOnly
      isPartialPreview
      keyruneCode
      mcmName
      mcmId
      mtgoCode
      name
      parentCode
      releaseDate
      tcgplayerGroupId
      totalSetSize
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SetsByCodeQueryVariables,
  APITypes.SetsByCodeQuery
>;
export const setBoosterContentsBySetCode = /* GraphQL */ `query SetBoosterContentsBySetCode(
  $setCode: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSetBoosterContentFilterInput
  $limit: Int
  $nextToken: String
) {
  setBoosterContentsBySetCode(
    setCode: $setCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boosterIndex
      boosterName
      setCode
      sheetName
      sheetPicks
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SetBoosterContentsBySetCodeQueryVariables,
  APITypes.SetBoosterContentsBySetCodeQuery
>;
export const setBoosterContentWeightsBySetCode = /* GraphQL */ `query SetBoosterContentWeightsBySetCode(
  $setCode: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSetBoosterContentWeightFilterInput
  $limit: Int
  $nextToken: String
) {
  setBoosterContentWeightsBySetCode(
    setCode: $setCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boosterIndex
      boosterName
      boosterWeight
      setCode
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SetBoosterContentWeightsBySetCodeQueryVariables,
  APITypes.SetBoosterContentWeightsBySetCodeQuery
>;
export const setBoosterSheetsBySetCode = /* GraphQL */ `query SetBoosterSheetsBySetCode(
  $setCode: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSetBoosterSheetFilterInput
  $limit: Int
  $nextToken: String
) {
  setBoosterSheetsBySetCode(
    setCode: $setCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boosterName
      setCode
      sheetHasBalanceColors
      sheetIsFoil
      sheetName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SetBoosterSheetsBySetCodeQueryVariables,
  APITypes.SetBoosterSheetsBySetCodeQuery
>;
export const setBoosterSheetCardsBySetCode = /* GraphQL */ `query SetBoosterSheetCardsBySetCode(
  $setCode: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSetBoosterSheetCardFilterInput
  $limit: Int
  $nextToken: String
) {
  setBoosterSheetCardsBySetCode(
    setCode: $setCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      boosterName
      cardUuid
      cardWeight
      setCode
      sheetName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SetBoosterSheetCardsBySetCodeQueryVariables,
  APITypes.SetBoosterSheetCardsBySetCodeQuery
>;
export const cardTokensBySetCode = /* GraphQL */ `query CardTokensBySetCode(
  $setCode: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCardTokenFilterInput
  $limit: Int
  $nextToken: String
) {
  cardTokensBySetCode(
    setCode: $setCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      artist
      asciiName
      availability
      borderColor
      colorIdentity
      colorIndicator
      colors
      edhrecRank
      faceName
      flavorText
      frameEffects
      frameVersion
      hasFoil
      hasNonFoil
      isFullArt
      isOnlineOnly
      isPromo
      isReprint
      keywords
      layout
      loyalty
      name
      number
      power
      promoTypes
      reverseRelated
      setCode
      side
      subTypes
      text
      toughness
      type
      types
      uuid
      watermark
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CardTokensBySetCodeQueryVariables,
  APITypes.CardTokensBySetCodeQuery
>;
export const cardTokensByUuid = /* GraphQL */ `query CardTokensByUuid(
  $uuid: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCardTokenFilterInput
  $limit: Int
  $nextToken: String
) {
  cardTokensByUuid(
    uuid: $uuid
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      artist
      asciiName
      availability
      borderColor
      colorIdentity
      colorIndicator
      colors
      edhrecRank
      faceName
      flavorText
      frameEffects
      frameVersion
      hasFoil
      hasNonFoil
      isFullArt
      isOnlineOnly
      isPromo
      isReprint
      keywords
      layout
      loyalty
      name
      number
      power
      promoTypes
      reverseRelated
      setCode
      side
      subTypes
      text
      toughness
      type
      types
      uuid
      watermark
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CardTokensByUuidQueryVariables,
  APITypes.CardTokensByUuidQuery
>;
export const translationsBySetCode = /* GraphQL */ `query TranslationsBySetCode(
  $setCode: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTranslationsFilterInput
  $limit: Int
  $nextToken: String
) {
  translationsBySetCode(
    setCode: $setCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      AncientGreek
      Arabic
      ChineseSimplified
      ChineseTraditional
      French
      German
      Hebrew
      Italian
      Japanese
      Korean
      Latin
      Phyrexian
      PortugueseBrazil
      Russian
      Sanskrit
      Spanish
      setCode
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TranslationsBySetCodeQueryVariables,
  APITypes.TranslationsBySetCodeQuery
>;
export const tokenIdentifiersByTokenUuid = /* GraphQL */ `query TokenIdentifiersByTokenUuid(
  $tokenUuid: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelTokenIdentifierFilterInput
  $limit: Int
  $nextToken: String
) {
  tokenIdentifiersByTokenUuid(
    tokenUuid: $tokenUuid
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cardKingdomEtchedId
      cardKingdomFoilId
      cardKingdomId
      cardSphereId
      mcmId
      mcmMetaId
      mtgArenaId
      mtgJsonFoilVersionId
      mtgJsonNonFoilVersionId
      mtgJsonv4Id
      mtgoFoilId
      mtgoId
      multiverseId
      scryfallId
      scryfallIllustrationId
      scryfallOracleId
      tcgplayerEtchedProductId
      tcgplayerProductId
      tokenUuid
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TokenIdentifiersByTokenUuidQueryVariables,
  APITypes.TokenIdentifiersByTokenUuidQuery
>;
