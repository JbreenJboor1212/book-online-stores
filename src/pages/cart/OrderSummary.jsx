import { useContext } from "react";
import CartContext from "../../context/cartContext";

const OrderSummary = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-order-summary">
      <div className="order-summary-title">Order Summary</div>
      <div className="order-summary-item">
        <span>SubTotal</span>
        <span>${totalPrice}</span>
      </div>
      <div className="order-summary-item">
        <span>Shopping Cost</span>
        <span>0</span>
      </div>
      <div className="order-summary-item">
        <span>Discount</span>
        <span>0</span>
      </div>
      <div className="order-summary-item">
        <span>Total</span>
        <span>${totalPrice}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
