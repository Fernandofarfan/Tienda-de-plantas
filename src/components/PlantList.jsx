import React, { useState } from "react";
import ProductFilter from "./ProductFilter";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import "../styles/ProductList.css";

const PlantList = () => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div className="product-grid">
      <ProductFilter setFilteredProducts={setFilteredProducts} />
      
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((plant, idx) => (
            <div className="product-card" key={`${plant.name}-${idx}`}>
              <img className="product-image" src={plant.image} alt={plant.name} />
              <h3 className="product-title">{plant.name}</h3>
              <p>{plant.description}</p>
              <p className="product-cost">{plant.cost}</p>
              <button
                className="product-button"
                onClick={() => dispatch(addItemToCart(plant))}
              >
                Añadir al carrito
              </button>
            </div>
          ))
        ) : (
          <p>No se encontraron plantas.</p>
        )}
      </div>
    </div>
  );
};

export default PlantList;
