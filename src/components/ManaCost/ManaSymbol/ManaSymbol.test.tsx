import React from 'react';
import { render, screen } from '@testing-library/react';
import ManaSymbol from './index';

describe('<ManaSymbol/>', () => {
  it('should render', () => {
    render(<ManaSymbol manaSymbol={{ type: 'standard', value: 'W' }} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
