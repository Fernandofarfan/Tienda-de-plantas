import React from "react";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Panel de Administrador</h1>
      <button onClick={logout}>Cerrar Sesión</button>

      <section>
        <h2>Gestión de Productos</h2>
        <button>Agregar Producto</button>
        <button>Editar Producto</button>
        <button>Eliminar Producto</button>
      </section>

      <section>
        <h2>Gestión de Pedidos</h2>
        <p>Lista de pedidos aquí...</p>
      </section>
    </div>
  );
};

export default AdminDashboard;
