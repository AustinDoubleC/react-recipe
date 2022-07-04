function Result({randomTitle, randomImage, ranId, setSelectedRandom}) {
    return (
      <div className="random-container" onClick={()=>setSelectedRandom(ranId)}>
              <img src={randomImage} alt={randomTitle} className="random-image"/>
              <p>{randomTitle}</p>
  
        </div>
    )
  }
  
  export default Result