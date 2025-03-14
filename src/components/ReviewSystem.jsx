import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addReview } from "../redux/reviewSlice";
import "./../styles/ReviewSystem.css";

const ReviewSystem = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      alert("Por favor selecciona una calificación y escribe un comentario.");
      return;
    }

    dispatch(addReview({ productId, rating, comment }));
    setRating(0);
    setComment("");
  };

  return (
    <div className="review-container">
      <h3>Deja tu Reseña</h3>
      <form onSubmit={handleSubmit}>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star selected" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
        />
        <button type="submit">Enviar Reseña</button>
      </form>
    </div>
  );
};

export default ReviewSystem;
