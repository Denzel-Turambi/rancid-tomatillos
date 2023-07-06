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
    <h1>{movies[0]['movie'].title}</h1>
    {/* <img src='https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg'></img> */}
    <MovieContainer />
    
  </div>
)
}

export default App;
