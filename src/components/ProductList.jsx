import React from "react";
import PlantList from "./PlantList";
import CartItems from "./CartItems";

const ProductList = () => {
  return (
    <div>
      <h1>Products:</h1>
      <PlantList />
      <h1>Shopping Cart:</h1>
      <CartItems />
    </div>
  );
};

export default ProductList;
