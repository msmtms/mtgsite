import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Card as GQLCardType } from '@/types/cards';
import ManaCost from '@/components/ManaCost';

export type SearchTableProps = {
  matchingCards: GQLCardType[];
  onSelectCard: (card: GQLCardType) => void;
};

export default function SearchTable(props: SearchTableProps) {
  return (
    <Table size={'small'}>
      <TableHead>
        <TableRow>
          <TableCell align={'left'}>Name</TableCell>
          <TableCell align={'left'}>Mana Cost</TableCell>
          <TableCell align={'left'}>Rarity</TableCell>
          <TableCell align={'left'}>Power</TableCell>
          <TableCell align={'left'}>Toughness</TableCell>
          <TableCell align={'left'}>Type</TableCell>
          <TableCell align={'left'}>Set</TableCell>
          <TableCell align={'left'}>ID Number</TableCell>
        </TableRow>
      </TableHead>
      {props.matchingCards && props.matchingCards.map((card) => (
        <TableBody key={card.uuid}>
          <TableRow hover onClick={() => props.onSelectCard(card)}>
            <TableCell align={'left'}>{card.name}</TableCell>
            <TableCell align={'left'}><ManaCost manaCost={card.manaCost || ''} /></TableCell>
            <TableCell align={'left'}>{card.rarity}</TableCell>
            <TableCell align={'left'}>{card.power}</TableCell>
            <TableCell align={'left'}>{card.toughness}</TableCell>
            <TableCell align={'left'}>{card.type}</TableCell>
            <TableCell align={'left'}>{card.setCode}</TableCell>
            <TableCell align={'left'}>{card.number}</TableCell>
          </TableRow>
        </TableBody>
      ))}
    </Table>
  );
}
