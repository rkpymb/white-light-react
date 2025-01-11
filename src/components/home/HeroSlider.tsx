import React, { useEffect, useState } from 'react'; 
import image2 from "../../../pictures/special/slide1.jpg"

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    image2,
     'main/special/homedecor.jpg', 
     'main/main-banner.png',
    
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="herobanner main-top">
      <div className="content">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''} ${
              index === (currentIndex - 1 + slides.length) % slides.length ? 'exiting' : ''
            }`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
