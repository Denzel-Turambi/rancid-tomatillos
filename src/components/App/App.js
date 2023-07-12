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
  const [error, setError] = useState("")
  const [allMoviesLoading, setAllMoviesLoading] = useState(false)

  useEffect(() => {
    setAllMoviesLoading(true)
    getMovies()
    .then(data => setMovies(data.movies))
    .catch(error => {
      if(error.status === 500) {
        setError('Oops! Looks like there is a server error.')
      } else {
        setError(error)
      }
    })
    .finally(() => {
      setAllMoviesLoading(false)
    })
  }, [])



function clickHandler(event){
  console.log('CLICK HANDLER', event.target.id)
  setMovieID(parseInt(event.target.id))
  setShowMovieDetail(true)
  }

  function exitShowMovie(){
    setShowMovieDetail(false)
  }

if(error){
  return(<h1>{"An error occurred while fetching movies."}</h1>)
} else if(allMoviesLoading) {
  return(<h1>Loading...</h1>)
}

return (
  //use fragment instead of Div ?
  <div>
    <nav>
      <h1>Rancid Tomatillos</h1>
    </nav>
    <section className='all-movies-display'>
      {!showMovieDetail && <MovieContainer className='movie-container' clickHandler= {clickHandler}  movies = {movies} exitShowMovie= {exitShowMovie}/>}
      {showMovieDetail && <MovieDetails  exitShowMovie = {exitShowMovie}  selectedMovieID={movieID} errorHandling = {error} setErrorHandling = {setError}/>}
    </section>
  </div>
)
}

export default App;