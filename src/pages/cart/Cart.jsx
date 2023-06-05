import "./Cart.css";
import OrderSummary from "./OrderSummary";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../context/cartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              item={item}
              removeFromCart={removeFromCart}
              addToCart={addToCart}
            />
          ))}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
