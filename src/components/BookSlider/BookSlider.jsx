import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import Modal from "../Model/Modal";
import "./book-slider.css";
import Rating from "./Rating";

const BookSlider = ({ data }) => {
  const { addToCart } = useContext(CartContext);

  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // handle modal
  const handleModel = (book) => {
    setOpenModal(true);
    setBookData(book);
    console.log(book);
  };

  const handleSlider = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="book-slider-container">
      <i
        className="bi bi-chevron-left book-slider-arrow-left "
        onClick={() => {
          if (slideIndex >= 0) {
            handleSlider("left");
          } else {
            setSlideIndex(data.length - 1);
          }
        }}
      ></i>
      <div
        className="book-slider-wrapper"
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
      >
        {data.map((item) => {
          return (
            <div className="book-slide-item" key={item.id}>
              <img
                src={`./books/${item.image}`}
                alt={item.title}
                className="book-slide-item-img"
              />
              <h3 className="book-slide-item-title">{item.title}</h3>
              <Rating x={item.rating} review={item.reviews} />
              <div className="book-slide-item-price">${item.price}</div>
              <div className="book-slider-icons-wrapper">
                <i
                  className="bi bi-eye-fill"
                  onClick={() => {
                    handleModel(item);
                  }}
                ></i>
                <i
                  className="bi bi-cart-plus"
                  onClick={() => {
                    addToCart({ ...item, quantity: 1 });
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>

      <i
        className="bi bi-chevron-right book-slider-arrow-right "
        onClick={() => {
          if (slideIndex <= data.length - 1) {
            handleSlider("right");
          } else {
            setSlideIndex(0);
          }
        }}
      ></i>
      {openModal && <Modal data={bookData} click={setOpenModal} />}
    </div>
  );
};

export default BookSlider;
