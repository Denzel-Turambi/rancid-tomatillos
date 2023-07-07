import './MovieDetails.css';

function MovieDetails({title, tagline, rating, runtime, releaseDate, overview, genres, revenue, budget, backdrop}){
  console.log('TITLE MOVIE', title)
  return (
    <div className='movie-details'>
      <h3>Title: {title}</h3>
      <p>{tagline}</p>
      <p>{rating}</p>
      <p>{runtime}</p>
      <p>{releaseDate}</p>
      <p>{overview}</p>
      <p>{genres}</p>
      <p>{revenue}</p>
      <p>{budget}</p>

    </div>
  )
}

export default MovieDetails