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

  function showMovie(event) {
    movies.forEach(movie => {
      if(console.log(parseInt(event.target.id)) === console.log('MOVIE ID', movie.id)){
        setShowMovieDetail(true)
        console.log('CLICKED')
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
      <MovieContainer showMovieDetail= {showMovieDetail} showMovie= {showMovie} movies = {movies} exitShowMovie= {exitShowMovie}/>
    </section>
  </div>
)
}

export default App;
