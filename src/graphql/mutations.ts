/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const batchCreateCards = /* GraphQL */ `mutation BatchCreateCards($cards: [BatchCreateCard]) {
  batchCreateCards(cards: $cards) {
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
` as GeneratedMutation<
  APITypes.BatchCreateCardsMutationVariables,
  APITypes.BatchCreateCardsMutation
>;
export const batchCreateIdentifiers = /* GraphQL */ `mutation BatchCreateIdentifiers($identifiers: [IdentifierInput]) {
  batchCreateIdentifiers(identifiers: $identifiers) {
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
` as GeneratedMutation<
  APITypes.BatchCreateIdentifiersMutationVariables,
  APITypes.BatchCreateIdentifiersMutation
>;
export const createLeadershipSkills = /* GraphQL */ `mutation CreateLeadershipSkills(
  $input: CreateLeadershipSkillsInput!
  $condition: ModelLeadershipSkillsConditionInput
) {
  createLeadershipSkills(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLeadershipSkillsMutationVariables,
  APITypes.CreateLeadershipSkillsMutation
>;
export const updateLeadershipSkills = /* GraphQL */ `mutation UpdateLeadershipSkills(
  $input: UpdateLeadershipSkillsInput!
  $condition: ModelLeadershipSkillsConditionInput
) {
  updateLeadershipSkills(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLeadershipSkillsMutationVariables,
  APITypes.UpdateLeadershipSkillsMutation
>;
export const deleteLeadershipSkills = /* GraphQL */ `mutation DeleteLeadershipSkills(
  $input: DeleteLeadershipSkillsInput!
  $condition: ModelLeadershipSkillsConditionInput
) {
  deleteLeadershipSkills(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLeadershipSkillsMutationVariables,
  APITypes.DeleteLeadershipSkillsMutation
>;
export const createLegalities = /* GraphQL */ `mutation CreateLegalities(
  $input: CreateLegalitiesInput!
  $condition: ModelLegalitiesConditionInput
) {
  createLegalities(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLegalitiesMutationVariables,
  APITypes.CreateLegalitiesMutation
>;
export const updateLegalities = /* GraphQL */ `mutation UpdateLegalities(
  $input: UpdateLegalitiesInput!
  $condition: ModelLegalitiesConditionInput
) {
  updateLegalities(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLegalitiesMutationVariables,
  APITypes.UpdateLegalitiesMutation
>;
export const deleteLegalities = /* GraphQL */ `mutation DeleteLegalities(
  $input: DeleteLegalitiesInput!
  $condition: ModelLegalitiesConditionInput
) {
  deleteLegalities(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLegalitiesMutationVariables,
  APITypes.DeleteLegalitiesMutation
>;
export const createPurchaseUrls = /* GraphQL */ `mutation CreatePurchaseUrls(
  $input: CreatePurchaseUrlsInput!
  $condition: ModelPurchaseUrlsConditionInput
) {
  createPurchaseUrls(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePurchaseUrlsMutationVariables,
  APITypes.CreatePurchaseUrlsMutation
>;
export const updatePurchaseUrls = /* GraphQL */ `mutation UpdatePurchaseUrls(
  $input: UpdatePurchaseUrlsInput!
  $condition: ModelPurchaseUrlsConditionInput
) {
  updatePurchaseUrls(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePurchaseUrlsMutationVariables,
  APITypes.UpdatePurchaseUrlsMutation
>;
export const deletePurchaseUrls = /* GraphQL */ `mutation DeletePurchaseUrls(
  $input: DeletePurchaseUrlsInput!
  $condition: ModelPurchaseUrlsConditionInput
) {
  deletePurchaseUrls(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePurchaseUrlsMutationVariables,
  APITypes.DeletePurchaseUrlsMutation
>;
export const createSourceProducts = /* GraphQL */ `mutation CreateSourceProducts(
  $input: CreateSourceProductsInput!
  $condition: ModelSourceProductsConditionInput
) {
  createSourceProducts(input: $input, condition: $condition) {
    foil
    nonfoil
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSourceProductsMutationVariables,
  APITypes.CreateSourceProductsMutation
>;
export const updateSourceProducts = /* GraphQL */ `mutation UpdateSourceProducts(
  $input: UpdateSourceProductsInput!
  $condition: ModelSourceProductsConditionInput
) {
  updateSourceProducts(input: $input, condition: $condition) {
    foil
    nonfoil
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSourceProductsMutationVariables,
  APITypes.UpdateSourceProductsMutation
>;
export const deleteSourceProducts = /* GraphQL */ `mutation DeleteSourceProducts(
  $input: DeleteSourceProductsInput!
  $condition: ModelSourceProductsConditionInput
) {
  deleteSourceProducts(input: $input, condition: $condition) {
    foil
    nonfoil
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSourceProductsMutationVariables,
  APITypes.DeleteSourceProductsMutation
>;
export const createCard = /* GraphQL */ `mutation CreateCard(
  $input: CreateCardInput!
  $condition: ModelCardConditionInput
) {
  createCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCardMutationVariables,
  APITypes.CreateCardMutation
>;
export const updateCard = /* GraphQL */ `mutation UpdateCard(
  $input: UpdateCardInput!
  $condition: ModelCardConditionInput
) {
  updateCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCardMutationVariables,
  APITypes.UpdateCardMutation
>;
export const deleteCard = /* GraphQL */ `mutation DeleteCard(
  $input: DeleteCardInput!
  $condition: ModelCardConditionInput
) {
  deleteCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCardMutationVariables,
  APITypes.DeleteCardMutation
>;
export const createForeignData = /* GraphQL */ `mutation CreateForeignData(
  $input: CreateForeignDataInput!
  $condition: ModelForeignDataConditionInput
) {
  createForeignData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateForeignDataMutationVariables,
  APITypes.CreateForeignDataMutation
>;
export const updateForeignData = /* GraphQL */ `mutation UpdateForeignData(
  $input: UpdateForeignDataInput!
  $condition: ModelForeignDataConditionInput
) {
  updateForeignData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateForeignDataMutationVariables,
  APITypes.UpdateForeignDataMutation
>;
export const deleteForeignData = /* GraphQL */ `mutation DeleteForeignData(
  $input: DeleteForeignDataInput!
  $condition: ModelForeignDataConditionInput
) {
  deleteForeignData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteForeignDataMutationVariables,
  APITypes.DeleteForeignDataMutation
>;
export const createIdentifier = /* GraphQL */ `mutation CreateIdentifier(
  $input: CreateIdentifierInput!
  $condition: ModelIdentifierConditionInput
) {
  createIdentifier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateIdentifierMutationVariables,
  APITypes.CreateIdentifierMutation
>;
export const updateIdentifier = /* GraphQL */ `mutation UpdateIdentifier(
  $input: UpdateIdentifierInput!
  $condition: ModelIdentifierConditionInput
) {
  updateIdentifier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateIdentifierMutationVariables,
  APITypes.UpdateIdentifierMutation
>;
export const deleteIdentifier = /* GraphQL */ `mutation DeleteIdentifier(
  $input: DeleteIdentifierInput!
  $condition: ModelIdentifierConditionInput
) {
  deleteIdentifier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteIdentifierMutationVariables,
  APITypes.DeleteIdentifierMutation
>;
export const createRulings = /* GraphQL */ `mutation CreateRulings(
  $input: CreateRulingsInput!
  $condition: ModelRulingsConditionInput
) {
  createRulings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRulingsMutationVariables,
  APITypes.CreateRulingsMutation
>;
export const updateRulings = /* GraphQL */ `mutation UpdateRulings(
  $input: UpdateRulingsInput!
  $condition: ModelRulingsConditionInput
) {
  updateRulings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRulingsMutationVariables,
  APITypes.UpdateRulingsMutation
>;
export const deleteRulings = /* GraphQL */ `mutation DeleteRulings(
  $input: DeleteRulingsInput!
  $condition: ModelRulingsConditionInput
) {
  deleteRulings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRulingsMutationVariables,
  APITypes.DeleteRulingsMutation
>;
export const createCardsOwned = /* GraphQL */ `mutation CreateCardsOwned(
  $input: CreateCardsOwnedInput!
  $condition: ModelCardsOwnedConditionInput
) {
  createCardsOwned(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCardsOwnedMutationVariables,
  APITypes.CreateCardsOwnedMutation
>;
export const updateCardsOwned = /* GraphQL */ `mutation UpdateCardsOwned(
  $input: UpdateCardsOwnedInput!
  $condition: ModelCardsOwnedConditionInput
) {
  updateCardsOwned(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCardsOwnedMutationVariables,
  APITypes.UpdateCardsOwnedMutation
>;
export const deleteCardsOwned = /* GraphQL */ `mutation DeleteCardsOwned(
  $input: DeleteCardsOwnedInput!
  $condition: ModelCardsOwnedConditionInput
) {
  deleteCardsOwned(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCardsOwnedMutationVariables,
  APITypes.DeleteCardsOwnedMutation
>;
export const createPerson = /* GraphQL */ `mutation CreatePerson(
  $input: CreatePersonInput!
  $condition: ModelPersonConditionInput
) {
  createPerson(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePersonMutationVariables,
  APITypes.CreatePersonMutation
>;
export const updatePerson = /* GraphQL */ `mutation UpdatePerson(
  $input: UpdatePersonInput!
  $condition: ModelPersonConditionInput
) {
  updatePerson(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePersonMutationVariables,
  APITypes.UpdatePersonMutation
>;
export const deletePerson = /* GraphQL */ `mutation DeletePerson(
  $input: DeletePersonInput!
  $condition: ModelPersonConditionInput
) {
  deletePerson(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePersonMutationVariables,
  APITypes.DeletePersonMutation
>;
export const createSet = /* GraphQL */ `mutation CreateSet(
  $input: CreateSetInput!
  $condition: ModelSetConditionInput
) {
  createSet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSetMutationVariables,
  APITypes.CreateSetMutation
>;
export const updateSet = /* GraphQL */ `mutation UpdateSet(
  $input: UpdateSetInput!
  $condition: ModelSetConditionInput
) {
  updateSet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSetMutationVariables,
  APITypes.UpdateSetMutation
>;
export const deleteSet = /* GraphQL */ `mutation DeleteSet(
  $input: DeleteSetInput!
  $condition: ModelSetConditionInput
) {
  deleteSet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSetMutationVariables,
  APITypes.DeleteSetMutation
>;
export const createSetBoosterContent = /* GraphQL */ `mutation CreateSetBoosterContent(
  $input: CreateSetBoosterContentInput!
  $condition: ModelSetBoosterContentConditionInput
) {
  createSetBoosterContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSetBoosterContentMutationVariables,
  APITypes.CreateSetBoosterContentMutation
>;
export const updateSetBoosterContent = /* GraphQL */ `mutation UpdateSetBoosterContent(
  $input: UpdateSetBoosterContentInput!
  $condition: ModelSetBoosterContentConditionInput
) {
  updateSetBoosterContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSetBoosterContentMutationVariables,
  APITypes.UpdateSetBoosterContentMutation
>;
export const deleteSetBoosterContent = /* GraphQL */ `mutation DeleteSetBoosterContent(
  $input: DeleteSetBoosterContentInput!
  $condition: ModelSetBoosterContentConditionInput
) {
  deleteSetBoosterContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSetBoosterContentMutationVariables,
  APITypes.DeleteSetBoosterContentMutation
>;
export const createSetBoosterContentWeight = /* GraphQL */ `mutation CreateSetBoosterContentWeight(
  $input: CreateSetBoosterContentWeightInput!
  $condition: ModelSetBoosterContentWeightConditionInput
) {
  createSetBoosterContentWeight(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSetBoosterContentWeightMutationVariables,
  APITypes.CreateSetBoosterContentWeightMutation
>;
export const updateSetBoosterContentWeight = /* GraphQL */ `mutation UpdateSetBoosterContentWeight(
  $input: UpdateSetBoosterContentWeightInput!
  $condition: ModelSetBoosterContentWeightConditionInput
) {
  updateSetBoosterContentWeight(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSetBoosterContentWeightMutationVariables,
  APITypes.UpdateSetBoosterContentWeightMutation
>;
export const deleteSetBoosterContentWeight = /* GraphQL */ `mutation DeleteSetBoosterContentWeight(
  $input: DeleteSetBoosterContentWeightInput!
  $condition: ModelSetBoosterContentWeightConditionInput
) {
  deleteSetBoosterContentWeight(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSetBoosterContentWeightMutationVariables,
  APITypes.DeleteSetBoosterContentWeightMutation
>;
export const createSetBoosterSheet = /* GraphQL */ `mutation CreateSetBoosterSheet(
  $input: CreateSetBoosterSheetInput!
  $condition: ModelSetBoosterSheetConditionInput
) {
  createSetBoosterSheet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSetBoosterSheetMutationVariables,
  APITypes.CreateSetBoosterSheetMutation
>;
export const updateSetBoosterSheet = /* GraphQL */ `mutation UpdateSetBoosterSheet(
  $input: UpdateSetBoosterSheetInput!
  $condition: ModelSetBoosterSheetConditionInput
) {
  updateSetBoosterSheet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSetBoosterSheetMutationVariables,
  APITypes.UpdateSetBoosterSheetMutation
>;
export const deleteSetBoosterSheet = /* GraphQL */ `mutation DeleteSetBoosterSheet(
  $input: DeleteSetBoosterSheetInput!
  $condition: ModelSetBoosterSheetConditionInput
) {
  deleteSetBoosterSheet(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSetBoosterSheetMutationVariables,
  APITypes.DeleteSetBoosterSheetMutation
>;
export const createSetBoosterSheetCard = /* GraphQL */ `mutation CreateSetBoosterSheetCard(
  $input: CreateSetBoosterSheetCardInput!
  $condition: ModelSetBoosterSheetCardConditionInput
) {
  createSetBoosterSheetCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSetBoosterSheetCardMutationVariables,
  APITypes.CreateSetBoosterSheetCardMutation
>;
export const updateSetBoosterSheetCard = /* GraphQL */ `mutation UpdateSetBoosterSheetCard(
  $input: UpdateSetBoosterSheetCardInput!
  $condition: ModelSetBoosterSheetCardConditionInput
) {
  updateSetBoosterSheetCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSetBoosterSheetCardMutationVariables,
  APITypes.UpdateSetBoosterSheetCardMutation
>;
export const deleteSetBoosterSheetCard = /* GraphQL */ `mutation DeleteSetBoosterSheetCard(
  $input: DeleteSetBoosterSheetCardInput!
  $condition: ModelSetBoosterSheetCardConditionInput
) {
  deleteSetBoosterSheetCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSetBoosterSheetCardMutationVariables,
  APITypes.DeleteSetBoosterSheetCardMutation
>;
export const createCardToken = /* GraphQL */ `mutation CreateCardToken(
  $input: CreateCardTokenInput!
  $condition: ModelCardTokenConditionInput
) {
  createCardToken(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCardTokenMutationVariables,
  APITypes.CreateCardTokenMutation
>;
export const updateCardToken = /* GraphQL */ `mutation UpdateCardToken(
  $input: UpdateCardTokenInput!
  $condition: ModelCardTokenConditionInput
) {
  updateCardToken(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCardTokenMutationVariables,
  APITypes.UpdateCardTokenMutation
>;
export const deleteCardToken = /* GraphQL */ `mutation DeleteCardToken(
  $input: DeleteCardTokenInput!
  $condition: ModelCardTokenConditionInput
) {
  deleteCardToken(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCardTokenMutationVariables,
  APITypes.DeleteCardTokenMutation
>;
export const createTranslations = /* GraphQL */ `mutation CreateTranslations(
  $input: CreateTranslationsInput!
  $condition: ModelTranslationsConditionInput
) {
  createTranslations(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTranslationsMutationVariables,
  APITypes.CreateTranslationsMutation
>;
export const updateTranslations = /* GraphQL */ `mutation UpdateTranslations(
  $input: UpdateTranslationsInput!
  $condition: ModelTranslationsConditionInput
) {
  updateTranslations(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTranslationsMutationVariables,
  APITypes.UpdateTranslationsMutation
>;
export const deleteTranslations = /* GraphQL */ `mutation DeleteTranslations(
  $input: DeleteTranslationsInput!
  $condition: ModelTranslationsConditionInput
) {
  deleteTranslations(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTranslationsMutationVariables,
  APITypes.DeleteTranslationsMutation
>;
export const createTokenIdentifier = /* GraphQL */ `mutation CreateTokenIdentifier(
  $input: CreateTokenIdentifierInput!
  $condition: ModelTokenIdentifierConditionInput
) {
  createTokenIdentifier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTokenIdentifierMutationVariables,
  APITypes.CreateTokenIdentifierMutation
>;
export const updateTokenIdentifier = /* GraphQL */ `mutation UpdateTokenIdentifier(
  $input: UpdateTokenIdentifierInput!
  $condition: ModelTokenIdentifierConditionInput
) {
  updateTokenIdentifier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTokenIdentifierMutationVariables,
  APITypes.UpdateTokenIdentifierMutation
>;
export const deleteTokenIdentifier = /* GraphQL */ `mutation DeleteTokenIdentifier(
  $input: DeleteTokenIdentifierInput!
  $condition: ModelTokenIdentifierConditionInput
) {
  deleteTokenIdentifier(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTokenIdentifierMutationVariables,
  APITypes.DeleteTokenIdentifierMutation
>;
