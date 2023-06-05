import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import Rating from "../../components/BookSlider/Rating";
import "./book.css";
import { useContext, useState } from "react";
import CartContext from "../../context/cartContext";

const Books = () => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  //const book = books.find((b) => b.id === +id);
  //const book = books.find((b) => b.id == id);

  const [qty, setQty] = useState(1);

  const {
    image,
    title,
    author,
    rating,
    reviews,
    printLength,
    language,
    PublicationDate,
  } = book;
  return (
    <div className="book">
      <div className="book-content">
        <img src={`/books/${image}`} alt={title} className="book-content-img" />
        <div className="book-content-info">
          <h1 className="book-title">{title}</h1>
          <div className="book-authors">
            by <span>{author}</span> (Author)
          </div>
          <Rating review={reviews} x={rating} />
          <div className="book-add-to-cart">
            <input
              min="1"
              max="100"
              type="number"
              className="book-add-to-cart-input"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button
              onClick={() => addToCart({...book , quantity: qty})}
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
        voluptatibus sequi ducimus quibusdam non debitis quam eum. Tempora
        accusantium fugiat, pariatur ex maxime molestiae? Voluptatum eum
        blanditiis enim magni exercitationem! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Natus dignissimos nisi doloremque tempore
        magnam, fugiat eius animi magni explicabo, voluptatum at expedita.
        Voluptate quis nostrum, recusandae alias voluptates sunt sit.
      </p>
      <div className="book-icons">
        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <i className="bi bi-file-earmark-break" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h3>Print Length</h3>
              <p>{printLength} Pages</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <i className="bi bi-globe" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h3>Language</h3>
              <p>{language} </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <i className="bi bi-calendar3" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h3>Publication Date</h3>
              <p>{PublicationDate} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
