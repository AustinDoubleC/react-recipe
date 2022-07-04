import {useEffect} from "react"

function Head({setRecipes, setQuery, setSearch, query, search}) {

  useEffect(()=>{
    getRecipes();
  },[query])

const getRecipes = async () =>{
  const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=552063c7&app_key=de9efc6166b8b86638b0df942bb06940`)
  const data = await response.json();
  console.log(data.hits)
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
        <h3 id="logo1"><span className="span">H</span>ungry</h3>
        <h3 id="logo2"><i className="fa-solid fa-hippo"></i><span className="span">H</span>ippo</h3>
      </div>
      <form onSubmit={getSearch} className="search-form">
          <div id="search-container">
          <button className="btnSearch" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          <input className="input-search" type="text" value={search} onChange={updateSearch} placeholder="Enter text here"></input>
          </div>
      </form>
      
      
    </div>
  )
}

export default Head