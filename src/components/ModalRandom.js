
function Modal({filteredRandom, setSelectedRandom}) {
    console.log(filteredRandom.extendedIngredients)
    return (
      <div id="modalRandom-outer">
          <div id="modal-container">
              <i class="fa-solid fa-xmark" onClick={()=>setSelectedRandom("")}></i>
              
              <h2>{filteredRandom.title}</h2>
              <div className="modal-recipe">
                <img src={filteredRandom.image} alt={filteredRandom.title} className="modal-image"/> 
                <div className="recipe-detail">
                    <p>{filteredRandom.readyInMinutes===0?"":`Prep time: ${filteredRandom.readyInMinutes} mins`}</p>
                    <p>Serving: {filteredRandom.servings}</p> 
                    <p>Ingredients:</p> 
                <ol>
                   {filteredRandom.extendedIngredients.map(ingredient=>(
                    <li>{ingredient.aisle}</li>
                   ))
                   }
                </ol>
                </div>
            </div>
  
          </div>
      </div>
    )
  }
  
  export default Modal