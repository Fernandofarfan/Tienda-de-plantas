import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ onCartClick, totalItems }) => {
  return (
    <div className="navbar">
      <div className="tag">
        <div className="luxury">
          <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery" />
          <a href="/" style={{ textDecoration: "none" }}>
            <h3 style={{ color: "white" }}>Paradise Nursery</h3>
            <i style={{ color: "white" }}>Where Green Meets Serenity</i>
          </a>
        </div>
      </div>
      <div className="navbar-links">
        <a href="#" className="nav-link">Plants</a>
        <button className="cart-button" onClick={onCartClick}>
          🛒 Cart ({totalItems})
        </button>
      </div>
    </div>
  );
};

export default Navbar;
