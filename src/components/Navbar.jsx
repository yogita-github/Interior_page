import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import name_logo from './name_logo.png';

const Navbar = () => {
  return (
    
      <nav className="navbar">
        <div className="logo">
          <img src={name_logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link home">
            Home
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/support" className="nav-link">
            Support
          </Link>
        </div>
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </nav>
    
  )
};

export default Navbar;