
import './App.css';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import { getMovies, getSingleMovie } from '../../ApiCalls';
import {useState, useEffect, useRef} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState("")
  const [allMoviesLoading, setAllMoviesLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("")
  const [value, setValue] = useState("")
  const [barVisible, setBarVisible] = useState(true)
 
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

function clearInput(){
 setSearch("") 
 setBarVisible(true)
}

//put in function ?
if(error){
  return(<h1>{"An error occurred while fetching movies."}</h1>)
} else if(allMoviesLoading) {
  return(<h1>Loading...</h1>)
}

return (
  <div>
  <nav className="header">
    <h1>Rancid Tomatillos</h1>
    < SearchBar search={search} searchFilter={searchFilter} clearInput={clearInput} setBarVisible={setBarVisible} barVisible={barVisible}/>
  </nav>
    <section className='all-movies-display'>
    <Routes>
        <Route path ="/" element={ 
        <MovieContainer className='movie-container' movies = {movies} search={search} searchFilter={searchFilter} filtered={filter}/> 
        } />
      <Route path = "/movies/:id" element={
          <MovieDetails  errorHandling = {error} setErrorHandling = {setError} selectedMovie={filter} clearInput={clearInput} value={value} setBarVisible={setBarVisible}/>
      } />
    </Routes>
    </section>
  </div>
)
}

export default App;

