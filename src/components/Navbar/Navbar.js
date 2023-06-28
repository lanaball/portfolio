import React from "react";
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
      <a className="header__link" href="#about">about</a>
          <a className="header__link" href="#projects">projects</a>
          <a className="header__link" href="#contact">contact</a>
          <a className="header__link" href="./resume">resume</a>
        </nav>
      </div>
    </header>
    )
}

export default Navbar;