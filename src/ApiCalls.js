export function getMovies() {
 return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => res.json());
  }

export function getSingleMovie(id){
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(res => res.json())
};