// StylishDogs.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import StylishDogs from './StylishDogs';

test('renders stylish dogs with images and titles', () => {
    render(<StylishDogs />);
    const imageElement = screen.getByAltText(/Perro estiludo/i);
    const titleElement = screen.getByRole('heading', { name: /Perros Estiludos®/i });
    const subtitleElement = screen.getByText(/La personalidad de tu perro derrite a todo el mundo, ¡que su look también lo haga!/i);
    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
});
