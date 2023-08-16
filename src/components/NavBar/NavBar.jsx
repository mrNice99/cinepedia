import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.scss";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <NavLink to="/" className="nav-link cinepedia">
          Cinepedia
        </NavLink>
      </div>
      <div className={`nav-right ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/support" className="nav-link">
          Support
        </NavLink>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;
