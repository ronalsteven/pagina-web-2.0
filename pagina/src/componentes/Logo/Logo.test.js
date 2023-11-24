// Logo/Logo.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('renders logo', () => {
    render(<Logo />);
    const logoElement = screen.getByAltText(/Logo/i);
    expect(logoElement).toBeInTheDocument();
});
