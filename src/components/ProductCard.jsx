import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
import "../styles/ProductList.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) return null;

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <h3 className="product-title">{product.name}</h3>
      <p>{product.description}</p>
      <p className="product-cost">{product.cost}</p>
      <button
        className="product-button"
        onClick={() => dispatch(addItemToCart(product))}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default React.memo(ProductCard);
