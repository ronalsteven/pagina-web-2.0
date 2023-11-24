// App.js
import './App.css';
import Logo from './componentes/Logo/Logo';
import Navbar from './componentes/Navbar/Navbar';
import Carousel from './componentes/Carousel/Carousel'; // Importa el componente Carousel

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Logo />
        <Navbar />
      </header>
      <Carousel /> 
    </div>
  );
}

export default App;
