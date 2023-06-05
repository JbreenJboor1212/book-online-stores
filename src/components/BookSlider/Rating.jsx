import "./RatingColor.css";

const Rating = ({ x, review }) => {
  return (
    <div className="rating">
      {x >= 1 ? (
        <i className="bi bi-star-fill"></i>
      ) : x >= 0.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}
      {x >= 2 ? (
        <i className="bi bi-star-fill"></i>
      ) : x >= 1.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}
      {x >= 3 ? (
        <i className="bi bi-star-fill"></i>
      ) : x >= 2.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}
      {x >= 4 ? (
        <i className="bi bi-star-fill"></i>
      ) : x >= 3.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}
      {x >= 5 ? (
        <i className="bi bi-star-fill"></i>
      ) : x >= 4.5 ? (
        <i className="bi bi-star-half"></i>
      ) : (
        <i className="bi bi-star"></i>
      )}

     <div className="rating-two">
     <span >{x}</span>
      <span >({review} reviews)</span>
     </div>
    </div>
  );
};

export default Rating;
