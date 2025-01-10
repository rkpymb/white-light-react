import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation,useNavigate } from "react-router-dom";
import { categories } from "../data/data";
 

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [ ' main/WhatsApp Image 2024-12-23 at 00.33.13_5e40ade4.jpg',
    ' main/WhatsApp Image 2024-12-23 at 00.33.13_5e40ade4.jpg', 
    'main/main-banner.png'
     
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Inline styles for HeroSlider
  const sliderStyle = {
    width: "100%",
    height: "300px", // Adjust height as needed
    overflow: "hidden",
  };

  const contentStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const slideStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    transition: "opacity 0.5s ease-in-out",
  };

  const activeSlideStyle = {
    ...slideStyle,
    opacity: 1,
  };

  // return (
  //   <section className="herobanner main-top" style={sliderStyle}>
  //     <div className="content"
  //     style={contentStyle}>
  //       {slides.map((slide, index) => (
  //         <div
  //           key={index}
  //           className={`slide ${index === currentIndex ? "active" : ""} ${
  //             index === (currentIndex - 1 + slides.length) % slides.length
  //               ? "exiting"
  //               : ""
  //           }`}
  //           style={index === currentIndex ? activeSlideStyle : slideStyle}
  //         >
  //           <img
  //             src={slide}
  //             alt={`Slide ${index + 1}`}
  //             style={{ width: "100%", height: "100%", objectFit: "cover" }}
  //           />
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
};

const CarouselAndCategories: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract subcategory name from the URL
  const subcategoryName = location.pathname.split("/")[2];

  // Find the category that contains the subcategory
  const category = categories.find((cat) =>
    cat.subcategories?.some(
      (subcat) => subcat.title.toLowerCase() === subcategoryName.toLowerCase()
    )
  );

  // Find the specific subcategory
  const subcategory = category?.subcategories?.find(
    (subcat) => subcat.title.toLowerCase() === subcategoryName.toLowerCase()
  );

  if (!subcategory) {
    return <div className="text-center mt-5">Subcategory not found</div>;
  }

  const handleSubcategoryClick = (title: string) => {
    // Navigate to a different page for the subcategory (if necessary)
    navigate(`/subsubcategory/${title}`, { state: { title } });
  };

  return (
    <div>
      {/* Hero Slider Section */}
      <img
                  
          src=""       
                  
                />

      {/* Categories Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4">Categories</h2>
        <div className="row">
        {subcategory.subsubcategories?.map((subsubcat, index) =>  (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="card text-center border-0 shadow-sm">
                <img
                  src={subsubcat.imgSrc}
                  className="card-img-top img-fluid"
                  alt={subsubcat.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{subsubcat.title}</h5>
                  <a onClick={() => handleSubcategoryClick(subsubcat.title)} className="btn btn-outline-dark">
                    Get it
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselAndCategories;
