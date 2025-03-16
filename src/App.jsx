import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import CartItems from "./components/CartItems";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import "./App.css";

function App() {
  console.log("App component is rendering"); // Para depurar

  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
