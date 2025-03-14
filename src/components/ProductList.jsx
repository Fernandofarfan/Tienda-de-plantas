import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import "../styles/ProductList.css";
import PlantList from "./PlantList";
import CartItems from "./CartItems";
import Navbar from "./Navbar"; // ⬅️ Nuevo componente separado

const ProductList = () => {
  const totalItemsCount = useSelector(state => state.cart.totalItemsCount);

  const sectionRef = useRef(null);

  const handleScrollSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar onCartClick={handleScrollSection} totalItems={totalItemsCount} />

      <h1>Products:</h1>
      <PlantList />

      <div ref={sectionRef}>
        <h1>Shopping Cart:</h1>
        <CartItems />
      </div>
    </div>
  );
};

export default ProductList;
