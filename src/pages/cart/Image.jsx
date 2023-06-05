const Image = ({ item }) => {
  const { image } = item;

  return <img src={`/books/${image}`} alt={image} className="cart-item-img" />;
};

export default Image;
