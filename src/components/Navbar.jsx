import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import navlogo1 from "../../pictures/navlogo.png"
import config from "../data/config"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchCategories = async () => {
    try {
      setLoading(true);
    

      const response = await fetch(`${config.apiEndpoint}/open/category-list-all`, {
        method: "POST",  // Change to POST
        headers: {
          "Content-Type": "application/json",  
        },
        body: JSON.stringify({
          // Add any data you want to send in the request body (if required)
          // Example: categoryId: "some_id"
        }),
      });

      const data = await response.json();

      if (data.status && data.categories) {
        setCategories(data.categories);
      }
    } catch (err) {

      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
              {categories.map((item) => (
                <li className="dropdown-item"  key={item._id}>
                  <Link to={`/sub-categories/${item.catId}`} className="dropdown-link">
                  {item.title}
                  </Link>

                </li>
              ))}


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
