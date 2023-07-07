// import logo from './logo.svg';
import './App.css';
import movieData from '../MovieData/MovieData';
import MovieContainer from '../MovieContainer/MovieContainer';
import Card from '../Card/Card';
import {useState} from 'react';

function App() {
  const [movies, setMovies] = useState(movieData)

return (
  //use fragment instead of Div ?
  <div>
    <h1>Rancid Tomatillos</h1>
    <MovieContainer movies = {movies}/>
  </div>
)
}

export default App;
