import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Routes>
  <Route path="/" element={<Navigate to="/products" />} />
  <Route path="/products" element={<ProductList />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/cart" element={<CartItems />} /> {/* Agregar esta línea */}
</Routes>

  );
}

export default App;
