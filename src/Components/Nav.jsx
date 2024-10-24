import React from 'react'
import '../Css/Nav.css'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='header'>
      <div className="logo">
        <NavLink to="/">WorldAtlas</NavLink>
      </div>
      <div className="nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/country">Country</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </div>
    </div>
  )
}

export default Nav
