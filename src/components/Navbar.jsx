import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="luxury">
      <h3 className="navbar-title">Paradise Nursery</h3>
    </div>
    <div className="navbar-links">
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/cart" className="nav-link">Cart 🛒</Link>
    </div>
  </nav>
);

export default Navbar;
