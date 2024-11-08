import CartWidget from "./CartWidget";
import logo from "../../assets/logoCarne.png";
import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo en la izquierda */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/category/Achuras" className="nav-link">
                Achuras
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Premium" className="nav-link">
                Premium
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Tradicional" className="nav-link">
                Tradicional
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Gourmet" className="nav-link">
                Gourmet
              </Link>
            </li>
          </ul>

          <div className="navbar-cart">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
