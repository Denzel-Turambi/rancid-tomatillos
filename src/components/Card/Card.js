import './Card.css';

function Card({title, img, rating, id, showMovie}) {
  return (
    <div onClickCapture= {showMovie} id ={id} className='card'>
      <img id ={id} src={img} className='movie-poster'></img>
      <div className='card-info'>
        <h3 id ={id}>{title}</h3>
       <h3 id ={id}>{rating}/10</h3>
       </div>
    </div>
  )
}

export default Card;