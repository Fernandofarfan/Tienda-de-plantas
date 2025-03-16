import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/wishlistSlice";
import "../styles/ProductList.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.wishlist.favorites);

  const isFavorite = favorites.some((fav) => fav.name === product.name);

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <h3 className="product-title">{product.name}</h3>
      <p>{product.description}</p>
      <p className="product-cost">{product.cost}</p>

      {/* Botón de Favorito */}
      <button
        className={`favorite-button ${isFavorite ? "favorite-active" : ""}`}
        onClick={() => dispatch(toggleFavorite(product))}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default ProductCard;
