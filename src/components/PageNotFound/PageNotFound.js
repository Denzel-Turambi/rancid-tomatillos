import {NavLink} from 'react-router-dom'

function PageNotFound(){
  return (
    <div>
      <p className='error-message'>404 page not found</p>
      <NavLink to="/" className="error-to-home" style={{ color: '#BBDB9B' }}>
        <p className="try-again">Please try again</p>
      </NavLink>
    </div>
  )
};

export default PageNotFound;