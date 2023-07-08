import './MovieDetails.css';

function MovieDetails({title, tagline, rating, runtime, releaseDate, overview, genres, revenue, budget, backdrop, id, exitShowMovie, showMovieDetail}){  
  if(showMovieDetail) {
    return (
      <div id={id} className='movie-details'>
        <h2 className='title'>{title}</h2>
        <button onClick={exitShowMovie} > X</button>
        <p>{tagline}</p>
        <p>Average Rating: {rating}</p>
        <p>Runtime: {runtime} minutes </p>
        <p>ReleaseDate: {releaseDate}</p>
        <p>Overview: {overview}</p>
        <p>Genre(s): {genres}</p>
        {revenue && <p>Revenue: ${revenue}</p> || <p>Revenue: Information not available</p>}
        {budget && <p>Budget: ${budget}</p> || <p>Budget: Information not available</p>}
        <img className='movie-details-img' src={backdrop} ></img>
      </div>
    )
  }
}

export default MovieDetails