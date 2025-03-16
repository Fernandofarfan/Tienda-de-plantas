import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle"; // ⬅️ Importamos el botón de modo oscuro

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h3 className="navbar-title">🌿 Paradise Nursery</h3>
      <div className="navbar-links">
        <Link to="/products" className="nav-link">Productos</Link>
        <Link to="/about" className="nav-link">Nosotros</Link>
        <Link to="/wishlist" className="nav-link">❤️ Favoritos</Link>
        {user && user.role === "admin" && <Link to="/admin" className="nav-link">Admin</Link>}
        {user ? (
          <button className="logout-button" onClick={logout}>Cerrar Sesión</button>
        ) : (
          <Link to="/login" className="nav-link">Iniciar Sesión</Link>
        )}
        <DarkModeToggle /> {/* ⬅️ Agregamos el botón de modo oscuro */}
      </div>
    </nav>
  );
};

export default Navbar;
