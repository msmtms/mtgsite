import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import AddCardForm from './index';
import { mockCurrentCardDataList } from '@/mock/cards';

const noop = () => undefined;

describe('<AddCardForm/>', () => {
  it('should render', () => {
    render(<AddCardForm card={mockCurrentCardDataList[0]} onAddCard={noop}/>);
    expect(screen.getByText(`${mockCurrentCardDataList[0].scryfallCard.name}`)).toBeInTheDocument();
  });
  it('should show card price data', () => {
    render(<AddCardForm card={mockCurrentCardDataList[0]} onAddCard={noop}/>);
    expect(screen.getByText(`${mockCurrentCardDataList[0].scryfallCard.prices?.usd}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockCurrentCardDataList[0].scryfallCard.prices?.usd_foil}`)).toBeInTheDocument();
  });
  it('should show condition select', () => {
    render(<AddCardForm card={mockCurrentCardDataList[0]} onAddCard={noop}/>);
    expect(screen.getByText('Near Mint')).toBeInTheDocument();
  });
  it('should fire callback when add card button is clicked', async () => {
    const callback = jest.fn();
    render(<AddCardForm card={mockCurrentCardDataList[0]} onAddCard={callback}/>);
    await userEvent.click(screen.getByText('Add Card'));
    expect(callback).toHaveBeenCalled();
  });
});
