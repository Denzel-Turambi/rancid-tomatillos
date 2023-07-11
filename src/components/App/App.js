// import logo from './logo.svg';
import './App.css';
// import movieData from '../MovieData/MovieData';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { getMovies, getSingleMovie } from '../../ApiCalls';
import {useState, useEffect} from 'react';

function App() {
  const [movies, setMovies] = useState([])
  //popup
  const [showMovieDetail, setShowMovieDetail] = useState(false)
  const [movieID, setMovieID] = useState("")
  // const [error, setError] = useState("")

  useEffect(() => {
    getMovies()
    .then(data => setMovies(data.movies))
    .catch(error => console.log('error', error))
  }, [])


function clickHandler(event){
  console.log('CLICK HANDLER', event.target.id)
  setMovieID(parseInt(event.target.id))
  setShowMovieDetail(true)
  }

  function exitShowMovie(){
    setShowMovieDetail(false)
  }

return (
  //use fragment instead of Div ?
  <div>
    <h1>Rancid Tomatillos</h1>
    <section className='all-movies-display'>
      {!showMovieDetail && <MovieContainer clickHandler= {clickHandler}  movies = {movies} exitShowMovie= {exitShowMovie}/>}
      {showMovieDetail && <MovieDetails  exitShowMovie = {exitShowMovie}  selectedMovieID={movieID} />}
    </section>
  </div>
)
}

export default App;

