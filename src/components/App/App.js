// import logo from './logo.svg';
import './App.css';
import movieData from '../MovieData/MovieData';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { getMovies } from '../../ApiCalls';
import {useState, useEffect} from 'react';

function App() {
  const [movies, setMovies] = useState([])
  //popup
  const [showMovieDetail, setShowMovieDetail] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})

  useEffect(() => {
    getMovies()
    .then(data => setMovies(data.movies))
    .catch(error => console.log('error', error))
  }, [])
 
  function clickHandler(event){
    showMovie(event)
    setShowMovieDetail(true)
  }

  function showMovie(event) {
    event.preventDefault()
    movies.forEach(movie => {
      if(parseInt(event.target.id) === movie.id){
        setSelectedMovie(movie)
      }
    })
  }

  function exitShowMovie(){
    setShowMovieDetail(false)
  }

return (
  //use fragment instead of Div ?
  <div>
    <h1>Rancid Tomatillos</h1>
    <section className='all-movies-display'>
      {!showMovieDetail && <MovieContainer showMovieDetail= {showMovieDetail} clickHandler= {clickHandler} showMovie= {showMovie} movies = {movies} exitShowMovie= {exitShowMovie} selectedMovie = {selectedMovie}/>}
      {showMovieDetail && <MovieDetails  exitShowMovie = {exitShowMovie} showMovieDetail = {showMovieDetail} selectedMovie = {selectedMovie}/>}
    </section>
  </div>
)
}

export default App;
