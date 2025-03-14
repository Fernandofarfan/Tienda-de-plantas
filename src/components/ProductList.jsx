import ReviewSystem from "./ReviewSystem";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const reviews = useSelector((state) => state.reviews.reviews[product.id] || []);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: {product.cost}</p>
      <p>Calificación: {"★".repeat(Math.round(averageRating))}</p>
      <ReviewSystem productId={product.id} />
    </div>
  );
};

export default ProductCard;
