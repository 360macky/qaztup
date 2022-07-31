import React, { useRef } from 'react'
import logo from './logo.svg'
import './App.css'

function Search () {
  const searchInput = useRef<HTMLInputElement>(null)
  const handleSearch = (e: any) => {
    e.preventDefault()
    if (searchInput.current) {
      const searchValue = searchInput.current.value
      if (searchValue.length !== 0) {
        window.location.replace(`https://duckduckgo.com/?q=${searchValue}`)
      }
    }
  }
  return (
    <div className="App">
      <div className="App-container">
        <section className="App-search">
          <img src={logo} className="App-logo" alt="logo" />
          <form className="App-search-form" onSubmit={handleSearch}>
            <input
              className="App-input-search"
              type="search"
              name="App-input-search"
              id="App-input-search"
              ref={searchInput}
              autoFocus
            />
            <input className="App-input-submit" type="submit" value="Search" />
          </form>
        </section>
      </div>
    </div>
  )
}

export default Search
