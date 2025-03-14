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
        plantsArray.map((categoryData, index) => (
          <div key={categoryData.category || index}>
            <h1 className="plant_heading">{categoryData.category}</h1>
            <div className="product-list">
              {(categoryData.plants || categoryData).map((plant, idx) => (
                <div className="product-card" key={`${plant.name}-${index}-${idx}`}>
                  <img className="product-image" src={plant.image} alt={plant.name} />
                  <h3 className="product-title">{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p className="product-cost">{plant.cost}</p>
                  <button
                    className="product-button"
                    onClick={() => dispatch(addItemToCart({ ...plant, id: plant.name + index }))}
                  >
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
