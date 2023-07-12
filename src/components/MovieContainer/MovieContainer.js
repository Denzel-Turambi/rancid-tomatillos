import './MovieContainer.css';
import Card from '../Card/Card';

function MovieContainer(props) {
  console.log('PROPS MOVIES', props.movies)
  const movieCards = props.movies.map(movie => {
    return (
        <div className= '.movie-container'>
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
    )
  })
  return (
    <div className='movie-container'>
      {movieCards}
    </div>
  )
}

export default MovieContainer