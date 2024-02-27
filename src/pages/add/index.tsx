import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { addCard, searchCardsByName } from '@/fetch/api';
import { useDebounceValue } from 'usehooks-ts';
import { getCardByScryfallId } from '@/fetch/mtg/get';
import { CurrentCardData, Card as GQLCardType, CardCondition } from '@/types/cards';
import SearchTable from '@/components/search/SearchTable';
import AddCardForm from '@/components/search/AddCardForm';
import { withAuthenticator, AuthenticatorProps } from '@aws-amplify/ui-react';

export type AddProps = AuthenticatorProps & {

};

function Add(props: AddProps) {
  const [searchInput, setSearchInput] = useState('');
  const [matchingCards, setMatchingCards] = useState<GQLCardType[]>([]);
  const [selectedCard, setSelectedCard] = useState<GQLCardType>();
  const [selectedCardCurrentData, setSelectedCardCurrentData] = useState<CurrentCardData>();
  const [debouncedSearch] = useDebounceValue(searchInput, 500);

  useEffect(() => {
    if (debouncedSearch) {
      searchCardsByName(debouncedSearch).then((cards: GQLCardType[]) => setMatchingCards(cards));
    }
  }, [debouncedSearch]);

  const handleAddCard = (card: GQLCardType, condition: CardCondition) => {
    card && addCard(card, condition)
      .then(() => console.log('added card'));
  }

  useEffect(() => {
    if (selectedCard?.identifier?.scryfallId) {
      getCardByScryfallId(selectedCard.identifier.scryfallId)
        .then((card) => {
          if(card && selectedCard) {
            setSelectedCardCurrentData({
              scryfallCard: card,
              gqlCard: selectedCard
            });
          }
        });
    }
  }, [selectedCard]);

  return (
    <div>
      <div style={{ margin: '50px' }}>
        <TextField
          variant={'outlined'}
          size={'small'}
          value={searchInput}
          placeholder={'Search for a card'}
          onChange={(e: any) => setSearchInput(e.target.value)}
        />
      </div>
      {/* <button onClick={() => handleAddCard()}>Add Card</button> */}
      <div style={{ margin: '50px' }}>
        <SearchTable matchingCards={matchingCards} onSelectCard={(card) => setSelectedCard(card)}/>
      </div>
      <div>
        <AddCardForm card={selectedCardCurrentData} onAddCard={handleAddCard} />
      </div>
    </div>
  );
}

export default withAuthenticator(Add, { socialProviders: ['google'] });
