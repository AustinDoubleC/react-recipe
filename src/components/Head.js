import {useEffect} from "react"
import logo from '../logo.png'

function Head({setRecipes, setQuery, setSearch, query, search}) {

  useEffect(()=>{
    getRecipes();
  },[query])

const getRecipes = async () =>{
  const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=552063c7&app_key=de9efc6166b8b86638b0df942bb06940`)
  const data = await response.json();
  setRecipes (data.hits);
}

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();
    if (search){
      setQuery(search)
    }
    setSearch("")
  }


  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <form onSubmit={getSearch} className="search-form">
          <div id="search-container">
          <button className="btnSearch" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          <input className="input-search" type="text" value={search} onChange={updateSearch} placeholder="Search your recipe..."></input>
          </div>
      </form>
      
      
    </div>
  )
}

export default Head