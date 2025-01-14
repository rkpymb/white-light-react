import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import navlogo1 from "../../pictures/navlogo.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <a href="https://wa.me/9168948474?text=I'm%20interested%20in%20your%20light%20"> 
         Contact on WhatsApp for offer </a>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Left Section: Logo */}
        <div className="nav-left">
          <img src={navlogo1} height="50px" width="60px" />
          <Link to="/" className="logo-text">
            White Light
          </Link>
        </div>

        {/* Center Section: Links */}
        <div className={`nav-center ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          
          {/* Categories with Hover Dropdown */}
          <div className="nav-item dropdown">
            <Link to="/#" className="nav-link">
              Categories
            </Link>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="category/Architecturallight" className="dropdown-link">
                 Agicultal light 
                </Link>
                <ul className="dropdown-submenu">
                  <li><Link to="/subcategory/PESTOSERIES" className="dropdown-item"> PESTO SERIES</Link></li>
                  <li><Link to="category/Architecturallight" className="dropdown-item"> GLANZA SERIES</Link></li>
                  <li><Link to="/subcategory/DOMSERIES" className="dropdown-item"> DOME SERIES</Link></li>
                  <li><Link to="category/Architecturallight" className="dropdown-item"> COB SPOTLIGHT</Link></li>
                  <li><Link to="category/Architecturallight" className="dropdown-item"> PULLOUT SERIES</Link></li>
                  <li><Link to="category/Architecturallight" className="dropdown-item"> LASER BLADE SERIES</Link></li>
                  <li><Link to="category/Architecturallight" className="dropdown-item">  COB SPOTLIGHT/DOWN LIGHT</Link></li>
                
                
                
                
                </ul>
              </li>
              <li className="dropdown-item">
                <Link to="/#" className="dropdown-link">
                commercial led light
                </Link>
                <ul className="dropdown-submenu">
                <li><Link to="/subcategory/PESTOSERIES" className="dropdown-item">COB SPOTLIGHT </Link></li>
                  <li><Link to="category/Architecturallight" className="dropdown-item">GIMBAL DOWNLIGHT</Link></li>
                  <li><Link to="/subcategory/DOMSERIES" className="dropdown-item">ZOOM DOWNLIGHT</Link></li>
                     </ul>
              </li>
              <li className="dropdown-item">
                <Link to="/#" className="dropdown-link">
                cyliender lights
                </Link>
                <ul className="dropdown-submenu">
                  <li><Link to="/subcategory3" className="dropdown-item"> </Link></li>
                  <li><Link to="/subcategory4" className="dropdown-item">Subcategory 10</Link></li>
                </ul>
              </li>
              <li className="dropdown-item">
                <Link to="/#" className="dropdown-link">
                pannel down light
                </Link>
                <ul className="dropdown-submenu">
                <li><Link to="/subcategory/PESTOSERIES" className="dropdown-item">PANNEL LIGHT
                </Link></li>
                </ul>
              </li>
              <li className="dropdown-item">
                <Link to="/#" className="dropdown-link">
                garden light 
                </Link>
                <ul className="dropdown-submenu">
                  <li><Link to="/subcategory3" className="dropdown-item">Subcategory 7</Link></li>
                  <li><Link to="/subcategory4" className="dropdown-item">Subcategory 8</Link></li>
                </ul>
              </li>
              <li className="dropdown-item">
                <Link to="/#" className="dropdown-link">
                highway light 
                </Link>
                <ul className="dropdown-submenu">
                  <li><Link to="/subcategory3" className="dropdown-item">Subcategory 9</Link></li>
                  <li><Link to="/subcategory4" className="dropdown-item">Subcategory 10</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <Link to="/stationery" className="nav-link">Lighting</Link>
          <Link to="/sale" className="nav-link">Sale</Link>
          <Link to="/gift-card" className="nav-link">Gift Card</Link>
        </div>

        {/* Right Section: Log In and Cart */}
        <div className="nav-right">
          <Search size={20} className="icon" />
          <Link to="/cart" className="nav-cart">
            <ShoppingCart size={20} />
          </Link>
          <Menu
            size={25}
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
