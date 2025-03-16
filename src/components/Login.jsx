import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Importamos los estilos mejorados

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Resetear error previo

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
      setError("⚠️ Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🔐 Iniciar Sesión</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input 
              type="email" 
              id="email"
              placeholder="Ingresa tu correo" 
              required 
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password"
              placeholder="Ingresa tu contraseña" 
              required 
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <p className="register-text">¿No tienes cuenta? <a href="#">Regístrate</a></p>
      </div>
    </div>
  );
};

export default Login;
