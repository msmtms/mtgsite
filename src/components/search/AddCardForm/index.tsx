import React, { useState } from 'react';
import { CardCondition, CurrentCardData } from '@/types/cards';
import { useStyles } from './AddCardForm.styles';
import { Button, MenuItem, Select } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export type AddCardFormProps = {
  onAddCard: (card: CurrentCardData, condition: CardCondition) => void;
  card?: CurrentCardData;
};

export default function AddCardForm(props: AddCardFormProps) {
  const [selectedCondition, setSelectedCondition] = useState(CardCondition.NEAR_MINT);
  const classes = useStyles();

  return props.card && (
    <div className={classes.addCardFormWrapper}>
      <LazyLoadImage
        effect={'blur'}
        width={350}
        height={475}
        src={props.card?.scryfallCard?.image_uris?.png}
        alt={'card image'}
      />
      <div className={classes.addCardForm}>
        <div className={classes.addCardName}>
          {props.card?.scryfallCard.name}
        </div>
        <div className={classes.addCardPricesWrapper}>
          <div className={classes.addCardPrice}>
            <div>Standard:</div>
            <div>${props.card?.scryfallCard.prices?.usd}</div>
          </div>
          <div className={classes.addCardPrice}>
            <div>Foil:</div>
            <div>${props.card?.scryfallCard.prices?.usd_foil}</div>
          </div>
        </div>
        <Select
          variant={'outlined'}
          value={selectedCondition}
          onChange={(e: any) => setSelectedCondition(e.target.value)}
          className={classes.addCardConditionSelect}
          size={'small'}
        >
          <MenuItem value={CardCondition.NEAR_MINT}>Near Mint</MenuItem>
          <MenuItem value={CardCondition.LIGHTLY_PLAYED}>Lightly Played</MenuItem>
          <MenuItem value={CardCondition.MODERATELY_PLAYED}>Moderately Played</MenuItem>
          <MenuItem value={CardCondition.HEAVILY_PLAYED}>Heavily Played</MenuItem>
          <MenuItem value={CardCondition.DAMAGED}>Damaged</MenuItem>
        </Select>
        <Button
          className={classes.addCardConditionButton}
          variant={'contained'}
          color={'primary'}
          onClick={() => props.card && props.onAddCard(props.card, selectedCondition)}
        >
          Add Card
        </Button>
      </div>
    </div>
  );
}
