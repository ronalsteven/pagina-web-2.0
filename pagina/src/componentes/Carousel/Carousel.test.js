// src/componentes/Carousel/Carousel.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

test('renders Carousel with images', () => {
    render(<Carousel />);
    const carouselImages = screen.getAllByRole('img');
    expect(carouselImages.length).toBe(3); // Asegúrate de que este número coincida con la cantidad de imágenes en tu carrusel
});
