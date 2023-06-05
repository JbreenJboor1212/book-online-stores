import { Link } from "react-router-dom";

const LinkWrapper = () => {
  return (
    <div className="footer-links-wrapper">
      <div className="footer-links-item">
        <h3 className="footer-links-item-title">UseFull Links</h3>
        <ul className="footer-links">
          <Link className="footer-link" to={"/"}>
            Home
          </Link>
          <Link className="footer-link" to={"/authors"}>
            Authors
          </Link>
          <Link className="footer-link" to={"/about"}>
            About Us
          </Link>
          <Link className="footer-link" to={"/contact"}>
            Contact Us
          </Link>
          <Link className="footer-link" to={"/register"}>
            Register
          </Link>
        </ul>
      </div>

      <div className="footer-links-item">
        <h3 className="footer-links-item-title">Contact Information</h3>
        <div className="footer-address-wrapper">
          <div className="footer-address-item">
            <i className="bi bi-geo-alt-fill"></i>
            Palestine - Hebron - Yatta
          </div>
          <div className="footer-address-item">
            <i className="bi bi-telephone-fill"></i>
            +972 56-9716-385
          </div>
          <div className="footer-address-item">
            <i className="bi bi-envelope-fill"></i>
            181057@ppu.edu.ps
          </div>
        </div>
      </div>

      <div className="footer-links-item">
        <h3 className="footer-links-item-title">About Us</h3>
        <p className="footer-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          impedit in eius, earum incidunt doloribus, ut nobis quisquam pariatur
          aperiam similique ducimus placeat quis doloremque sint cupiditate
          quidem corporis perferendis? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Non aut maxime aspernatur, quod magni dolore,
          aliquid consectetur optio hic dolorum illum. Harum provident aut,
          adipisci deserunt laudantium ullam doloribus laboriosam.
        </p>
      </div>
    </div>
  );
};

export default LinkWrapper;
