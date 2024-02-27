/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateLeadershipSkills = /* GraphQL */ `subscription OnCreateLeadershipSkills(
  $filter: ModelSubscriptionLeadershipSkillsFilterInput
) {
  onCreateLeadershipSkills(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLeadershipSkillsSubscriptionVariables,
  APITypes.OnCreateLeadershipSkillsSubscription
>;
export const onUpdateLeadershipSkills = /* GraphQL */ `subscription OnUpdateLeadershipSkills(
  $filter: ModelSubscriptionLeadershipSkillsFilterInput
) {
  onUpdateLeadershipSkills(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLeadershipSkillsSubscriptionVariables,
  APITypes.OnUpdateLeadershipSkillsSubscription
>;
export const onDeleteLeadershipSkills = /* GraphQL */ `subscription OnDeleteLeadershipSkills(
  $filter: ModelSubscriptionLeadershipSkillsFilterInput
) {
  onDeleteLeadershipSkills(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLeadershipSkillsSubscriptionVariables,
  APITypes.OnDeleteLeadershipSkillsSubscription
>;
export const onCreateLegalities = /* GraphQL */ `subscription OnCreateLegalities(
  $filter: ModelSubscriptionLegalitiesFilterInput
) {
  onCreateLegalities(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLegalitiesSubscriptionVariables,
  APITypes.OnCreateLegalitiesSubscription
>;
export const onUpdateLegalities = /* GraphQL */ `subscription OnUpdateLegalities(
  $filter: ModelSubscriptionLegalitiesFilterInput
) {
  onUpdateLegalities(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLegalitiesSubscriptionVariables,
  APITypes.OnUpdateLegalitiesSubscription
>;
export const onDeleteLegalities = /* GraphQL */ `subscription OnDeleteLegalities(
  $filter: ModelSubscriptionLegalitiesFilterInput
) {
  onDeleteLegalities(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLegalitiesSubscriptionVariables,
  APITypes.OnDeleteLegalitiesSubscription
>;
export const onCreatePurchaseUrls = /* GraphQL */ `subscription OnCreatePurchaseUrls(
  $filter: ModelSubscriptionPurchaseUrlsFilterInput
) {
  onCreatePurchaseUrls(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePurchaseUrlsSubscriptionVariables,
  APITypes.OnCreatePurchaseUrlsSubscription
>;
export const onUpdatePurchaseUrls = /* GraphQL */ `subscription OnUpdatePurchaseUrls(
  $filter: ModelSubscriptionPurchaseUrlsFilterInput
) {
  onUpdatePurchaseUrls(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePurchaseUrlsSubscriptionVariables,
  APITypes.OnUpdatePurchaseUrlsSubscription
>;
export const onDeletePurchaseUrls = /* GraphQL */ `subscription OnDeletePurchaseUrls(
  $filter: ModelSubscriptionPurchaseUrlsFilterInput
) {
  onDeletePurchaseUrls(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePurchaseUrlsSubscriptionVariables,
  APITypes.OnDeletePurchaseUrlsSubscription
>;
export const onCreateSourceProducts = /* GraphQL */ `subscription OnCreateSourceProducts(
  $filter: ModelSubscriptionSourceProductsFilterInput
) {
  onCreateSourceProducts(filter: $filter) {
    foil
    nonfoil
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSourceProductsSubscriptionVariables,
  APITypes.OnCreateSourceProductsSubscription
>;
export const onUpdateSourceProducts = /* GraphQL */ `subscription OnUpdateSourceProducts(
  $filter: ModelSubscriptionSourceProductsFilterInput
) {
  onUpdateSourceProducts(filter: $filter) {
    foil
    nonfoil
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSourceProductsSubscriptionVariables,
  APITypes.OnUpdateSourceProductsSubscription
>;
export const onDeleteSourceProducts = /* GraphQL */ `subscription OnDeleteSourceProducts(
  $filter: ModelSubscriptionSourceProductsFilterInput
) {
  onDeleteSourceProducts(filter: $filter) {
    foil
    nonfoil
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSourceProductsSubscriptionVariables,
  APITypes.OnDeleteSourceProductsSubscription
>;
export const onCreateCard = /* GraphQL */ `subscription OnCreateCard($filter: ModelSubscriptionCardFilterInput) {
  onCreateCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCardSubscriptionVariables,
  APITypes.OnCreateCardSubscription
>;
export const onUpdateCard = /* GraphQL */ `subscription OnUpdateCard($filter: ModelSubscriptionCardFilterInput) {
  onUpdateCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCardSubscriptionVariables,
  APITypes.OnUpdateCardSubscription
>;
export const onDeleteCard = /* GraphQL */ `subscription OnDeleteCard($filter: ModelSubscriptionCardFilterInput) {
  onDeleteCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCardSubscriptionVariables,
  APITypes.OnDeleteCardSubscription
>;
export const onCreateForeignData = /* GraphQL */ `subscription OnCreateForeignData(
  $filter: ModelSubscriptionForeignDataFilterInput
) {
  onCreateForeignData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateForeignDataSubscriptionVariables,
  APITypes.OnCreateForeignDataSubscription
>;
export const onUpdateForeignData = /* GraphQL */ `subscription OnUpdateForeignData(
  $filter: ModelSubscriptionForeignDataFilterInput
) {
  onUpdateForeignData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateForeignDataSubscriptionVariables,
  APITypes.OnUpdateForeignDataSubscription
>;
export const onDeleteForeignData = /* GraphQL */ `subscription OnDeleteForeignData(
  $filter: ModelSubscriptionForeignDataFilterInput
) {
  onDeleteForeignData(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteForeignDataSubscriptionVariables,
  APITypes.OnDeleteForeignDataSubscription
>;
export const onCreateIdentifier = /* GraphQL */ `subscription OnCreateIdentifier(
  $filter: ModelSubscriptionIdentifierFilterInput
) {
  onCreateIdentifier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIdentifierSubscriptionVariables,
  APITypes.OnCreateIdentifierSubscription
>;
export const onUpdateIdentifier = /* GraphQL */ `subscription OnUpdateIdentifier(
  $filter: ModelSubscriptionIdentifierFilterInput
) {
  onUpdateIdentifier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIdentifierSubscriptionVariables,
  APITypes.OnUpdateIdentifierSubscription
>;
export const onDeleteIdentifier = /* GraphQL */ `subscription OnDeleteIdentifier(
  $filter: ModelSubscriptionIdentifierFilterInput
) {
  onDeleteIdentifier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIdentifierSubscriptionVariables,
  APITypes.OnDeleteIdentifierSubscription
>;
export const onCreateRulings = /* GraphQL */ `subscription OnCreateRulings($filter: ModelSubscriptionRulingsFilterInput) {
  onCreateRulings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRulingsSubscriptionVariables,
  APITypes.OnCreateRulingsSubscription
>;
export const onUpdateRulings = /* GraphQL */ `subscription OnUpdateRulings($filter: ModelSubscriptionRulingsFilterInput) {
  onUpdateRulings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRulingsSubscriptionVariables,
  APITypes.OnUpdateRulingsSubscription
>;
export const onDeleteRulings = /* GraphQL */ `subscription OnDeleteRulings($filter: ModelSubscriptionRulingsFilterInput) {
  onDeleteRulings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRulingsSubscriptionVariables,
  APITypes.OnDeleteRulingsSubscription
>;
export const onCreateCardsOwned = /* GraphQL */ `subscription OnCreateCardsOwned(
  $filter: ModelSubscriptionCardsOwnedFilterInput
) {
  onCreateCardsOwned(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCardsOwnedSubscriptionVariables,
  APITypes.OnCreateCardsOwnedSubscription
>;
export const onUpdateCardsOwned = /* GraphQL */ `subscription OnUpdateCardsOwned(
  $filter: ModelSubscriptionCardsOwnedFilterInput
) {
  onUpdateCardsOwned(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCardsOwnedSubscriptionVariables,
  APITypes.OnUpdateCardsOwnedSubscription
>;
export const onDeleteCardsOwned = /* GraphQL */ `subscription OnDeleteCardsOwned(
  $filter: ModelSubscriptionCardsOwnedFilterInput
) {
  onDeleteCardsOwned(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCardsOwnedSubscriptionVariables,
  APITypes.OnDeleteCardsOwnedSubscription
>;
export const onCreatePerson = /* GraphQL */ `subscription OnCreatePerson($filter: ModelSubscriptionPersonFilterInput) {
  onCreatePerson(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePersonSubscriptionVariables,
  APITypes.OnCreatePersonSubscription
>;
export const onUpdatePerson = /* GraphQL */ `subscription OnUpdatePerson($filter: ModelSubscriptionPersonFilterInput) {
  onUpdatePerson(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePersonSubscriptionVariables,
  APITypes.OnUpdatePersonSubscription
>;
export const onDeletePerson = /* GraphQL */ `subscription OnDeletePerson($filter: ModelSubscriptionPersonFilterInput) {
  onDeletePerson(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePersonSubscriptionVariables,
  APITypes.OnDeletePersonSubscription
>;
export const onCreateSet = /* GraphQL */ `subscription OnCreateSet($filter: ModelSubscriptionSetFilterInput) {
  onCreateSet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSetSubscriptionVariables,
  APITypes.OnCreateSetSubscription
>;
export const onUpdateSet = /* GraphQL */ `subscription OnUpdateSet($filter: ModelSubscriptionSetFilterInput) {
  onUpdateSet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSetSubscriptionVariables,
  APITypes.OnUpdateSetSubscription
>;
export const onDeleteSet = /* GraphQL */ `subscription OnDeleteSet($filter: ModelSubscriptionSetFilterInput) {
  onDeleteSet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSetSubscriptionVariables,
  APITypes.OnDeleteSetSubscription
>;
export const onCreateSetBoosterContent = /* GraphQL */ `subscription OnCreateSetBoosterContent(
  $filter: ModelSubscriptionSetBoosterContentFilterInput
) {
  onCreateSetBoosterContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSetBoosterContentSubscriptionVariables,
  APITypes.OnCreateSetBoosterContentSubscription
>;
export const onUpdateSetBoosterContent = /* GraphQL */ `subscription OnUpdateSetBoosterContent(
  $filter: ModelSubscriptionSetBoosterContentFilterInput
) {
  onUpdateSetBoosterContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSetBoosterContentSubscriptionVariables,
  APITypes.OnUpdateSetBoosterContentSubscription
>;
export const onDeleteSetBoosterContent = /* GraphQL */ `subscription OnDeleteSetBoosterContent(
  $filter: ModelSubscriptionSetBoosterContentFilterInput
) {
  onDeleteSetBoosterContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSetBoosterContentSubscriptionVariables,
  APITypes.OnDeleteSetBoosterContentSubscription
>;
export const onCreateSetBoosterContentWeight = /* GraphQL */ `subscription OnCreateSetBoosterContentWeight(
  $filter: ModelSubscriptionSetBoosterContentWeightFilterInput
) {
  onCreateSetBoosterContentWeight(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSetBoosterContentWeightSubscriptionVariables,
  APITypes.OnCreateSetBoosterContentWeightSubscription
>;
export const onUpdateSetBoosterContentWeight = /* GraphQL */ `subscription OnUpdateSetBoosterContentWeight(
  $filter: ModelSubscriptionSetBoosterContentWeightFilterInput
) {
  onUpdateSetBoosterContentWeight(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSetBoosterContentWeightSubscriptionVariables,
  APITypes.OnUpdateSetBoosterContentWeightSubscription
>;
export const onDeleteSetBoosterContentWeight = /* GraphQL */ `subscription OnDeleteSetBoosterContentWeight(
  $filter: ModelSubscriptionSetBoosterContentWeightFilterInput
) {
  onDeleteSetBoosterContentWeight(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSetBoosterContentWeightSubscriptionVariables,
  APITypes.OnDeleteSetBoosterContentWeightSubscription
>;
export const onCreateSetBoosterSheet = /* GraphQL */ `subscription OnCreateSetBoosterSheet(
  $filter: ModelSubscriptionSetBoosterSheetFilterInput
) {
  onCreateSetBoosterSheet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSetBoosterSheetSubscriptionVariables,
  APITypes.OnCreateSetBoosterSheetSubscription
>;
export const onUpdateSetBoosterSheet = /* GraphQL */ `subscription OnUpdateSetBoosterSheet(
  $filter: ModelSubscriptionSetBoosterSheetFilterInput
) {
  onUpdateSetBoosterSheet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSetBoosterSheetSubscriptionVariables,
  APITypes.OnUpdateSetBoosterSheetSubscription
>;
export const onDeleteSetBoosterSheet = /* GraphQL */ `subscription OnDeleteSetBoosterSheet(
  $filter: ModelSubscriptionSetBoosterSheetFilterInput
) {
  onDeleteSetBoosterSheet(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSetBoosterSheetSubscriptionVariables,
  APITypes.OnDeleteSetBoosterSheetSubscription
>;
export const onCreateSetBoosterSheetCard = /* GraphQL */ `subscription OnCreateSetBoosterSheetCard(
  $filter: ModelSubscriptionSetBoosterSheetCardFilterInput
) {
  onCreateSetBoosterSheetCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSetBoosterSheetCardSubscriptionVariables,
  APITypes.OnCreateSetBoosterSheetCardSubscription
>;
export const onUpdateSetBoosterSheetCard = /* GraphQL */ `subscription OnUpdateSetBoosterSheetCard(
  $filter: ModelSubscriptionSetBoosterSheetCardFilterInput
) {
  onUpdateSetBoosterSheetCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSetBoosterSheetCardSubscriptionVariables,
  APITypes.OnUpdateSetBoosterSheetCardSubscription
>;
export const onDeleteSetBoosterSheetCard = /* GraphQL */ `subscription OnDeleteSetBoosterSheetCard(
  $filter: ModelSubscriptionSetBoosterSheetCardFilterInput
) {
  onDeleteSetBoosterSheetCard(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSetBoosterSheetCardSubscriptionVariables,
  APITypes.OnDeleteSetBoosterSheetCardSubscription
>;
export const onCreateCardToken = /* GraphQL */ `subscription OnCreateCardToken($filter: ModelSubscriptionCardTokenFilterInput) {
  onCreateCardToken(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCardTokenSubscriptionVariables,
  APITypes.OnCreateCardTokenSubscription
>;
export const onUpdateCardToken = /* GraphQL */ `subscription OnUpdateCardToken($filter: ModelSubscriptionCardTokenFilterInput) {
  onUpdateCardToken(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCardTokenSubscriptionVariables,
  APITypes.OnUpdateCardTokenSubscription
>;
export const onDeleteCardToken = /* GraphQL */ `subscription OnDeleteCardToken($filter: ModelSubscriptionCardTokenFilterInput) {
  onDeleteCardToken(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCardTokenSubscriptionVariables,
  APITypes.OnDeleteCardTokenSubscription
>;
export const onCreateTranslations = /* GraphQL */ `subscription OnCreateTranslations(
  $filter: ModelSubscriptionTranslationsFilterInput
) {
  onCreateTranslations(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTranslationsSubscriptionVariables,
  APITypes.OnCreateTranslationsSubscription
>;
export const onUpdateTranslations = /* GraphQL */ `subscription OnUpdateTranslations(
  $filter: ModelSubscriptionTranslationsFilterInput
) {
  onUpdateTranslations(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTranslationsSubscriptionVariables,
  APITypes.OnUpdateTranslationsSubscription
>;
export const onDeleteTranslations = /* GraphQL */ `subscription OnDeleteTranslations(
  $filter: ModelSubscriptionTranslationsFilterInput
) {
  onDeleteTranslations(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTranslationsSubscriptionVariables,
  APITypes.OnDeleteTranslationsSubscription
>;
export const onCreateTokenIdentifier = /* GraphQL */ `subscription OnCreateTokenIdentifier(
  $filter: ModelSubscriptionTokenIdentifierFilterInput
) {
  onCreateTokenIdentifier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTokenIdentifierSubscriptionVariables,
  APITypes.OnCreateTokenIdentifierSubscription
>;
export const onUpdateTokenIdentifier = /* GraphQL */ `subscription OnUpdateTokenIdentifier(
  $filter: ModelSubscriptionTokenIdentifierFilterInput
) {
  onUpdateTokenIdentifier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTokenIdentifierSubscriptionVariables,
  APITypes.OnUpdateTokenIdentifierSubscription
>;
export const onDeleteTokenIdentifier = /* GraphQL */ `subscription OnDeleteTokenIdentifier(
  $filter: ModelSubscriptionTokenIdentifierFilterInput
) {
  onDeleteTokenIdentifier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTokenIdentifierSubscriptionVariables,
  APITypes.OnDeleteTokenIdentifierSubscription
>;
