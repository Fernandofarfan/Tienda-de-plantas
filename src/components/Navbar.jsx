import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery" />
        </Link>
        <h3>Paradise Nursery</h3>
      </div>
      <div className="navbar-links">
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/cart" className="nav-link">Cart 🛒</Link>
      </div>
    </nav>
  );
};

export default Navbar;
