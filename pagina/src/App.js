// App.js
import './App.css';
import Logo from './componentes/Logo/Logo';
import Navbar from './componentes/Navbar/Navbar';
import Carousel from './componentes/Carousel/Carousel';
import ShoppingCartIcon from './componentes/ShoppingCartIcon/ShoppingCartIcon';
import FeaturedItems from './componentes/FeaturedItems/FeaturedItems'; // Importa el componente FeaturedItems

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
    </div>
  );
}

export default App;
