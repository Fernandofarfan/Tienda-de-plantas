import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import CartItems from './components/CartItems';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className="landing-page">
        <h1 className="landing-title">Welcome To Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <button className="get-started-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>

      {showProductList && (
        <>
          <ProductList />
          <CartItems />
        </>
      )}
    </div>
  );
}

export default App;
