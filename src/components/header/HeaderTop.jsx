import { Link } from "react-router-dom";

const HeaderTop = ({ setToggle, toggle }) => {
  return (
    <div className="header-top">
      <div
        className="header-top-menu"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone"></i>
        +972 56-9716-385
      </div>
      <div className="header-top-text">Welcome To Online Book Store</div>
      <Link className="header-top-link" to={"/login"}>
        <i className="bi bi-person-fill"></i>
      </Link>
    </div>
  );
};

export default HeaderTop;
