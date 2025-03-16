import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ErrorBoundary from "./components/ErrorBoundary"; // Importamos el manejador de errores
import "./App.css";

// Carga diferida (lazy loading) para mejorar el rendimiento
const ProductList = lazy(() => import("./components/ProductList"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const CartItems = lazy(() => import("./components/CartItems"));
const Login = lazy(() => import("./components/Login"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));

function App() {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<div className="loading">🔄 Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cart" element={<CartItems />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={<AdminRoute />}>
              <Route index element={<AdminDashboard />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
