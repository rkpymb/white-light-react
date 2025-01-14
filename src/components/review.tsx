// import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "../styles/owl.css"; // Import the updated CSS file

const Review: React.FC = () => {
  // Owl Carousel settings
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  };

  return (
    <div className="containerb">
      <div className="row">
        <div className="col-md-offset-2 col-md-10">
          <OwlCarousel className="owl-theme" {...options}>
            {/* Testimonial Item 1 */}
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://static.pexels.com/photos/529928/pexels-photo-529928.jpeg"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  Krystal
                  <small>Web Developer</small>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://static.pexels.com/photos/529928/pexels-photo-529928.jpeg"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  Krystal
                  <small>Web Developer</small>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.
                </div>
              </div>
            </div>

            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://static.pexels.com/photos/529928/pexels-photo-529928.jpeg"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  Krystal
                  <small>Web Developer</small>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.
                </div>
              </div>
            </div>

            
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="https://static.pexels.com/photos/529928/pexels-photo-529928.jpeg"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  Krystal
                  <small>Web Developer</small>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.
                </div>
              </div>
            </div>
            {/* Testimonial Item 2 */}
            <div className="item">
              <div className="testimonial">
                <div className="pic">
                  <img
                    src="/pictures/DSC_4189.JPG"
                    alt="Krystal"
                    className="img-responsive"
                  />
                </div>
                <div className="testimonial-info">
                  Krystal
                  <small>Web Developer</small>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis.
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Review;
