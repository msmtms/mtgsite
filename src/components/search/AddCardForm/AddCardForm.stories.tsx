import type { Meta, StoryObj } from '@storybook/react';
import AddCardForm from './index';
import { mockCurrentCardDataList } from '@/mock/cards';
import { CurrentCardData } from '@/types/cards';

const meta: Meta<typeof AddCardForm> = {
  title: 'AddCardForm',
  component: AddCardForm,
  render: (args) => {
    return (
      <div style={{ margin: '50px' }}>
        <AddCardForm {...args}/>
      </div>
    );
  }
};

export default meta;

type Story = StoryObj<typeof AddCardForm>;

export const Primary: Story = {
  args: {
    card: mockCurrentCardDataList[0] as CurrentCardData,
  }
};
