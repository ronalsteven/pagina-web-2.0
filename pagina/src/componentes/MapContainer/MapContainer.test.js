// MapContainer.test.js
import { render, screen } from '@testing-library/react';
import MapContainer from './MapContainer';

test('renders MapContainer and checks if map is displayed', () => {
  render(<MapContainer />);
  
  // Asegúrate de que tu componente MapContainer renderiza un elemento con un test id específico
  const mapElement = screen.getByTestId('google-map');
  
  expect(mapElement).toBeInTheDocument();
});
