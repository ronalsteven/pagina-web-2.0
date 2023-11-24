// Navbar/Navbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar with correct links', () => {
    render(<Navbar />);
    const homeLink = screen.getByText(/Inicio/i);
    const productsLink = screen.getByText(/Productos/i);
    const servicesLink = screen.getByText(/Servicios/i);
    const contactLink = screen.getByText(/Contacto/i);

    expect(homeLink).toBeInTheDocument();
    expect(productsLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
});
