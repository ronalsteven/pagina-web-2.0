import { render, screen } from '@testing-library/react';
import MapContainer from './MapContainer';

test('renders MapContainer and checks if map is displayed', () => {
  // Renderiza el componente MapContainer
  render(<MapContainer />);
  
  // Asegúrate de que tu componente MapContainer renderiza un elemento con un test id específico
  const mapElement = screen.getByTestId('google-map');
  
  // Comprueba si el elemento del mapa está en el documento
  expect(mapElement).toBeInTheDocument();

  // Comprueba si el elemento del mapa tiene la clase CSS correcta
  expect(mapElement).toHaveClass('google-map');

  // Comprueba si el elemento del mapa tiene los estilos CSS correctos
  const styles = window.getComputedStyle(mapElement);
  expect(styles.width).toBe('100%');
  expect(styles.height).toBe('400px');
});
