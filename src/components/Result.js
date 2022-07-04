function Result({title, image, setSelectedRecipe}) {
  return (
    <div className="recipe-container" onClick={()=>setSelectedRecipe(title)}>
            <img src={image} alt={title} className="recipe-image"/>
            <h3 className="recipe-title">{title}</h3>

      </div>
  )
}

export default Result