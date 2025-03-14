import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import plantsArray from "../redux/plantsArray";
import "../styles/ProductList.css";

const PlantList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-grid">
      {plantsArray.length > 0 ? (
        plantsArray.map((category) => (
          <div key={category.category}>
            <h1>{category.category}</h1>
            <div className="product-list">
              {category.plants.map((plant, index) => (
                <div className="product-card" key={plant.name + index}>
                  <img className="product-image" src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p>{plant.cost}</p>
                  <button onClick={() => dispatch(addItemToCart({ ...plant, id: plant.name + index }))}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading plants...</p>
      )}
    </div>
  );
};

export default PlantList;
