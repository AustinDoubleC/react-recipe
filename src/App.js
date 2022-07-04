import './App.css';
import Head from './components/Head';
import Random from './components/Random';
import Result from './components/Result';
import RandomOutput from './components/RandomOutput'
import {useState, useEffect} from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Modal from './components/Modal';
import ModalRandom from './components/ModalRandom'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState("chicken");
  const [randomResult, setRandomResult] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState("")
  const [filteredRecipe, setFilteredRecipe] = useState([{recipe:{
    ingredients:[{
      text: ""
  }]
  }}])
  const [selectedRandom, setSelectedRandom] = useState()
  const [filteredRandom, setFilteredRandom] = useState([{title:"",
  extendedIngredients:[{aisle:""}]}])

  useEffect(()=>{
    if(selectedRecipe){
        document.getElementById("modal-outer").style.display="block"
        setFilteredRecipe(recipes.filter(rec=>rec.recipe.label ===selectedRecipe))
    }else{
      document.getElementById("modal-outer").style.display="none"
    }
},[selectedRecipe])

useEffect(()=>{
  if(selectedRandom){
      document.getElementById("modalRandom-outer").style.display="block"
      setFilteredRandom(randomResult.filter(ran=>ran.id ===selectedRandom))
  }else{
    document.getElementById("modalRandom-outer").style.display="none"
  }
},[selectedRandom])

  return (
    <div className="App">
      <Head setRecipes={setRecipes} setQuery={setQuery} setSearch={setSearch} query={query} search={search}/>
      <Random setRandomResult={setRandomResult}/>
      <div id="randoms-container">
      <Splide
      options={{
        perPage:3,
        drag:"free",
        pagination:false,
        breakpoints: {
          800 : { perPage: 2},
        }
      }}
      >
      {randomResult.map(ran=>(
          <SplideSlide>
          <RandomOutput
          key={ran.id}
          ranId={ran.id}
          randomTitle={ran.title}
          randomImage={ran.image}
          setSelectedRandom={setSelectedRandom}
          />
          </SplideSlide>
        ))}
        </Splide>
      </div>
      
      <div
      id="result-container">
        <h2>Search result of {query}</h2>
        <Splide
          options={{
            perPage:4,
            pagination:false,
            drag:"free",
            breakpoints: {
              1000: { perPage: 3},
              800 : { perPage: 2},
            }
          }}
        >
      {recipes.map(recipe=>(
          <SplideSlide>
          <Result
          key={recipe.recipe.uri}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          setSelectedRecipe={setSelectedRecipe}
          />
          </SplideSlide>
        ))}
        </Splide>
      </div>
      <Modal filteredRecipe={filteredRecipe[0]} setSelectedRecipe={setSelectedRecipe}/>
      <ModalRandom filteredRandom={filteredRandom[0]} setSelectedRandom={setSelectedRandom}/>
    </div>
  );
}

export default App;
