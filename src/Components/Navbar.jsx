import React from 'react'
import Image from '../Assets/Poster.png'
function Navbar() {
  return (
    <header className="head" style={{backgroundImage:`url(${Image})`}}>
        <nav className='nav'>
        <div>
        <img src="../Assets/tv.png" />
        <h2>MovieBox</h2>
        </div>
        <input type="text" placeholder='what do you want to watch'/>
        <div>
          <p>sign in</p>
          <div>
          <div></div>  
        </div>
        
        </div>
        </nav>
      
    </header>
  )
}

export default Navbar
