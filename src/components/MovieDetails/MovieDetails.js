import './MovieDetails.css';

function MovieDetails({exitShowMovie, showMovieDetail, selectedMovie}){  
  console.log('SELECTED MOVIE DETAILS', selectedMovie)
  
  if(showMovieDetail) {
    return (
      <div id={selectedMovie.id} className='movie-details'>
        <h2 className='title'>{selectedMovie.title}</h2>
        <button onClick={exitShowMovie} > X</button>
        <p>{selectedMovie.tagline}</p>
        <p>Average Rating: {selectedMovie.rating}</p>
        <p>Runtime: {selectedMovie.runtime} minutes </p>
        <p>ReleaseDate: {selectedMovie.releaseDate}</p>
        <p>Overview: {selectedMovie.overview}</p>
        <p>Genre(s): {selectedMovie.genres}</p>
        {selectedMovie.revenue && <p>Revenue: ${selectedMovie.revenue}</p> || <p>Revenue: Information not available</p>}
        {selectedMovie.budget && <p>Budget: ${selectedMovie.budget}</p> || <p>Budget: Information not available</p>}
        <img className='movie-details-img' src={selectedMovie.backdrop_path} ></img>
      </div>
    )
  }
}

export default MovieDetails