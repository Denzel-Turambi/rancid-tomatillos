
import './App.css';
import '../../Tomatillo.png';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieDetails from '../MovieDetails/MovieDetails';
import PageNotFound from '../PageNotFound/PageNotFound';
import { getMovies } from '../../ApiCalls';
import {useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [allMoviesLoading, setAllMoviesLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [value, setValue] = useState("");
  const [barVisible, setBarVisible] = useState(true);

  useEffect(() => {
    setAllMoviesLoading(true);
    getMovies()
    .then(data => setMovies(data.movies))
    .catch(error => {
      if(error.status === 500) {
        setError('Oops! Looks like there is a server error.');
      } else {
        setError(error);
      }
    })
    .finally(() => {
      setAllMoviesLoading(false);
    })
  }, []);

  useEffect(()=>{
    const filteredMovies = movies.filter(movie=> movie.title.toLowerCase().includes(search))
    setFilter(filteredMovies)
  }, [movies, search]);

  function searchFilter(event){
    setValue(event.target.value);
    const searchMovie = event.target.value.toLowerCase();
    setSearch(searchMovie);
  };

function clearInput(){
 setSearch(""); 
 setBarVisible(true);
};

if(error){
  return(<h1 className ="error-message" >{"An error occurred while fetching movies."}</h1>);
} else if(allMoviesLoading) {
  return(<h1 className ="error-message" >Loading...</h1>);
} 

return (
  <div>
  <nav className="header">
    <Link to="/" className="nav-link" style={{textDecoration:'none'}}>
      <h1 className ="logo-title" onClick={clearInput}> Rancid Tomatillos</h1>
      <img className ="logo-img" src={require('../../Tomatillo.png')} height='160px' width='160px' onClick={clearInput} alt="tomatillo img"/>
    </Link>
    < SearchBar search={search} searchFilter={searchFilter} clearInput={clearInput} barVisible={barVisible}/>
  </nav>
    <section className='all-movies-display'>
    <Routes>
        <Route path ="/" element={ 
        <MovieContainer className='movie-container' movies = {movies} search={search} filtered={filter}/> 
        } />
      <Route path = "/movies/:id" element={
          <MovieDetails clearInput={clearInput} setBarVisible={setBarVisible}/>
      } />
      <Route path="/404" element={<PageNotFound/>}/>
      <Route path="*" element={<Navigate to= "/404"/>}/>
    </Routes>
    </section>
  </div>
)
};

export default App;


