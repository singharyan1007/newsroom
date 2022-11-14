import React from 'react'

function SearchForm() {
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <h2>Zintlr news</h2>
    <input
      type='text'
      className='form-input'
    />
  </form>
  )
}

export default SearchForm