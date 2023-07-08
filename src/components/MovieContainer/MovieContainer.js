import './MovieContainer.css';
import Card from '../Card/Card';
import MovieDetails from '../MovieDetails/MovieDetails';

function MovieContainer(props) {
  const movieCards = props.movies.map(movie => {
    return (
      <div>
        <div>
          <Card 
          title={movie.title}
          img={movie.poster_path}
          rating={movie.average_rating}
          id={movie.id}
          key={movie.id}
          showMovie= {props.showMovie}
          clickHandler= {props.clickHandler}
          />
        </div>
        <div>
          {props.showMovieDetail && <MovieDetails 
          title={movie.title}
          tagline= {movie.tagline}
          rating={movie.average_rating}
          runtime= {movie.runtime}
          releaseDate= {movie.release_date}
          overview= {movie.overview}
          genres={movie.genres}
          revenue={movie.revenue}
          budget={movie.budget}
          backdrop={movie.backdrop_path}
          key={movie.backdrop_path}
          id={movie.id}
          exitShowMovie = {props.exitShowMovie}
          showMovieDetail = {props.showMovieDetail}
          selectedMovie = {props.selectedMovie}
          />}
        </div>
    </div>
    )
  })
  
  return (
    <div className='movie-container'>
      {movieCards}
    </div>
  )
}

export default MovieContainer