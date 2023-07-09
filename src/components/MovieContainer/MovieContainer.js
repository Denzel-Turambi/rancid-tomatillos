import './MovieContainer.css';
import Card from '../Card/Card';

function MovieContainer(props) {
  const movieCards = props.movies.map(movie => {
    return (
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
    )
  })
  
  return (
    <div className='movie-container'>
      {movieCards}
    </div>
  )
}

export default MovieContainer