import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

export enum CardCondition {
  DAMAGED = "DAMAGED",
  HEAVILY_PLAYED = "HEAVILY_PLAYED",
  LIGHTLY_PLAYED = "LIGHTLY_PLAYED",
  MODERATELY_PLAYED = "MODERATELY_PLAYED",
  NEAR_MINT = "NEAR_MINT"
}

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}



type EagerCardModel = {
  readonly artist?: string | null;
  readonly artistids?: string | null;
  readonly asciiname?: string | null;
  readonly attractionlights?: string | null;
  readonly availability?: string | null;
  readonly boostertypes?: string | null;
  readonly bordercolor?: string | null;
  readonly cardparts?: string | null;
  readonly coloridentity?: string | null;
  readonly colorindicator?: string | null;
  readonly colors?: string | null;
  readonly createdAt: string;
  readonly defense?: string | null;
  readonly dueldeck?: string | null;
  readonly edhrecrank?: number | null;
  readonly edhrecsaltiness?: number | null;
  readonly faceconvertedmanacost?: number | null;
  readonly faceflavorname?: string | null;
  readonly facemanavalue?: number | null;
  readonly facename?: string | null;
  readonly finishes?: string | null;
  readonly flavorname?: string | null;
  readonly flavortext?: string | null;
  readonly frameeffects?: string | null;
  readonly frameversion?: string | null;
  readonly hand?: string | null;
  readonly hasalternativedecklimit?: boolean | null;
  readonly hascontentwarning?: boolean | null;
  readonly hasfoil?: boolean | null;
  readonly hasnonfoil?: boolean | null;
  readonly id: number;
  readonly identifier?: Cardidentifier | null;
  readonly isalternative?: boolean | null;
  readonly isfullart?: boolean | null;
  readonly isfunny?: boolean | null;
  readonly isonlineonly?: boolean | null;
  readonly isoversized?: boolean | null;
  readonly ispromo?: boolean | null;
  readonly isrebalanced?: boolean | null;
  readonly isreprint?: boolean | null;
  readonly isreserved?: boolean | null;
  readonly isstarter?: boolean | null;
  readonly isstoryspotlight?: boolean | null;
  readonly istextless?: boolean | null;
  readonly istimeshifted?: boolean | null;
  readonly keywords?: string | null;
  readonly language?: string | null;
  readonly layout?: string | null;
  readonly leadershipskills?: string | null;
  readonly life?: string | null;
  readonly loyalty?: string | null;
  readonly manacost?: string | null;
  readonly manavalue?: number | null;
  readonly name?: string | null;
  readonly number?: string | null;
  readonly originalprintings?: string | null;
  readonly originalreleasedate?: string | null;
  readonly originaltext?: string | null;
  readonly originaltype?: string | null;
  readonly otherfaceids?: string | null;
  readonly power?: string | null;
  readonly printings?: string | null;
  readonly promotypes?: string | null;
  readonly rarity?: string | null;
  readonly rebalancedprintings?: string | null;
  readonly relatedcards?: string | null;
  readonly securitystamp?: string | null;
  readonly setcode?: string | null;
  readonly side?: string | null;
  readonly signature?: string | null;
  readonly sourceproducts?: string | null;
  readonly subsets?: string | null;
  readonly subtypes?: string | null;
  readonly supertypes?: string | null;
  readonly text?: string | null;
  readonly toughness?: string | null;
  readonly type?: string | null;
  readonly types?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
  readonly variations?: string | null;
  readonly watermark?: string | null;
}

type LazyCardModel = {
  readonly artist?: string | null;
  readonly artistids?: string | null;
  readonly asciiname?: string | null;
  readonly attractionlights?: string | null;
  readonly availability?: string | null;
  readonly boostertypes?: string | null;
  readonly bordercolor?: string | null;
  readonly cardparts?: string | null;
  readonly coloridentity?: string | null;
  readonly colorindicator?: string | null;
  readonly colors?: string | null;
  readonly createdAt: string;
  readonly defense?: string | null;
  readonly dueldeck?: string | null;
  readonly edhrecrank?: number | null;
  readonly edhrecsaltiness?: number | null;
  readonly faceconvertedmanacost?: number | null;
  readonly faceflavorname?: string | null;
  readonly facemanavalue?: number | null;
  readonly facename?: string | null;
  readonly finishes?: string | null;
  readonly flavorname?: string | null;
  readonly flavortext?: string | null;
  readonly frameeffects?: string | null;
  readonly frameversion?: string | null;
  readonly hand?: string | null;
  readonly hasalternativedecklimit?: boolean | null;
  readonly hascontentwarning?: boolean | null;
  readonly hasfoil?: boolean | null;
  readonly hasnonfoil?: boolean | null;
  readonly id: number;
  readonly identifier?: Cardidentifier | null;
  readonly isalternative?: boolean | null;
  readonly isfullart?: boolean | null;
  readonly isfunny?: boolean | null;
  readonly isonlineonly?: boolean | null;
  readonly isoversized?: boolean | null;
  readonly ispromo?: boolean | null;
  readonly isrebalanced?: boolean | null;
  readonly isreprint?: boolean | null;
  readonly isreserved?: boolean | null;
  readonly isstarter?: boolean | null;
  readonly isstoryspotlight?: boolean | null;
  readonly istextless?: boolean | null;
  readonly istimeshifted?: boolean | null;
  readonly keywords?: string | null;
  readonly language?: string | null;
  readonly layout?: string | null;
  readonly leadershipskills?: string | null;
  readonly life?: string | null;
  readonly loyalty?: string | null;
  readonly manacost?: string | null;
  readonly manavalue?: number | null;
  readonly name?: string | null;
  readonly number?: string | null;
  readonly originalprintings?: string | null;
  readonly originalreleasedate?: string | null;
  readonly originaltext?: string | null;
  readonly originaltype?: string | null;
  readonly otherfaceids?: string | null;
  readonly power?: string | null;
  readonly printings?: string | null;
  readonly promotypes?: string | null;
  readonly rarity?: string | null;
  readonly rebalancedprintings?: string | null;
  readonly relatedcards?: string | null;
  readonly securitystamp?: string | null;
  readonly setcode?: string | null;
  readonly side?: string | null;
  readonly signature?: string | null;
  readonly sourceproducts?: string | null;
  readonly subsets?: string | null;
  readonly subtypes?: string | null;
  readonly supertypes?: string | null;
  readonly text?: string | null;
  readonly toughness?: string | null;
  readonly type?: string | null;
  readonly types?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
  readonly variations?: string | null;
  readonly watermark?: string | null;
}

export declare type CardModel = LazyLoading extends LazyLoadingDisabled ? EagerCardModel : LazyCardModel

export declare const CardModel: (new (init: ModelInit<CardModel>) => CardModel)

type EagerCardforeigndatumModel = {
  readonly createdAt: string;
  readonly facename?: string | null;
  readonly flavortext?: string | null;
  readonly id: number;
  readonly language?: string | null;
  readonly multiverseid?: number | null;
  readonly name?: string | null;
  readonly text?: string | null;
  readonly type?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
}

type LazyCardforeigndatumModel = {
  readonly createdAt: string;
  readonly facename?: string | null;
  readonly flavortext?: string | null;
  readonly id: number;
  readonly language?: string | null;
  readonly multiverseid?: number | null;
  readonly name?: string | null;
  readonly text?: string | null;
  readonly type?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
}

export declare type CardforeigndatumModel = LazyLoading extends LazyLoadingDisabled ? EagerCardforeigndatumModel : LazyCardforeigndatumModel

export declare const CardforeigndatumModel: (new (init: ModelInit<CardforeigndatumModel>) => CardforeigndatumModel)

type EagerCardidentifierModel = {
  readonly card?: Card | null;
  readonly cardkingdometchedid?: string | null;
  readonly cardkingdomfoilid?: string | null;
  readonly cardkingdomid?: string | null;
  readonly cardsphereid?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly mcmid?: string | null;
  readonly mcmmetaid?: string | null;
  readonly mtgarenaid?: string | null;
  readonly mtgjsonfoilversionid?: string | null;
  readonly mtgjsonnonfoilversionid?: string | null;
  readonly mtgjsonv4id?: string | null;
  readonly mtgofoilid?: string | null;
  readonly mtgoid?: string | null;
  readonly multiverseid?: string | null;
  readonly scryfallid?: string | null;
  readonly scryfallillustrationid?: string | null;
  readonly scryfalloracleid?: string | null;
  readonly tcgplayeretchedproductid?: string | null;
  readonly tcgplayerproductid?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
}

type LazyCardidentifierModel = {
  readonly card?: Card | null;
  readonly cardkingdometchedid?: string | null;
  readonly cardkingdomfoilid?: string | null;
  readonly cardkingdomid?: string | null;
  readonly cardsphereid?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly mcmid?: string | null;
  readonly mcmmetaid?: string | null;
  readonly mtgarenaid?: string | null;
  readonly mtgjsonfoilversionid?: string | null;
  readonly mtgjsonnonfoilversionid?: string | null;
  readonly mtgjsonv4id?: string | null;
  readonly mtgofoilid?: string | null;
  readonly mtgoid?: string | null;
  readonly multiverseid?: string | null;
  readonly scryfallid?: string | null;
  readonly scryfallillustrationid?: string | null;
  readonly scryfalloracleid?: string | null;
  readonly tcgplayeretchedproductid?: string | null;
  readonly tcgplayerproductid?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
}

export declare type CardidentifierModel = LazyLoading extends LazyLoadingDisabled ? EagerCardidentifierModel : LazyCardidentifierModel

export declare const CardidentifierModel: (new (init: ModelInit<CardidentifierModel>) => CardidentifierModel)

type EagerCardlegalityModel = {
  readonly alchemy?: string | null;
  readonly brawl?: string | null;
  readonly commander?: string | null;
  readonly createdAt: string;
  readonly duel?: string | null;
  readonly explorer?: string | null;
  readonly future?: string | null;
  readonly gladiator?: string | null;
  readonly historic?: string | null;
  readonly historicbrawl?: string | null;
  readonly id: number;
  readonly legacy?: string | null;
  readonly modern?: string | null;
  readonly oathbreaker?: string | null;
  readonly oldschool?: string | null;
  readonly pauper?: string | null;
  readonly paupercommander?: string | null;
  readonly penny?: string | null;
  readonly pioneer?: string | null;
  readonly predh?: string | null;
  readonly premodern?: string | null;
  readonly standard?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
  readonly vintage?: string | null;
}

type LazyCardlegalityModel = {
  readonly alchemy?: string | null;
  readonly brawl?: string | null;
  readonly commander?: string | null;
  readonly createdAt: string;
  readonly duel?: string | null;
  readonly explorer?: string | null;
  readonly future?: string | null;
  readonly gladiator?: string | null;
  readonly historic?: string | null;
  readonly historicbrawl?: string | null;
  readonly id: number;
  readonly legacy?: string | null;
  readonly modern?: string | null;
  readonly oathbreaker?: string | null;
  readonly oldschool?: string | null;
  readonly pauper?: string | null;
  readonly paupercommander?: string | null;
  readonly penny?: string | null;
  readonly pioneer?: string | null;
  readonly predh?: string | null;
  readonly premodern?: string | null;
  readonly standard?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
  readonly vintage?: string | null;
}

export declare type CardlegalityModel = LazyLoading extends LazyLoadingDisabled ? EagerCardlegalityModel : LazyCardlegalityModel

export declare const CardlegalityModel: (new (init: ModelInit<CardlegalityModel>) => CardlegalityModel)

type EagerCardpurchaseurlModel = {
  readonly cardkingdom?: string | null;
  readonly cardkingdometched?: string | null;
  readonly cardkingdomfoil?: string | null;
  readonly cardmarket?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly tcgplayer?: string | null;
  readonly tcgplayeretched?: string | null;
  readonly updatedAt: string;
  readonly uuid?: number | null;
}

type LazyCardpurchaseurlModel = {
  readonly cardkingdom?: string | null;
  readonly cardkingdometched?: string | null;
  readonly cardkingdomfoil?: string | null;
  readonly cardmarket?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly tcgplayer?: string | null;
  readonly tcgplayeretched?: string | null;
  readonly updatedAt: string;
  readonly uuid?: number | null;
}

export declare type CardpurchaseurlModel = LazyLoading extends LazyLoadingDisabled ? EagerCardpurchaseurlModel : LazyCardpurchaseurlModel

export declare const CardpurchaseurlModel: (new (init: ModelInit<CardpurchaseurlModel>) => CardpurchaseurlModel)

type EagerCardrulingModel = {
  readonly createdAt: string;
  readonly date?: string | null;
  readonly id: number;
  readonly text?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
}

type LazyCardrulingModel = {
  readonly createdAt: string;
  readonly date?: string | null;
  readonly id: number;
  readonly text?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
}

export declare type CardrulingModel = LazyLoading extends LazyLoadingDisabled ? EagerCardrulingModel : LazyCardrulingModel

export declare const CardrulingModel: (new (init: ModelInit<CardrulingModel>) => CardrulingModel)

type EagerCardsOwnedModel = {
  readonly addedOn?: string | null;
  readonly cardId: number;
  readonly condition?: CardCondition | keyof typeof CardCondition | null;
  readonly createdAt: string;
  readonly id: number;
  readonly isFoil?: boolean | null;
  readonly ownerId?: number | null;
  readonly soldOn?: string | null;
  readonly updatedAt: string;
}

type LazyCardsOwnedModel = {
  readonly addedOn?: string | null;
  readonly cardId: number;
  readonly condition?: CardCondition | keyof typeof CardCondition | null;
  readonly createdAt: string;
  readonly id: number;
  readonly isFoil?: boolean | null;
  readonly ownerId?: number | null;
  readonly soldOn?: string | null;
  readonly updatedAt: string;
}

export declare type CardsOwnedModel = LazyLoading extends LazyLoadingDisabled ? EagerCardsOwnedModel : LazyCardsOwnedModel

export declare const CardsOwnedModel: (new (init: ModelInit<CardsOwnedModel>) => CardsOwnedModel)

type EagerMetaModel = {
  readonly createdAt: string;
  readonly date?: string | null;
  readonly id: number;
  readonly updatedAt: string;
  readonly version?: string | null;
}

type LazyMetaModel = {
  readonly createdAt: string;
  readonly date?: string | null;
  readonly id: number;
  readonly updatedAt: string;
  readonly version?: string | null;
}

export declare type MetaModel = LazyLoading extends LazyLoadingDisabled ? EagerMetaModel : LazyMetaModel

export declare const MetaModel: (new (init: ModelInit<MetaModel>) => MetaModel)

type EagerModelCardConnectionModel = {
  readonly items: (Card | null)[];
  readonly nextToken?: string | null;
}

type LazyModelCardConnectionModel = {
  readonly items: (Card | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelCardConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelCardConnectionModel : LazyModelCardConnectionModel

export declare const ModelCardConnectionModel: (new (init: ModelInit<ModelCardConnectionModel>) => ModelCardConnectionModel)

type EagerModelCardforeigndatumConnectionModel = {
  readonly items: (Cardforeigndatum | null)[];
  readonly nextToken?: string | null;
}

type LazyModelCardforeigndatumConnectionModel = {
  readonly items: (Cardforeigndatum | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelCardforeigndatumConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelCardforeigndatumConnectionModel : LazyModelCardforeigndatumConnectionModel

export declare const ModelCardforeigndatumConnectionModel: (new (init: ModelInit<ModelCardforeigndatumConnectionModel>) => ModelCardforeigndatumConnectionModel)

type EagerModelCardidentifierConnectionModel = {
  readonly items: (Cardidentifier | null)[];
  readonly nextToken?: string | null;
}

type LazyModelCardidentifierConnectionModel = {
  readonly items: (Cardidentifier | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelCardidentifierConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelCardidentifierConnectionModel : LazyModelCardidentifierConnectionModel

export declare const ModelCardidentifierConnectionModel: (new (init: ModelInit<ModelCardidentifierConnectionModel>) => ModelCardidentifierConnectionModel)

type EagerModelCardlegalityConnectionModel = {
  readonly items: (Cardlegality | null)[];
  readonly nextToken?: string | null;
}

type LazyModelCardlegalityConnectionModel = {
  readonly items: (Cardlegality | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelCardlegalityConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelCardlegalityConnectionModel : LazyModelCardlegalityConnectionModel

export declare const ModelCardlegalityConnectionModel: (new (init: ModelInit<ModelCardlegalityConnectionModel>) => ModelCardlegalityConnectionModel)

type EagerModelCardpurchaseurlConnectionModel = {
  readonly items: (Cardpurchaseurl | null)[];
  readonly nextToken?: string | null;
}

type LazyModelCardpurchaseurlConnectionModel = {
  readonly items: (Cardpurchaseurl | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelCardpurchaseurlConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelCardpurchaseurlConnectionModel : LazyModelCardpurchaseurlConnectionModel

export declare const ModelCardpurchaseurlConnectionModel: (new (init: ModelInit<ModelCardpurchaseurlConnectionModel>) => ModelCardpurchaseurlConnectionModel)

type EagerModelCardrulingConnectionModel = {
  readonly items: (Cardruling | null)[];
  readonly nextToken?: string | null;
}

type LazyModelCardrulingConnectionModel = {
  readonly items: (Cardruling | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelCardrulingConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelCardrulingConnectionModel : LazyModelCardrulingConnectionModel

export declare const ModelCardrulingConnectionModel: (new (init: ModelInit<ModelCardrulingConnectionModel>) => ModelCardrulingConnectionModel)

type EagerModelCardsOwnedConnectionModel = {
  readonly items: (CardsOwned | null)[];
  readonly nextToken?: string | null;
}

type LazyModelCardsOwnedConnectionModel = {
  readonly items: (CardsOwned | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelCardsOwnedConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelCardsOwnedConnectionModel : LazyModelCardsOwnedConnectionModel

export declare const ModelCardsOwnedConnectionModel: (new (init: ModelInit<ModelCardsOwnedConnectionModel>) => ModelCardsOwnedConnectionModel)

type EagerModelMetaConnectionModel = {
  readonly items: (Meta | null)[];
  readonly nextToken?: string | null;
}

type LazyModelMetaConnectionModel = {
  readonly items: (Meta | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelMetaConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelMetaConnectionModel : LazyModelMetaConnectionModel

export declare const ModelMetaConnectionModel: (new (init: ModelInit<ModelMetaConnectionModel>) => ModelMetaConnectionModel)

type EagerModelOwnerConnectionModel = {
  readonly items: (Owner | null)[];
  readonly nextToken?: string | null;
}

type LazyModelOwnerConnectionModel = {
  readonly items: (Owner | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelOwnerConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelOwnerConnectionModel : LazyModelOwnerConnectionModel

export declare const ModelOwnerConnectionModel: (new (init: ModelInit<ModelOwnerConnectionModel>) => ModelOwnerConnectionModel)

type EagerModelSetConnectionModel = {
  readonly items: (Set | null)[];
  readonly nextToken?: string | null;
}

type LazyModelSetConnectionModel = {
  readonly items: (Set | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelSetConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelSetConnectionModel : LazyModelSetConnectionModel

export declare const ModelSetConnectionModel: (new (init: ModelInit<ModelSetConnectionModel>) => ModelSetConnectionModel)

type EagerModelSetboostercontentConnectionModel = {
  readonly items: (Setboostercontent | null)[];
  readonly nextToken?: string | null;
}

type LazyModelSetboostercontentConnectionModel = {
  readonly items: (Setboostercontent | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelSetboostercontentConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelSetboostercontentConnectionModel : LazyModelSetboostercontentConnectionModel

export declare const ModelSetboostercontentConnectionModel: (new (init: ModelInit<ModelSetboostercontentConnectionModel>) => ModelSetboostercontentConnectionModel)

type EagerModelSetboostercontentweightConnectionModel = {
  readonly items: (Setboostercontentweight | null)[];
  readonly nextToken?: string | null;
}

type LazyModelSetboostercontentweightConnectionModel = {
  readonly items: (Setboostercontentweight | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelSetboostercontentweightConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelSetboostercontentweightConnectionModel : LazyModelSetboostercontentweightConnectionModel

export declare const ModelSetboostercontentweightConnectionModel: (new (init: ModelInit<ModelSetboostercontentweightConnectionModel>) => ModelSetboostercontentweightConnectionModel)

type EagerModelSetboostersheetConnectionModel = {
  readonly items: (Setboostersheet | null)[];
  readonly nextToken?: string | null;
}

type LazyModelSetboostersheetConnectionModel = {
  readonly items: (Setboostersheet | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelSetboostersheetConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelSetboostersheetConnectionModel : LazyModelSetboostersheetConnectionModel

export declare const ModelSetboostersheetConnectionModel: (new (init: ModelInit<ModelSetboostersheetConnectionModel>) => ModelSetboostersheetConnectionModel)

type EagerModelSetboostersheetcardConnectionModel = {
  readonly items: (Setboostersheetcard | null)[];
  readonly nextToken?: string | null;
}

type LazyModelSetboostersheetcardConnectionModel = {
  readonly items: (Setboostersheetcard | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelSetboostersheetcardConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelSetboostersheetcardConnectionModel : LazyModelSetboostersheetcardConnectionModel

export declare const ModelSetboostersheetcardConnectionModel: (new (init: ModelInit<ModelSetboostersheetcardConnectionModel>) => ModelSetboostersheetcardConnectionModel)

type EagerModelSettranslationConnectionModel = {
  readonly items: (Settranslation | null)[];
  readonly nextToken?: string | null;
}

type LazyModelSettranslationConnectionModel = {
  readonly items: (Settranslation | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelSettranslationConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelSettranslationConnectionModel : LazyModelSettranslationConnectionModel

export declare const ModelSettranslationConnectionModel: (new (init: ModelInit<ModelSettranslationConnectionModel>) => ModelSettranslationConnectionModel)

type EagerModelTokenConnectionModel = {
  readonly items: (Token | null)[];
  readonly nextToken?: string | null;
}

type LazyModelTokenConnectionModel = {
  readonly items: (Token | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelTokenConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelTokenConnectionModel : LazyModelTokenConnectionModel

export declare const ModelTokenConnectionModel: (new (init: ModelInit<ModelTokenConnectionModel>) => ModelTokenConnectionModel)

type EagerModelTokenidentifierConnectionModel = {
  readonly items: (Tokenidentifier | null)[];
  readonly nextToken?: string | null;
}

type LazyModelTokenidentifierConnectionModel = {
  readonly items: (Tokenidentifier | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelTokenidentifierConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelTokenidentifierConnectionModel : LazyModelTokenidentifierConnectionModel

export declare const ModelTokenidentifierConnectionModel: (new (init: ModelInit<ModelTokenidentifierConnectionModel>) => ModelTokenidentifierConnectionModel)

type EagerOwnerModel = {
  readonly createdAt: string;
  readonly id: number;
  readonly name?: string | null;
  readonly updatedAt: string;
}

type LazyOwnerModel = {
  readonly createdAt: string;
  readonly id: number;
  readonly name?: string | null;
  readonly updatedAt: string;
}

export declare type OwnerModel = LazyLoading extends LazyLoadingDisabled ? EagerOwnerModel : LazyOwnerModel

export declare const OwnerModel: (new (init: ModelInit<OwnerModel>) => OwnerModel)

type EagerSetModel = {
  readonly basesetsize?: number | null;
  readonly block?: string | null;
  readonly cardspheresetid?: number | null;
  readonly code: string;
  readonly createdAt: string;
  readonly id: number;
  readonly isfoilonly?: boolean | null;
  readonly isforeignonly?: boolean | null;
  readonly isnonfoilonly?: boolean | null;
  readonly isonlineonly?: boolean | null;
  readonly ispartialpreview?: boolean | null;
  readonly keyrunecode?: string | null;
  readonly languages?: string | null;
  readonly mcmid?: number | null;
  readonly mcmidextras?: number | null;
  readonly mcmname?: string | null;
  readonly mtgocode?: string | null;
  readonly name?: string | null;
  readonly parentcode?: string | null;
  readonly releasedate?: string | null;
  readonly tcgplayergroupid?: number | null;
  readonly tokensetcode?: string | null;
  readonly totalsetsize?: number | null;
  readonly type?: string | null;
  readonly updatedAt: string;
}

type LazySetModel = {
  readonly basesetsize?: number | null;
  readonly block?: string | null;
  readonly cardspheresetid?: number | null;
  readonly code: string;
  readonly createdAt: string;
  readonly id: number;
  readonly isfoilonly?: boolean | null;
  readonly isforeignonly?: boolean | null;
  readonly isnonfoilonly?: boolean | null;
  readonly isonlineonly?: boolean | null;
  readonly ispartialpreview?: boolean | null;
  readonly keyrunecode?: string | null;
  readonly languages?: string | null;
  readonly mcmid?: number | null;
  readonly mcmidextras?: number | null;
  readonly mcmname?: string | null;
  readonly mtgocode?: string | null;
  readonly name?: string | null;
  readonly parentcode?: string | null;
  readonly releasedate?: string | null;
  readonly tcgplayergroupid?: number | null;
  readonly tokensetcode?: string | null;
  readonly totalsetsize?: number | null;
  readonly type?: string | null;
  readonly updatedAt: string;
}

export declare type SetModel = LazyLoading extends LazyLoadingDisabled ? EagerSetModel : LazySetModel

export declare const SetModel: (new (init: ModelInit<SetModel>) => SetModel)

type EagerSetboostercontentModel = {
  readonly boosterindex?: number | null;
  readonly boostername?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly setcode?: string | null;
  readonly sheetname?: string | null;
  readonly sheetpicks?: number | null;
  readonly updatedAt: string;
}

type LazySetboostercontentModel = {
  readonly boosterindex?: number | null;
  readonly boostername?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly setcode?: string | null;
  readonly sheetname?: string | null;
  readonly sheetpicks?: number | null;
  readonly updatedAt: string;
}

export declare type SetboostercontentModel = LazyLoading extends LazyLoadingDisabled ? EagerSetboostercontentModel : LazySetboostercontentModel

export declare const SetboostercontentModel: (new (init: ModelInit<SetboostercontentModel>) => SetboostercontentModel)

type EagerSetboostercontentweightModel = {
  readonly boosterindex?: number | null;
  readonly boostername?: string | null;
  readonly boosterweight?: number | null;
  readonly createdAt: string;
  readonly id: number;
  readonly setcode?: string | null;
  readonly updatedAt: string;
}

type LazySetboostercontentweightModel = {
  readonly boosterindex?: number | null;
  readonly boostername?: string | null;
  readonly boosterweight?: number | null;
  readonly createdAt: string;
  readonly id: number;
  readonly setcode?: string | null;
  readonly updatedAt: string;
}

export declare type SetboostercontentweightModel = LazyLoading extends LazyLoadingDisabled ? EagerSetboostercontentweightModel : LazySetboostercontentweightModel

export declare const SetboostercontentweightModel: (new (init: ModelInit<SetboostercontentweightModel>) => SetboostercontentweightModel)

type EagerSetboostersheetModel = {
  readonly boostername?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly setcode?: string | null;
  readonly sheethasbalancecolors?: boolean | null;
  readonly sheetisfoil?: boolean | null;
  readonly sheetname?: string | null;
  readonly updatedAt: string;
}

type LazySetboostersheetModel = {
  readonly boostername?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly setcode?: string | null;
  readonly sheethasbalancecolors?: boolean | null;
  readonly sheetisfoil?: boolean | null;
  readonly sheetname?: string | null;
  readonly updatedAt: string;
}

export declare type SetboostersheetModel = LazyLoading extends LazyLoadingDisabled ? EagerSetboostersheetModel : LazySetboostersheetModel

export declare const SetboostersheetModel: (new (init: ModelInit<SetboostersheetModel>) => SetboostersheetModel)

type EagerSetboostersheetcardModel = {
  readonly boostername?: string | null;
  readonly carduuid: number;
  readonly cardweight?: number | null;
  readonly createdAt: string;
  readonly id: number;
  readonly setcode?: string | null;
  readonly sheetname?: string | null;
  readonly updatedAt: string;
}

type LazySetboostersheetcardModel = {
  readonly boostername?: string | null;
  readonly carduuid: number;
  readonly cardweight?: number | null;
  readonly createdAt: string;
  readonly id: number;
  readonly setcode?: string | null;
  readonly sheetname?: string | null;
  readonly updatedAt: string;
}

export declare type SetboostersheetcardModel = LazyLoading extends LazyLoadingDisabled ? EagerSetboostersheetcardModel : LazySetboostersheetcardModel

export declare const SetboostersheetcardModel: (new (init: ModelInit<SetboostersheetcardModel>) => SetboostersheetcardModel)

type EagerSettranslationModel = {
  readonly createdAt: string;
  readonly id: number;
  readonly language?: string | null;
  readonly translation?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
}

type LazySettranslationModel = {
  readonly createdAt: string;
  readonly id: number;
  readonly language?: string | null;
  readonly translation?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
}

export declare type SettranslationModel = LazyLoading extends LazyLoadingDisabled ? EagerSettranslationModel : LazySettranslationModel

export declare const SettranslationModel: (new (init: ModelInit<SettranslationModel>) => SettranslationModel)

type EagerTokenModel = {
  readonly artist?: string | null;
  readonly artistids?: string | null;
  readonly asciiname?: string | null;
  readonly availability?: string | null;
  readonly boostertypes?: string | null;
  readonly bordercolor?: string | null;
  readonly coloridentity?: string | null;
  readonly colors?: string | null;
  readonly createdAt: string;
  readonly edhrecsaltiness?: number | null;
  readonly facename?: string | null;
  readonly finishes?: string | null;
  readonly flavortext?: string | null;
  readonly frameeffects?: string | null;
  readonly frameversion?: string | null;
  readonly hasfoil?: boolean | null;
  readonly hasnonfoil?: boolean | null;
  readonly id: number;
  readonly isfullart?: boolean | null;
  readonly isfunny?: boolean | null;
  readonly ispromo?: boolean | null;
  readonly isreprint?: boolean | null;
  readonly istextless?: boolean | null;
  readonly keywords?: string | null;
  readonly language?: string | null;
  readonly layout?: string | null;
  readonly manacost?: string | null;
  readonly name?: string | null;
  readonly number?: string | null;
  readonly orientation?: string | null;
  readonly originaltext?: string | null;
  readonly originaltype?: string | null;
  readonly otherfaceids?: string | null;
  readonly power?: string | null;
  readonly promotypes?: string | null;
  readonly relatedcards?: string | null;
  readonly reverserelated?: string | null;
  readonly securitystamp?: string | null;
  readonly setcode?: string | null;
  readonly side?: string | null;
  readonly signature?: string | null;
  readonly subtypes?: string | null;
  readonly supertypes?: string | null;
  readonly text?: string | null;
  readonly toughness?: string | null;
  readonly type?: string | null;
  readonly types?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
  readonly watermark?: string | null;
}

type LazyTokenModel = {
  readonly artist?: string | null;
  readonly artistids?: string | null;
  readonly asciiname?: string | null;
  readonly availability?: string | null;
  readonly boostertypes?: string | null;
  readonly bordercolor?: string | null;
  readonly coloridentity?: string | null;
  readonly colors?: string | null;
  readonly createdAt: string;
  readonly edhrecsaltiness?: number | null;
  readonly facename?: string | null;
  readonly finishes?: string | null;
  readonly flavortext?: string | null;
  readonly frameeffects?: string | null;
  readonly frameversion?: string | null;
  readonly hasfoil?: boolean | null;
  readonly hasnonfoil?: boolean | null;
  readonly id: number;
  readonly isfullart?: boolean | null;
  readonly isfunny?: boolean | null;
  readonly ispromo?: boolean | null;
  readonly isreprint?: boolean | null;
  readonly istextless?: boolean | null;
  readonly keywords?: string | null;
  readonly language?: string | null;
  readonly layout?: string | null;
  readonly manacost?: string | null;
  readonly name?: string | null;
  readonly number?: string | null;
  readonly orientation?: string | null;
  readonly originaltext?: string | null;
  readonly originaltype?: string | null;
  readonly otherfaceids?: string | null;
  readonly power?: string | null;
  readonly promotypes?: string | null;
  readonly relatedcards?: string | null;
  readonly reverserelated?: string | null;
  readonly securitystamp?: string | null;
  readonly setcode?: string | null;
  readonly side?: string | null;
  readonly signature?: string | null;
  readonly subtypes?: string | null;
  readonly supertypes?: string | null;
  readonly text?: string | null;
  readonly toughness?: string | null;
  readonly type?: string | null;
  readonly types?: string | null;
  readonly updatedAt: string;
  readonly uuid: number;
  readonly watermark?: string | null;
}

export declare type TokenModel = LazyLoading extends LazyLoadingDisabled ? EagerTokenModel : LazyTokenModel

export declare const TokenModel: (new (init: ModelInit<TokenModel>) => TokenModel)

type EagerTokenidentifierModel = {
  readonly cardkingdometchedid?: string | null;
  readonly cardkingdomfoilid?: string | null;
  readonly cardkingdomid?: string | null;
  readonly cardsphereid?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly mcmid?: string | null;
  readonly mcmmetaid?: string | null;
  readonly mtgarenaid?: string | null;
  readonly mtgjsonfoilversionid?: string | null;
  readonly mtgjsonnonfoilversionid?: string | null;
  readonly mtgjsonv4id?: string | null;
  readonly mtgofoilid?: string | null;
  readonly mtgoid?: string | null;
  readonly multiverseid?: string | null;
  readonly scryfallid?: string | null;
  readonly scryfallillustrationid?: string | null;
  readonly scryfalloracleid?: string | null;
  readonly tcgplayeretchedproductid?: string | null;
  readonly tcgplayerproductid?: string | null;
  readonly updatedAt: string;
  readonly uuid?: number | null;
}

type LazyTokenidentifierModel = {
  readonly cardkingdometchedid?: string | null;
  readonly cardkingdomfoilid?: string | null;
  readonly cardkingdomid?: string | null;
  readonly cardsphereid?: string | null;
  readonly createdAt: string;
  readonly id: number;
  readonly mcmid?: string | null;
  readonly mcmmetaid?: string | null;
  readonly mtgarenaid?: string | null;
  readonly mtgjsonfoilversionid?: string | null;
  readonly mtgjsonnonfoilversionid?: string | null;
  readonly mtgjsonv4id?: string | null;
  readonly mtgofoilid?: string | null;
  readonly mtgoid?: string | null;
  readonly multiverseid?: string | null;
  readonly scryfallid?: string | null;
  readonly scryfallillustrationid?: string | null;
  readonly scryfalloracleid?: string | null;
  readonly tcgplayeretchedproductid?: string | null;
  readonly tcgplayerproductid?: string | null;
  readonly updatedAt: string;
  readonly uuid?: number | null;
}

export declare type TokenidentifierModel = LazyLoading extends LazyLoadingDisabled ? EagerTokenidentifierModel : LazyTokenidentifierModel

export declare const TokenidentifierModel: (new (init: ModelInit<TokenidentifierModel>) => TokenidentifierModel)

const { Card, Cardforeigndatum, Cardidentifier, Cardlegality, Cardpurchaseurl, Cardruling, CardsOwned, Meta, ModelCardConnection, ModelCardforeigndatumConnection, ModelCardidentifierConnection, ModelCardlegalityConnection, ModelCardpurchaseurlConnection, ModelCardrulingConnection, ModelCardsOwnedConnection, ModelMetaConnection, ModelOwnerConnection, ModelSetConnection, ModelSetboostercontentConnection, ModelSetboostercontentweightConnection, ModelSetboostersheetConnection, ModelSetboostersheetcardConnection, ModelSettranslationConnection, ModelTokenConnection, ModelTokenidentifierConnection, Owner, Set, Setboostercontent, Setboostercontentweight, Setboostersheet, Setboostersheetcard, Settranslation, Token, Tokenidentifier } = initSchema(schema) as {
  Card: PersistentModelConstructor<CardModel>;
  Cardforeigndatum: PersistentModelConstructor<CardforeigndatumModel>;
  Cardidentifier: PersistentModelConstructor<CardidentifierModel>;
  Cardlegality: PersistentModelConstructor<CardlegalityModel>;
  Cardpurchaseurl: PersistentModelConstructor<CardpurchaseurlModel>;
  Cardruling: PersistentModelConstructor<CardrulingModel>;
  CardsOwned: PersistentModelConstructor<CardsOwnedModel>;
  Meta: PersistentModelConstructor<MetaModel>;
  ModelCardConnection: PersistentModelConstructor<ModelCardConnectionModel>;
  ModelCardforeigndatumConnection: PersistentModelConstructor<ModelCardforeigndatumConnectionModel>;
  ModelCardidentifierConnection: PersistentModelConstructor<ModelCardidentifierConnectionModel>;
  ModelCardlegalityConnection: PersistentModelConstructor<ModelCardlegalityConnectionModel>;
  ModelCardpurchaseurlConnection: PersistentModelConstructor<ModelCardpurchaseurlConnectionModel>;
  ModelCardrulingConnection: PersistentModelConstructor<ModelCardrulingConnectionModel>;
  ModelCardsOwnedConnection: PersistentModelConstructor<ModelCardsOwnedConnectionModel>;
  ModelMetaConnection: PersistentModelConstructor<ModelMetaConnectionModel>;
  ModelOwnerConnection: PersistentModelConstructor<ModelOwnerConnectionModel>;
  ModelSetConnection: PersistentModelConstructor<ModelSetConnectionModel>;
  ModelSetboostercontentConnection: PersistentModelConstructor<ModelSetboostercontentConnectionModel>;
  ModelSetboostercontentweightConnection: PersistentModelConstructor<ModelSetboostercontentweightConnectionModel>;
  ModelSetboostersheetConnection: PersistentModelConstructor<ModelSetboostersheetConnectionModel>;
  ModelSetboostersheetcardConnection: PersistentModelConstructor<ModelSetboostersheetcardConnectionModel>;
  ModelSettranslationConnection: PersistentModelConstructor<ModelSettranslationConnectionModel>;
  ModelTokenConnection: PersistentModelConstructor<ModelTokenConnectionModel>;
  ModelTokenidentifierConnection: PersistentModelConstructor<ModelTokenidentifierConnectionModel>;
  Owner: PersistentModelConstructor<OwnerModel>;
  Set: PersistentModelConstructor<SetModel>;
  Setboostercontent: PersistentModelConstructor<SetboostercontentModel>;
  Setboostercontentweight: PersistentModelConstructor<SetboostercontentweightModel>;
  Setboostersheet: PersistentModelConstructor<SetboostersheetModel>;
  Setboostersheetcard: PersistentModelConstructor<SetboostersheetcardModel>;
  Settranslation: PersistentModelConstructor<SettranslationModel>;
  Token: PersistentModelConstructor<TokenModel>;
  Tokenidentifier: PersistentModelConstructor<TokenidentifierModel>;
};

export {
  
};