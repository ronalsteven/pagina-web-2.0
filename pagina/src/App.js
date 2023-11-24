// App.js
import './App.css';
import Logo from './componentes/Logo/Logo';
import Navbar from './componentes/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Logo />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
