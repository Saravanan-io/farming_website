import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">🌱 FarmFresh</Link>
        </div>
        <div className="nav-menu">
          <Link 
            to="/" 
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
          <Link 
            to="/products" 
            className={location.pathname === "/products" ? "nav-link active" : "nav-link"}
          >
            Products
          </Link>
          <Link 
            to="/join" 
            className={location.pathname === "/join" ? "nav-link active" : "nav-link"}
          >
            Join Us
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;