import './SearchBar.css'
import PropTypes from 'prop-types'

function SearchBar({ search, searchFilter, clearInput, barVisible }) {
  if (!search && barVisible) {
    return (
      <div className='search-bar-container'>
        <form>
          <input
            id='search'
            type='text'
            placeholder='Search for movies here!   🔍'
            name={search}
            value={search}
            onChange={searchFilter}
          />
        </form>
      </div>
    )
  } else if (search && barVisible) {
    return (
      <div className='search-bar-container-btn'>

        <form className='form-btn'>
          <input
            id='search-btn'
            type='text'
            placeholder='Search for movies here!   🔍'
            name={search}
            value={search}
            onChange={searchFilter}
          />
        </form>
        <button className="clear-btn" onClick={clearInput}>clear input</button>
      </div>
    )
  }
};

export default SearchBar;

SearchBar.propTypes = {
  search:PropTypes.string.isRequired, 
  searchFilter: PropTypes.func.isRequired, 
  clearInput: PropTypes.func.isRequired, 
  barVisible: PropTypes.bool.isRequired
};