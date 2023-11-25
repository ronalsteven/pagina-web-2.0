// Footer.test.js
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with copyright', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/© 2023 Clean Pets. Todos los derechos reservados./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders footer with email', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/info@cleanpets.com/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders footer with phone number', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/\+57 123 456 7890/i);
  expect(linkElement).toBeInTheDocument();
});
