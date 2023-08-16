import './MovieContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types'

function MovieContainer(props) {
  let movieFilter=[];
  let movieCards= [];
  const filterMovies = props.filtered;
  if(props.search){
    movieFilter = filterMovies.map(filteredMovie => {
      return (
        <div className= '.movie-container' key={filteredMovie.id}>
        <Card 
        title={filteredMovie.title}
        img={filteredMovie.poster_path}
        rating={filteredMovie.average_rating}
        id={filteredMovie.id}
        
        />
      </div>
      )
    })
  } else if (!props.search) {
  movieCards = props.movies.map(movie => {
    return (
        <div className= '.movie-container' key={movie.id}>
          <Card 
          title={movie.title}
          img={movie.poster_path}
          rating={movie.average_rating}
          id={movie.id}
          
          />
        </div>   
    )
  })
}
if(props.search && !movieFilter.length) {
  return (<p className ="error-message">Sorry, based on your search there are no movies available. Try again! </p>)
}
  return (
    <div className='movie-container'>
      {movieCards}
      {movieFilter}
    </div>
  )
};

export default MovieContainer;

MovieContainer.propTypes = {
  props: PropTypes.shape({
    movies:PropTypes.array.isRequired, 
    filtered:PropTypes.array.isRequired, 
    search:PropTypes.string.isRequired
  })
};