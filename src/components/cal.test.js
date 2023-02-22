import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('renders Calculator component', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: 'x' }));
    fireEvent.click(screen.getByRole('button', { name: '6' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(screen.getByText('30')).toBeTruthy();
  });
});
