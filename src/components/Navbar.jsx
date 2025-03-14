import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <h3>Paradise Nursery</h3>
      <Link to="/products">Productos</Link>
      <Link to="/about">Nosotros</Link>
      {user && user.role === "admin" && <Link to="/admin">Admin</Link>}
      {user ? (
        <button onClick={logout}>Cerrar Sesión</button>
      ) : (
        <Link to="/login">Iniciar Sesión</Link>
      )}
    </nav>
  );
};

export default Navbar;
