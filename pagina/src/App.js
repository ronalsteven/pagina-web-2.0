// App.js
import './App.css';
import Logo from './componentes/Logo/Logo';
import Navbar from './componentes/Navbar/Navbar';
import Carousel from './componentes/Carousel/Carousel';
import ShoppingCartIcon from './componentes/ShoppingCartIcon/ShoppingCartIcon';
import FeaturedItems from './componentes/FeaturedItems/FeaturedItems';
import StylishDogs from './componentes/StylishDogs/StylishDogs'; // Importa el componente StylishDogs

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Logo />
        <Navbar />
        <ShoppingCartIcon />
      </header>
      <Carousel />
      <FeaturedItems />
      <StylishDogs /> 
    </div>
  );
}

export default App;
