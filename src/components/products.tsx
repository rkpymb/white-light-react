import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import { categories } from "../data/data";

const Pesto = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract subsubcategory name from the URL
  const subsubcategoryName = location.pathname.split("/")[2];

  // Find the category containing the subsubcategory
  const category = categories.find((cat) =>
    cat.subcategories?.some((subcat) =>
      subcat.subsubcategories?.some(
        (subsubcat) =>
          subsubcat.title.toLowerCase() === subsubcategoryName.toLowerCase()
      )
    )
  );

  // Find the specific subsubcategory
  const subsubcategory = category?.subcategories
    ?.flatMap((subcat) => subcat.subsubcategories || [])
    .find(
      (subsubcat) =>
        subsubcat.title.toLowerCase() === subsubcategoryName.toLowerCase()
    );

  if (!subsubcategory) {
    return <div className="text-center mt-5">Subsubcategory not found</div>;
  }

  const handleSubcategoryClick = (id: number) => {
    // Navigate to a different page for the subcategory
    navigate(`/pro/${id}`, { state: { id } });
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      {/* Navbar Placeholder */}
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            {subsubcategory.name}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center my-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>{subsubcategory.name}</h1>
            <p>{subsubcategory.description}</p>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.whiteteak.com/media/catalog/category/marquee-collection_exclusive-collection-banner.jpg"
              alt="Crystal Chandelier"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn mx-2"
            style={{
              borderColor: "#746B61",
              color: "#746B61",
              backgroundColor: "transparent",
              borderWidth: "2px",
              borderStyle: "solid",
              fontWeight: 800,
            }}
          >
            Best Sellers
          </button>
          <button
            className="btn mx-2"
            style={{
              borderColor: "#746B61",
              color: "#746B61",
              backgroundColor: "transparent",
              borderWidth: "2px",
              borderStyle: "solid",
              fontWeight: 800,
            }}
          >
            New Arrivals
          </button>
          <button
            className="btn mx-2"
            style={{
              borderColor: "#746B61",
              color: "#746B61",
              backgroundColor: "transparent",
              borderWidth: "2px",
              borderStyle: "solid",
              fontWeight: 800,
            }}
          >
            Deals
          </button>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="trending-section">
        <div className="containerm">
          <div className="trending-items">
            {subsubcategory.products?.map((product, index) => (
              <div
                key={index}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginBottom: "20px",
                }}
              >
                <div className="trending-item">
                  <img src={product.imgSrc} 
                  className="h-80 w-72 object-cover rounded-t-xl transition-opacity duration-300 hover:opacity-0 bg-gray-300"
                  alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSubcategoryClick(product.id)}
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pesto;
