import './MovieContainer.css';
import Card from '../Card/Card';
import MovieDetails from '../MovieDetails/MovieDetails';

function MovieContainer(props) {
  const movieCards = props.movies.map(movie => {
    console.log('IDs', movie.id)
    return (
      <div>
      <div>
      <Card 
      title={movie.title}
      img={movie.poster_path}
      rating={movie.average_rating}
      id={movie.id}
      key={movie.id}
      />
        </div>
        <div>
      <MovieDetails 
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
      />
    </div>
    </div>
    )
  })

  // <h3>Title</h3>
  //     <p>tagline</p>
  //     <p>rating</p>
  //     <p>runtime</p>
  //     <p>releasedate</p>
  //     <p>overview</p>
  //     <p>genres</p>
  //     <p>revenue</p>
  //     <p>budget</p>

  return (
    <div className='movie-container'>
      {movieCards}
    </div>
  )
}

export default MovieContainer