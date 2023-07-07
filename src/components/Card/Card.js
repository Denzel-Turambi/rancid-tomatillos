import './Card.css';

function Card({title, img, rating}) {
  return (
    <div className='card'>
      <img src={img} height='50px' width='30px'></img>
      <h3>{title}</h3>
      <h3>{rating}</h3>
    </div>

  )
}

export default Card;