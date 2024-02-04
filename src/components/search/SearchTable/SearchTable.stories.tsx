import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchTable from './index';
import { mockCardsWithIdentifier } from '@/mock/cards';

const click = action('onSelectCard');

const meta: Meta<typeof SearchTable> = {
  title: 'SearchTable',
  component: SearchTable,
  render: (args) => {
    return (
      <div style={{ margin: '50px' }}>
        <SearchTable {...args} onSelectCard={(card) => click(card)} />
      </div>
    );
  }
};

export default meta;

type Story = StoryObj<typeof SearchTable>;

export const Primary: Story = {
  args: {
    matchingCards: mockCardsWithIdentifier,
  }
};
