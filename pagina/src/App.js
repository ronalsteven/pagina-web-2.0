// App.js
import './App.css';
import Logo from './componentes/Logo/Logo';
import Navbar from './componentes/Navbar/Navbar';
import Carousel from './componentes/Carousel/Carousel';
import FeaturedItems from './componentes/FeaturedItems/FeaturedItems';
import StylishDogs from './componentes/StylishDogs/StylishDogs'; // Importa el componente StylishDogs
import StylishCats from './componentes/StylishCats/StylishCats'; // Importa el componente StylishCats
import Footer from './componentes/Footer/Footer'; // Importa el componente Footer

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Logo />
        <Navbar />
      </header>
      <Carousel />
      <FeaturedItems />
      <StylishDogs /> 
      <StylishCats /> 
      <Footer />
    </div>
  );
}

export default App;
