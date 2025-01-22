import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router-dom";
import config from "../../data/config";

const ProductList = ({ subCatId }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // State for ListData, loading, and error
    const [ListData, setListData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Fetch ListData from API (POST request)
    const fetchListData = async () => {
        try {
            setLoading(true);
            setError(false);
            const response = await fetch(`${config.apiEndpoint}/open/products-list-by-subcat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    subCatId: subCatId,  // Send the subCatId in the body of the POST request
                }),
            });

            const data = await response.json();
            console.log('data.ListData', data.ListData)
            if (data.status && data.ListData) {
                setListData(data.ListData);
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
            console.error("Error fetching ListData:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchListData();  // Fetch data whenever subCatId changes
    }, [subCatId]);  // Using subCatId prop as a dependency

    const handleSubcategoryClick = (slug) => {
        navigate(`/product-data/${slug}`, { state: { slug } });
    };

    return (
        <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
            {loading ? (
                <div>
                    <div className="text-center">Loading...</div>
                </div>
            ) : error ? (
                <div>
                    <div className="text-center">Error fetching products</div>
                </div>
            ) : (
                <div>
                    {/* Product Cards Section */}
                    <div className="trending-section">
                        <div className="containerm">
                            <div className="trending-items">
                                {ListData.map((product, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            textDecoration: "none",
                                            color: "inherit",
                                            marginBottom: "20px",
                                        }}
                                    >
                                       
                                        <div className="trending-item">
                                            <img
                                                src={`${config.apiEndpoint}/images/${product.image}`}
                                                className="h-80 w-72 object-cover rounded-t-xl "
                                                alt={product.title}
                                            />
                                            <h3>{product.title}</h3>
                                            <p>{product.price}</p>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => handleSubcategoryClick(product.slug)}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
