import React from 'react';
import { render, screen } from '@testing-library/react';
import ManaCost from './index';
import { mockManaCost } from '@/mock/cards';

describe('<ManaCost/>', () => {
  it('should render', async () => {
    render(<ManaCost manaCost={mockManaCost}/>);
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });
});
