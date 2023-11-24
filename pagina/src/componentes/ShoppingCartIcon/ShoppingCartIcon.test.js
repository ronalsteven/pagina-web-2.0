// ShoppingCartIcon.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCartIcon from './ShoppingCartIcon';

test('renders shopping cart icon', () => {
    render(<ShoppingCartIcon />);
    const iconElement = screen.getByAltText(/Carrito de compras/i);
    expect(iconElement).toBeInTheDocument();
});
