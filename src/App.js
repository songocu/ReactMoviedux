import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setMouvies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect ( () => {
      fetch("movies.json") 
      .then(response => response.json())
      .then(data => setMouvies(data));
  }, []);

  const toogleWatchlist = (movieId) => {
    setWatchlist( prev =>
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev, movieId]
    )
  }

  return (
    <div className="App">
      <div className="container">
        <Header>  </Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<MoviesGrid movies={movies} watchlist={watchlist} toogleWatchlist={toogleWatchlist}/>}></Route>
            <Route path='/watchlist' element={<Watchlist movies={movies} watchlist={watchlist} toogleWatchlist={toogleWatchlist}/>}></Route>
          </Routes>

        </Router>
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
