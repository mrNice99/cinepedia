import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.scss";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <NavLink to="/" className="nav-link cinepedia">
          Cinepedia
        </NavLink>
      </div>
      <div className={`nav-right ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About
        </NavLink>
        <NavLink to="/support" className="nav-link" onClick={closeMenu}>
          Support
        </NavLink>
      </div>
      <div
        className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;
