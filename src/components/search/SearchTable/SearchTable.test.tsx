import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchTable from './index';
import { mockCardsWithIdentifier } from '@/mock/cards';

const noop = () => undefined;

describe('<SearchTable/>', () => {
  it('should render', () => {
    render(<SearchTable matchingCards={mockCardsWithIdentifier} onSelectCard={noop}/>);
    expect(screen.getByText(mockCardsWithIdentifier[0].name as string)).toBeInTheDocument();
  });
});
