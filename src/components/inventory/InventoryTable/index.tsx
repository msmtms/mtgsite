import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { InventoryCard } from '@/types/cards';

export type InventoryTableProps = {
  cards: InventoryCard[];
};

export default function InventoryTable(props: InventoryTableProps) {
  return (
    <Table size={'small'}>
      <TableHead>
        <TableRow>
          <TableCell align={'left'}>Name</TableCell>
          <TableCell align={'left'}>Rarity</TableCell>
          <TableCell align={'left'}>Type</TableCell>
          <TableCell align={'left'}>Set</TableCell>
          <TableCell align={'left'}>ID Number</TableCell>
          <TableCell align={'left'}>Condition</TableCell>
          <TableCell align={'left'}>Added On</TableCell>
        </TableRow>
      </TableHead>
      {props.cards && props.cards.map((card) => (
        <TableBody key={card.id}>
          <TableRow hover>
            <TableCell align={'left'}>{card.cards.name}</TableCell>
            <TableCell align={'left'}>{card.cards.rarity}</TableCell>
            <TableCell align={'left'}>{card.cards.type}</TableCell>
            <TableCell align={'left'}>{card.cards.setcode}</TableCell>
            <TableCell align={'left'}>{card.cards.number}</TableCell>
            <TableCell align={'left'}>{card.condition}</TableCell>
            <TableCell align={'left'}>{(new Date(card.added_on)).toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
      ))}
    </Table>
  );
}
