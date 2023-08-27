import React from 'react'
import "./SearchForm.css"
import { useGlobalContext } from '../context'

export default function SearchForm() {

  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <h4 htmlFor='name'>Search your favorite cocktail</h4>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
          {/* <button>submit</button> */}
        </div>
      </form>
    </section>
  )
}