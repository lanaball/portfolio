// ------- IMPORT ----------
import { Link } from "react-router-dom";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
// -------- STYLE --------
import './_Navbar.scss'


const Navbar = () => {
  
  const toggleNavBar = () => {
    //  setShowMenu(!showMenu);
    var menuIcon = document.querySelector('.menu-icon');
    var navLinks = document.querySelector('.header__links');

    menuIcon.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  }


  return (
    <header className="header">
      <h2 className="visually-hidden">Header</h2>
      <div className="wrapper">
        <nav className="header__nav">
          <h2 className="visually-hidden">Navigation</h2>
          <a href="/" className="header__home triangle"><span className="visually-hidden">(to home page)</span>
          </a>
     <div className="menu-icon material-icons" onClick={toggleNavBar}>  <MenuIcon  /></div> 
      <ul className="header__links"> 
        <li className="header__link"><Link className="header__link" to="/about">About</Link></li>
        <li className="header__link"><Link className="header__link" to="/projects">Projects</Link></li>
        <li className="header__link"><Link className="header__link" to="/contact">Contact</Link></li>
        <li className="header__link"><Link className="header__link" to="/resume">Resume</Link></li>
      </ul>
    </nav>
  </div>
</header>
  )
}

export default Navbar;