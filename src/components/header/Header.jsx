import React from 'react'
import logo from "../../images/hexaviewLogo.jpg"
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <div className='navbar'>
        <img className="setLogo" src={logo} alt="logo"/>
        <nav>
        <ul >
          <li><a href="/">Home</a></li>
          <li><a href="/">Service</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          
        </ul>
        </nav>
        </div>
    </div>
  )
}

export default Header