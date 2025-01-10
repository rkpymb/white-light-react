import React from "react";
import { useNavigate } from "react-router-dom";

const IconSlider = () => {
  const icons = [
    
    { name: 'CommercialLights', image: 'main/comerical.png' },
    { name: 'PannelDownLight', image: 'main/panneldown.png'  },
    { name: 'Architecturallight', image: 'main/arti.png' },
    { name: 'Cylinderlight', image: 'main/Categories_chandeliers_2.png' }, 
    { name: 'PanelLight', image: 'main/pannel.png' },
    { name: 'GardenLights ', image: 'main/garden.png'  },
    { name: 'High-bayLight.', image: 'main/highbay.png'  },
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

