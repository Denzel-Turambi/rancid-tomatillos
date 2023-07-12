import './Card.css';
import {useState, useEffect} from 'react';
import { getSingleMovie } from '../../ApiCalls';
import PropTypes from 'prop-types'

function Card({title, img, rating, id, clickHandler, showMovie}) {
// const [movieID, setMovieID] = useState("")



  return (
    <div onClick= {clickHandler} id ={id} className='card'>
      <img id ={id} src={img} className='movie-poster' alt={title}></img>
      <div className='card-info'>
        <h3 id ={id}>{title}</h3>
       <h3 id ={id}>{rating}/10</h3>
       </div>
    </div>
  )
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired, 
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  clickHandler:PropTypes.func.isRequired
}


// useEffect(() => {
  //   if(id){
  //     console.log('hello')
  //     getSingleMovie(movieID)
  //    .then(data => showMovie(data.movie))
  //   //  .catch(error => console.log('ERROR', error))
  //   }
  //   return setMovieID(prevState => "")
  // }, [movieID])
  
  // console.log('movie ID', movieID)


