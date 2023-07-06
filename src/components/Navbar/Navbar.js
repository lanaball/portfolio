// ------- IMPORT ----------
import { Link } from "react-router-dom";
import React from "react";

// -------- STYLE --------
import './_Navbar.scss'


const Navbar = () => {
  return (
    <header className="header">
      <h2 className="visually-hidden">Header</h2>
      <div className="wrapper">
        <nav className="header__nav">
          <h2 className="visually-hidden">Navigation</h2>
          <a href="/" className="header__home triangle"><span className="visually-hidden">(to home page)</span>
          </a>

          <Link to="/about"> <a className="header__link" href="#">about</a>
          </Link>
         
          
          <Link to="/projects"><a className="header__link" href="#">projects</a>
          </Link>
        
          <Link to="/contact"> <a className="header__link" href="#" >contact</a> 
          </Link>
         
         
          <Link to="/resume"><a className="header__link" href="#">resume</a>
          </Link>  
        </nav>
      </div>
    </header>
  )
}

export default Navbar;