import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";

const HeaderMiddle = () => {
  const { cartItemsLength } = useContext(CartContext);

  return (
    <div className="header-middle">
      <Link className="header-middle-logo" to={"/"}>
        <b className="one">Book</b>
        <i className="bi bi-book"></i>
        <b className="two">Store</b>
      </Link>
      <div className="header-middle-search-box">
        <input
          className="header-middle-search-input"
          type="search"
          placeholder="Search in book store ..."
        />
        <i className="bi bi-search"></i>
      </div>
      <Link className="header-middle-card" to={"/cart"}>
        {cartItemsLength > 0 && (
          <b className="cart-notification">{cartItemsLength}</b>
        )}
        <i className="bi bi-cart2 cart"></i>
      </Link>
    </div>
  );
};

export default HeaderMiddle;
