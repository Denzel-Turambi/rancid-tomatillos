export function getMovies() {
  const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies';
  return fetch(url)
    .then(res => res.json())
};

export function getSingleMovie(id){
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(res => res.json())
};