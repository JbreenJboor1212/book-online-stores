import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ left: toggle && "0" }} className="Navbar">
      <ul className="navbar-links">
        <Link
          to="/"
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Home
        </Link>
        <Link
          to={"/authors"}
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Authors
        </Link>
        <Link
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
          to={"/about"}
        >
          About us
        </Link>
        <Link
          to={"/contact"}
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Contact Us
        </Link>
        <Link
          to={"/register"}
          onClick={() => {
            setToggle(false);
          }}
          className="navbar-link"
        >
          Register
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
