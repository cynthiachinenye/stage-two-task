  import React from 'react'
  import '../Styles/Card.css'
  import poster from '../Assets/Poster (10).png'
  
  function Card() {
    return (
      <div className="MovieBox">
      <div>
      <h1>Featured Movies</h1>
      <p>See More</p>
      </div>
      <div className=" card">
         <p  className="poster" style={{backgroundImage:`url(${poster})`}}></p>
      </div>
        
      </div>
    )
  }
  
  export default Card
  