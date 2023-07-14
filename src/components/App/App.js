// import logo from './logo.svg';
import './App.css';
// import movieData from '../MovieData/MovieData';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { getMovies, getSingleMovie } from '../../ApiCalls';
import {useState, useEffect, useRef} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [movies, setMovies] = useState([])
  //popup
  const [showMovieDetail, setShowMovieDetail] = useState(false)
  const [movieID, setMovieID] = useState("")
  const [error, setError] = useState("")
  const [allMoviesLoading, setAllMoviesLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")
  const [value, setValue] = useState("")
  // const input = useRef(null)

  useEffect(() => {
    setAllMoviesLoading(true)
    getMovies()
    .then(data => setMovies(data.movies))
    .catch(error => {
      if(error.status === 500) {
        setError('Oops! Looks like there is a server error.')
      } else {
        setError(error)
      }
    })
    .finally(() => {
      setAllMoviesLoading(false)
    })
  }, [])

  useEffect(()=>{
    const filteredMovies = movies.filter(movie=> movie.title.toLowerCase().includes(search))
    setFilter(filteredMovies)
  }, [movies, search])

  function searchFilter(event){
    setValue(event.target.value)
    const searchMovie = event.target.value.toLowerCase()
      setSearch(searchMovie)
  }

function clearInput(event){
  console.log('suuuuuup')
  setValue("")
  
}

if(error){
  return(<h1>{"An error occurred while fetching movies."}</h1>)
} else if(allMoviesLoading) {
  return(<h1>Loading...</h1>)
}


// function searchFilter(event){
//   const searchMovie = event.target.value.toLowerCase()
//   setSearch(searchMovie)
//   const filteredMovies = movies.filter(movie=> movie.title.toLowerCase().includes(search))
//  console.log('FILERED MOVIES', filteredMovies)
//  setFilter(filteredMovies)

// }




return (
  //use fragment instead of Div ?
  <div>
    < SearchBar search={search} searchFilter={searchFilter} />
    <section className='all-movies-display'>
    {/* <NavLink to = {`/movies/${movieID}`}/> */}
    <Routes>
        <Route path ="/" element={ 
        <MovieContainer className='movie-container' movies = {movies} search={search} searchFilter={searchFilter} filtered={filter}/> 
        } />
      <Route path = "/movies/:id" element={
          <MovieDetails  errorHandling = {error} setErrorHandling = {setError} selectedMovie={filter} clearInput={clearInput} value={value}/>
      } />
    </Routes>
    </section>
  </div>
)
}

//get rid of all click events, link will get everything to be clickable 

export default App;

// function clickHandler(event){
//   setMovieID(parseInt( event.target.id))
//   setShowMovieDetail(true)
//   // movieLink(event.target.id)
//   }

// function movieLink() {
//   return (
//     <NavLink to = {`/movies/${movieID}`}/>
//   )
// }

  // function exitShowMovie(){
  //   setShowMovieDetail(false)
  // }