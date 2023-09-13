import React from 'react'
import Image from '../Assets/Poster.png'
import Logo from '../Assets/tv.png'
import min from '../Assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import orange from '../Assets/PngItem_1381056 1.png'
import play from '../Assets/Play.png'

import '../Styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="header" style={{backgroundImage:`url(${Image})`}}>
    <header>
        <nav className='nav'>
        <div  className="left-side" >
        <div className="logo" style={{backgroundImage:`url(${Logo})`}}></div>
        <h2>MovieBox</h2>
        </div>
        <form>
        <input className='center search' type="text" placeholder='what do you want to watch'/>
        <button type="submit"></button>
        </form>
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
       <h1>John Wick 3: Parabellum</h1>
       <div className="descript-content">
     
      <div> 
       <div className="mini-image text" style={{backgroundImage:`url(${min})`}}></div>
       <span>86.0 / 100</span>
       </div>
      
       <div>
       <div className="orange" style={{backgroundImage:`url(${orange})`}}></div>
        <span>97%</span>
        </div>
       
       </div>
         <div className="narration">
         <p>
         John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
         
         </div>
        <Link to='/'>
        <button className='btn'>
        <span className="icon" style={{backgroundImage:`url(${play})`}}> &nbsp; </span> &nbsp;
       
        Watch Trailer
        </button>
        </Link>
    </div>
    </div>
  )
}

export default Navbar
