import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header>  </Header>
        <MoviesGrid></MoviesGrid>
      </div>

      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Moviedux</h1>
      </header>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
