function Modal({filteredRecipe, setSelectedRecipe}) {
  return (
    <div id="modal-outer">
        <div id="modal-container">
            <button onClick={()=>setSelectedRecipe("")}>close</button>
            <h2>{filteredRecipe.recipe.label}</h2>
            <div className="modal-recipe">
                <img src={filteredRecipe.recipe.image} alt={filteredRecipe.recipe.label} className="modal-image"/>  
                <div className="recipe-detail">
                    <p>{filteredRecipe.recipe.totalTime===0?"":`Prep time: ${filteredRecipe.recipe.totalTime} mins`}</p>
                    <p>Serving: {filteredRecipe.recipe.yield}</p>
                    <ol>
                    {filteredRecipe.recipe.ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))}
                    </ol>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Modal