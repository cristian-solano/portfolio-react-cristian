import React from 'react'
import '../Style/navbar.css'
import menu from '../Images/menu.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {


  return (
    <div className='navbar-container'>
      <div className='navbar-content'>
        <label htmlFor='navbar_icon' className='navbar-icon'>
          <img src={menu} alt="menu"/>
        </label>
      </div>
      <input id="navbar_icon" type='checkbox' style={{display: "none"}}/>
      <div className='navbar-links'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About us</NavLink>
        <NavLink to="/portfolio">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar