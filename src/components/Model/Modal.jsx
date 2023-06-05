import "./Modal.css";
import Rating from "../BookSlider/Rating";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";

const Modal = ({ data, click }) => {
  const { addToCart } = useContext(CartContext);

  const { image, title, inStock, rating, reviews, author, price, id } = data;

  const [qty, setQty] = useState(1);

  return (
    <div
      className="modal-container"
      onClick={() => {
        click(false);
      }}
    >
      <div
        className="modal-content"
        onClick={(event) => {
          /* ---- when click the content work stop setOpenClick ----- */
          event.stopPropagation();
        }}
      >
        <i
          className="bi bi-x-lg modal-icon"
          onClick={() => {
            click(false);
          }}
        ></i>
        <div className="modal-content-img">
          <img src={`./books/${image}`} alt={title} />
        </div>
        <div className="modal-content-info">
          <h5 className="modal-content-info-title">{title}</h5>
          <div className="modal-content-info-stock">
            <b>Statues : </b>
            {inStock ? "in Stock" : "not in stock"}
          </div>
          <Rating x={rating} review={reviews} />
          <div className="modal-content-info-author">
            <b className="author">Author : </b>
            {author}
          </div>
          <div className="modal-content-info-price">
            <b>Price : </b>${price}
          </div>
          <div className="modal-add-to-cart">
            <input
              type="number"
              min="1"
              max="100"
              className="modal-add-to-cart-input"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              className="modal-add-to-cart-btn"
              onClick={() => addToCart({ ...data, quantity: qty })}
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <Link to={`/book/${id}`} className="modal-content-info-link">
            See More Details!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
