import React from "react";
import ReviewSystem from "./ReviewSystem"; // Asegúrate de que este archivo existe y está en la misma carpeta

const ProductCard = ({ product }) => {
  if (!product) return null; // Evita errores si `product` no está definido

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: {product.cost}</p>
      <ReviewSystem productId={product.id} />
    </div>
  );
};

export default ProductCard;
