import './SearchBar.css' 

function SearchBar({search, searchFilter, ref}){
//pass search down as a prop with state 
console.log('search filter', searchFilter)
console.log('search', search)
  return (
  <div className='search-bar-container'>
    <h1>Rancid Tomatillos</h1>
    <form>
      <input 
      id='search'
      type='text'
      placeholder='Search for movies here!   🔍'
      name= {search}
      value={search}
      onChange ={searchFilter}
      />
    </form>
    </div>
  )
}

export default SearchBar