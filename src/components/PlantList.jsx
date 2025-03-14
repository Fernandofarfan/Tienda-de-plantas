import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import plantsArray from "../redux/plantsArray";
import "../styles/ProductList.css";

const PlantList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItemToCart(plant));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1>{category.category}</h1>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img className="product-image" src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p>{plant.cost}</p>
                <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantList;
