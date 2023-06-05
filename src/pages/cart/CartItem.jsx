import Image from "./Image";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  const { title, author, quantity, price, id } = item;

  return (
    <>
      <div key={id} className="cart-item">
        <Image item={item} />
        <div className="cart-item-info">
          <div>
            <div className="cart-item-book-title">
              <b>Title : </b>
              {title}
            </div>
            <div className="cart-item-book-author">
              <b>Author : </b>
              {author}
            </div>
          </div>

          <div>
            <div className="cart-item-quantity">
              <button
                disabled={quantity <= 1}
                onClick={() => {
                  addToCart({ ...item, quantity: item.quantity - 1 });
                }}
              >
                <i className="bi bi-dash-lg"></i>
              </button>
              <b>{quantity}</b>
              <button
                onClick={() => {
                  addToCart({ ...item, quantity: item.quantity + 1 });
                }}
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
            <div className="cart-items-price">
              $ {(price * quantity).toFixed(2)}
            </div>
            <i
              className="bi bi-trash-fill"
              onClick={() => {
                removeFromCart(id);
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
