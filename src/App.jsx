import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import ProductList from "./components/ProductList";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [showLanding, setShowLanding] = useState(
    localStorage.getItem("showLanding") !== "false"
  );

  useEffect(() => {
    if (location.pathname === "/about") {
      setShowLanding(true);
      localStorage.setItem("showLanding", "true");
    }
  }, [location.pathname]);

  const handleGetStarted = () => {
    setShowLanding(false);
    localStorage.setItem("showLanding", "false");
  };

  return (
    <>
      <Navbar />
      <div className="app-container">
        {showLanding && location.pathname === "/" ? (
          <header className="landing-page">
            <h1 className="landing-title">Welcome To Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <Link to="/products" onClick={handleGetStarted}>
              <button className="get-started-button">Get Started</button>
            </Link>
          </header>
        ) : (
          <main>
            <Routes>
              <Route path="/products" element={<ProductList />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
        )}
      </div>
    </>
  );
}

export default App;