import './Card.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ title, img, rating, id }) {
  return (
    <Link to={`/movies/${id}`} style={{textDecoration:'none'}}>
      <div id={id} className='card' name={title}>
        <img id={id} src={img} className='movie-poster' alt={title} />
        <div className='card-info'>
          <h3 id={id}>{title}</h3>
          <h3 id={id}>{rating* 10}%</h3>
        </div>
      </div>
    </Link>
  )
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired, 
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};