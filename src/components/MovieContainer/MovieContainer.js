import './MovieContainer.css';
import Card from '../Card/Card';
import { NavLink } from 'react-router-dom'


function MovieContainer(props) {
  // console.log('search coniditional', props.search)
  let movieFilter=[]
  let movieCards= []
  const filterMovies = props.filtered
  if(props.search){
    // console.log('hello')
    // console.log('PROPS MOVIES', movieFilter)
    movieFilter = filterMovies.map(filteredMovie => {
      console.log("FILTERED MOVIESSS", filteredMovie)
      return (
        <div className= '.movie-container'>
        <Card 
        title={filteredMovie.title}
        img={filteredMovie.poster_path}
        rating={filteredMovie.average_rating}
        id={filteredMovie.id}
        key={filteredMovie.id}
        />
      </div>
      //add navlink here 
      )
    })
    console.log('MOVIE FILTER', movieFilter)
  } else if (!props.search) {
  movieCards = props.movies.map(movie => {
    return (
        <div className= '.movie-container'>
          <Card 
          title={movie.title}
          img={movie.poster_path}
          rating={movie.average_rating}
          id={movie.id}
          key={movie.id}
          showMovie= {props.showMovie}
          />
        </div>
        //add navlink here 
    )
  })
}
// if(!movieFilter.length) {
//   return (<p>Sorry, no movies available. Try again! </p>)
// }
  return (
    <div className='movie-container'>
      {movieCards}
      {movieFilter}
    </div>
  )
}

export default MovieContainer