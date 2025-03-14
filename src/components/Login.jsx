import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de autenticación
    const usersDB = [
      { email: "user@example.com", password: "123456", role: "user" },
      { email: "admin@example.com", password: "admin123", role: "admin" }
    ];

    const userFound = usersDB.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (userFound) {
      login(userFound);
      navigate(userFound.role === "admin" ? "/admin" : "/products");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
        />
        <input type="password" placeholder="Contraseña" required
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
