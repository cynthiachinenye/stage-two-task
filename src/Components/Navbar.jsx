import React from 'react'
import Image from '../Assets/Poster.png'
import Logo from '../Assets/tv.png'
import '../Styles/navbar.css'
function Navbar() {
  return (
    <div className="header" style={{backgroundImage:`url(${Image})`}}>
    <header>
        <nav className='nav'>
        <div  className="left-side" >
        <div className="logo" style={{backgroundImage:`url(${Logo})`}}></div>
        <h2>MovieBox</h2>
        </div>
        <input className='center' type="text" placeholder='what do you want to watch'/>
        <div className="right-side">
          <p>sign in</p>
          <div className="div">
          <div className="menu one"></div>
          <div className="menu"></div>  
        </div>
        
        </div>
        </nav>
    </header>
    <div className="description-box">
       <h1>John Wick 3:Parabellum</h1>
       <div>
       <img src='../Assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'></img>
       </div>
    
    </div>
    </div>
  )
}

export default Navbar
