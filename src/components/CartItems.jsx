import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, clearCart } from "../redux/cartSlice";
import "../styles/CartItems.css";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.cost.replace('$', '')) * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${totalAmount.toFixed(2)}</h2>
      {cartItems.map(item => (
        <div className="cart-item" key={item.name}>
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>{item.cost} x {item.quantity}</p>
            <p>Total: ${parseFloat(item.cost.replace('$', '')) * item.quantity}</p>
            <button onClick={() => dispatch(removeItemFromCart(item))}>Remove</button>
          </div>
        </div>
      ))}
      <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default CartItems;
