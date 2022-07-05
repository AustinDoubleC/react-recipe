function Modal({filteredRecipe, setSelectedRecipe}) {
  return (
    <div id="modal-outer">
        <div id="modal-container">
          <i className="fa-solid fa-xmark" onClick={()=>setSelectedRecipe("")}></i>
            <h2>{filteredRecipe.recipe.label}</h2>
            <div className="modal-recipe">
                <img src={filteredRecipe.recipe.image} alt={filteredRecipe.recipe.label} className="modal-image"/>  
                <div className="recipe-detail">
                    <p>{filteredRecipe.recipe.totalTime===0?"":`Prep time: ${filteredRecipe.recipe.totalTime} mins`}</p>
                    <p>Serving: {filteredRecipe.recipe.yield}</p>
                    <p>Ingredients:</p>
                    <ol>
                    {filteredRecipe.recipe.ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))}
                    </ol>
                    <a href={filteredRecipe.recipe.url} className="recipe-url" target="_blank">see detail recipe</a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Modal