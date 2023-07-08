// import logo from './logo.svg';
import './App.css';
import movieData from '../MovieData/MovieData';
import MovieContainer from '../MovieContainer/MovieContainer';
import Card from '../Card/Card';
import {useState} from 'react';

function App() {
  const [movies, setMovies] = useState(movieData)
  //popup
  const [showMovieDetail, setShowMovieDetail] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})

  function clickHandler(event){
    showMovie(event)
    setShowMovieDetail(true)
  }

  function showMovie(event) {
    event.preventDefault()
    movies.forEach(movie => {
      if(parseInt(event.target.id) === movie.id){
        setSelectedMovie(movie)
        // setShowMovieDetail(true)
        // console.log('CLICKED')
        // console.log('SELECTED MOVIE', event.target)
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
      <MovieContainer showMovieDetail= {showMovieDetail} clickHandler= {clickHandler} showMovie= {showMovie} movies = {movies} exitShowMovie= {exitShowMovie} selectedMovie = {selectedMovie}/>
    </section>
  </div>
)
}

export default App;
