import './MovieDetails.css';
import { getSingleMovie } from '../../ApiCalls';
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, NavLink, Link} from 'react-router-dom'

function MovieDetails({clearInput, value}){  
console.log('Param', useParams())
const id = useParams()
console.log('ID',id.id)
  const [selectedMovie, setSelectedMovie] = useState({})
  const [singleMovieError, setSingleMovieError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

//remove selectedMovie state 


useEffect(() => {
  if(id.id){
    setIsLoading(true)
    setSingleMovieError(null)
    setSingleMovieError('')

  getSingleMovie(id.id)
    .then(data => setSelectedMovie(data.movie))
    .catch(err => {
      if(err.status === 500){
        setSingleMovieError('Oops! There is a server error.')
      } else {
      setSingleMovieError(err)
      }
    })
    .finally(() => {
      setIsLoading(false)
    })
  }
}, [])



if(singleMovieError){
  return <h1>{`${singleMovieError}. Please try again later.`}</h1>
} else if (isLoading){
  return <h1>Loading......</h1>
}
    return (
      <div id={selectedMovie.id} className='movie-details'>
        <h2 className='title'>{selectedMovie.title}</h2>
        <Link to={"/"}>
        <button onClick={clearInput}> Back </button>
        </Link>
        <p>{selectedMovie.tagline}</p>
        <p>Average Rating: {selectedMovie.average_rating * 10}%</p>
        <p>Runtime: {selectedMovie.runtime} minutes </p>
        <p>ReleaseDate: {selectedMovie.release_date}</p>
        <p>Overview: {selectedMovie.overview}</p>
        <p>Genre(s): {selectedMovie.genres}</p>
        {selectedMovie.revenue && <p>Revenue: ${selectedMovie.revenue}</p> || <p>Revenue: Information not available</p>}
        {selectedMovie.budget && <p>Budget: ${selectedMovie.budget}</p> || <p>Budget: Information not available</p>}
        <img className='movie-details-img' src={selectedMovie.backdrop_path} ></img>
     </div>
    )
}

export default MovieDetails

// MovieDetails.propTypes ={
//   selectedMovieID: PropTypes.number.isRequired
// }




//page that you go to has to have access to the data
//whatever your router is going to, you have to make sure the componnent has access to the data it needs 
//router you will set it up with an element inside 
//when you set up the routes the element is the component and you would pass the props through that component 
//filter you would do use state 
//router can set path with movies based on the ID
