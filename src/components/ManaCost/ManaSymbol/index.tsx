import React from 'react';
import Image from 'next/image';
import { ManaSymbolType } from '@/types/cards';
import { useStyles } from './ManaSymbol.styles';

export type ManaSymbolProps = {
  manaSymbol: ManaSymbolType;
};

export default function ManaSymbol(props: ManaSymbolProps) {
  const classes = useStyles();
  return (
    <>
      {props.manaSymbol.type === 'standard' && (
        <Image
          alt={'mana symbol'}
          src={props.manaSymbol.value}
          width={20}
          height={20}
        />
      )}
      {props.manaSymbol.type === 'colorless' && (
        <div className={classes.colorlessManaSymbol}>
          {props.manaSymbol.value}
        </div>
      )}
    </>
  );
}
