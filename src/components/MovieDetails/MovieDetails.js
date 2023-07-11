import './MovieDetails.css';
import { getSingleMovie } from '../../ApiCalls';
import { useEffect, useState } from 'react'

function MovieDetails({exitShowMovie, selectedMovieID}){  
  const [selectedMovie, setSelectedMovie] = useState({})
  const [singleMovieError, setSingleMovieError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
  if(selectedMovieID){
    setIsLoading(true)
    setSingleMovieError(null)
    setSingleMovieError('')

  getSingleMovie(selectedMovieID)
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

console.log('ERROR', singleMovieError)

if(singleMovieError){
  return <h1>{`${singleMovieError}. Please try again later.`}</h1>
} else if (isLoading){
  return <h1>Loading......</h1>
}
    return (
      <div id={selectedMovie.id} className='movie-details'>
        <h2 className='title'>{selectedMovie.title}</h2>
        <button onClick={exitShowMovie} > Back </button>
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