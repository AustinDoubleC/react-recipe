import {useEffect} from "react"
function Random({setRandomResult}) {
  
  useEffect(()=>{
    getRandom()
  },[])

  const getRandom=async ()=>{
    const response = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=b58cfeb3a61a42e98005ccae21066170&number=5`)
    const data = await response.json();
    setRandomResult(data.recipes)
    console.log(data.recipes)
  }
   
  return (
    <div className="random-button">
      <h3>random recipes</h3>
      <i className="fa-solid fa-arrows-rotate" onClick={()=>getRandom()}></i>
    </div>
  )
}

export default Random