// FeaturedItems.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedItems from './FeaturedItems';

test('renders featured items with images and titles', () => {
    render(<FeaturedItems />);
    const imageElements = screen.getAllByRole('img');
    const titleElements = screen.getAllByRole('heading');
    expect(imageElements.length).toBe(3); // Asegúrate de que este número coincida con la cantidad de imágenes en tus elementos destacados
    expect(titleElements.length).toBe(3); // Asegúrate de que este número coincida con la cantidad de títulos en tus elementos destacados
});
