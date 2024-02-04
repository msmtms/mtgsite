import React from 'react';
import { fetchInventory } from '../../fetch/db/cards';
import { InventoryCard } from '@/types/cards';
import InventoryTable from '@/components/inventory/InventoryTable';

export type InventoryProps = {
  cards: InventoryCard[];
};

export default function Inventory(props: InventoryProps) {
  return (
    <div style={{ margin: '200px'}}>
      <InventoryTable cards={props.cards}/>
    </div>
  );
}

export async function getServerSideProps() {
  const cards = JSON.parse(JSON.stringify(await fetchInventory()));
  return {
    props: {
      cards
    }
  };
}
