import React from "react";
import { useNavigate } from "react-router-dom";
import commercial from "../../../pictures/comerical.png"
import panneldown from "../../../pictures/panneldown.png"
import arti from "../../../pictures/arti.png"
import Categories_chandeliers_2 from "../../../pictures/Categories_chandeliers_2.png"
import pannel from "../../../pictures/pannel.png"
import garden from "../../../pictures/garden.png"
import highbay from "../../../pictures/highbay.png"

const IconSlider = () => {
  const icons = [
    
    { name: 'CommercialLights', image:commercial },
    { name: 'PannelDownLight', image:panneldown  },
    { name: 'Architecturallight', image:arti },
    { name: 'Cylinderlight', image: Categories_chandeliers_2 }, 
    { name: 'PanelLight', image: pannel },
    { name: 'GardenLights ', image: garden  },
    { name: 'High-bayLight.', image: highbay },
    // { name: ' ', image: 'src/components/home/main/slider-banner/banner5.jpg', link: '/DomSpotlight' },
  ];

  const navigate = useNavigate();
  const handleCategoryClick = (categoryName: string) => {
    const category = icons.find((cat) => cat.name === categoryName); // Find category based on name
    if (category) {
      navigate(`/category/${categoryName}`, { state: { category } }); // Pass the category data in the state
    }
  };



  return (
    <div className="icon-grid">
      <div className="background-text">Categories</div> {/* Background Text */}
      <div className="icon-slider">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="icon-item"
            onClick={() => handleCategoryClick(icon.name)} // Pass category name on click
          >
            <div className="icon-circle">
              <img src={icon.image} alt={icon.name} />
            </div>
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSlider;

