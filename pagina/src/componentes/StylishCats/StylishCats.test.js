// StylishCats.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import StylishCats from './StylishCats';

test('renders StylishCats component', () => {
  render(<StylishCats />);
  const linkElement = screen.getByText(/Gatos Estiludos®/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders image', () => {
  render(<StylishCats />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'gato1.webp');
  expect(img).toHaveAttribute('alt', 'Gato estiludo');
});
