import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="landing-page">
          <h1 className="landing-title">Welcome To Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
          <Link to="/products">
            <button className="get-started-button">Get Started</button>
          </Link>
        </div>

        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
