import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h3 className="navbar-title">🌿 Paradise Nursery</h3>
      <div className="navbar-links">
        <Link to="/products" className="nav-link">Productos</Link>
        <Link to="/about" className="nav-link">Nosotros</Link>
        {user && user.role === "admin" && <Link to="/admin" className="nav-link">Admin</Link>}
        {user ? (
          <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
        ) : (
          <Link to="/login" className="nav-link">Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
