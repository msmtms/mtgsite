import React from 'react';
import { getManaCost } from '../../utils/cards';
import ManaSymbol from '@/components/ManaCost/ManaSymbol';
import { useStyles } from './ManaCost.styles';

export type ManaCostProps = {
  manaCost: string;
};

export default function ManaCost(props: ManaCostProps) {
  const classes = useStyles();
  return (
    <div className={classes.manaCostWrapper}>
      {getManaCost(props.manaCost)?.map((manaSymbol, index) => (
        <ManaSymbol key={`mana-symbol-${index}`} manaSymbol={manaSymbol} />
      ))}
    </div>
  );
}
