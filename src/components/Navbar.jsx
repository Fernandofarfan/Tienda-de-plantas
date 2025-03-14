import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar-title">Paradise Nursery</h3>
      <div className="navbar-links">
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/cart" className="nav-link">Cart 🛒</Link>
      </div>
    </nav>
  );
};

export default Navbar;
