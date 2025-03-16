import React from "react";
import { useSelector } from "react-redux";
import "../styles/Wishlist.css";

const Wishlist = () => {
  const favorites = useSelector((state) => state.wishlist.favorites);

  return (
    <div className="wishlist-container">
      <h2>🌿 Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes productos en tu lista de favoritos.</p>
      ) : (
        <div className="wishlist-grid">
          {favorites.map((plant, idx) => (
            <div className="wishlist-card" key={`${plant.name}-${idx}`}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p className="wishlist-cost">{plant.cost}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
