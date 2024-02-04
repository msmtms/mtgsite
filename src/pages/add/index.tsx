import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { fetchCards, addCard } from '../../fetch/api';
import { useDebounce } from 'usehooks-ts';
import { getCardByScryfallId } from '../../fetch/mtg/get';
import { CardCondition, CardWithIdentifier, CurrentCardData } from '@/types/cards';
import SearchTable from '@/components/search/SearchTable';
import AddCardForm from '@/components/search/AddCardForm';

export type AddProps = {

};

export default function Add(props: AddProps) {
  const [searchInput, setSearchInput] = useState('');
  const [matchingCards, setMatchingCards] = useState<CardWithIdentifier[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardWithIdentifier>();
  const [selectedCardCurrentData, setSelectedCardCurrentData] = useState<CurrentCardData>();
  const debouncedSearch = useDebounce(searchInput, 500);

  useEffect(() => {
    if (debouncedSearch) {
      fetchCards(debouncedSearch).then((cards: CardWithIdentifier[]) => setMatchingCards(cards));
    }
  }, [debouncedSearch]);

  const handleAddCard = (card: CurrentCardData, condition: CardCondition) => {
    addCard(card.card, condition).then(() => console.log('added card'));
  }

  useEffect(() => {
    if (selectedCard?.cardidentifiers?.scryfallid) {
      getCardByScryfallId(selectedCard.cardidentifiers.scryfallid)
        .then((card) => {
          if(card && selectedCard) {
            setSelectedCardCurrentData({
              scryfallCard: card,
              card: selectedCard
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
      <div style={{ margin: '50px' }}>
        <SearchTable matchingCards={matchingCards} onSelectCard={(card) => setSelectedCard(card)}/>
      </div>
      <div>
        <AddCardForm card={selectedCardCurrentData} onAddCard={handleAddCard} />
      </div>
    </div>
  );
}
