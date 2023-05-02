import React from "react";
import './Navbar.scss'

const Navbar = () => {
    return (
        <header className="header">
      <h2 className="visually-hidden">Header</h2>
      <div className="wrapper">
        <nav className="header__nav">
          <h2 className="visually-hidden">Navigation</h2>
          <a href="/" className="header__home triangle"><span className="visually-hidden">(to home page)</span>
          </a>
          <a className="header__link" href="./index.html#about">about</a>
          <a className="header__link" href="./index.html#projects">projects</a>
          <a className="header__link" href="./index.html#contact">contact</a>
          <a className="header__link" href="./">resume</a>
        </nav>
      </div>
    </header>
    )
}

export default Navbar;