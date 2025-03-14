import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Asegúrate de que la ruta es correcta

const AdminRoute = () => {
  const { user } = useAuth();
  return user && user.role === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
