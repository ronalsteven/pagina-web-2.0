// Footer.test.js
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test('renders footer with copyright', () => {
    const linkElement = screen.getByText(/© 2023 Clean Pets. Todos los derechos reservados./i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders footer with email', () => {
    const linkElement = screen.getByText(/info@cleanpets.com/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders footer with phone number', () => {
    const linkElement = screen.getByText(/\+57 123 456 7890/i);
    expect(linkElement).toBeInTheDocument();
  });
});
