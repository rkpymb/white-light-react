import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import config from "../../data/config";

import BackgroundAnimation from "../BackgroundAnimation";

const CommercialLedLight = () => {
    const [products, setProducts] = useState([
        {
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        },
        {
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        },
        {
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        },
        {
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        },{
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        }
        ,{
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        }
        ,{
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        }
        ,{
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        }
        ,{
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        }
        ,{
            name: 'this is title',
            image: '/images/p1.jpg',
            hoverImage: '/images/p2.jpg',
            url: ''

        }

    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const navigate = useNavigate();



    return (
        <div >
          


            <div>
                <div className="relative w-full px-0 md:px-5 py-8 overflow-y-hidden">
                  
                    <div className="section-header mb-8 text-center relative z-10 p-2">
                        <h2
                            className="text-xl lg:text-4xl font-bold"
                          
                        >
                            "Commercial Led Light"
                        </h2>
                    </div>

                    <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={2}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 2,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 2,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 2,
                    },
                }}
            >
                {products.map((category, index) => (
                    <SwiperSlide
                        key={index}
                        className="flex flex-col items-center justify-between cursor-pointer"
                    // onClick={() => handleCategoryClick(category.catId)}
                    >
                        <Link

                            to={`/product/`}
                            // className="trending-items"
                            className="relative shadow-lg rounded-lg p-2 cursor-pointer hover:shadow-2xl transition-shadow duration-300 overflow-hidden"

                        >
                            <div className="rounded- relative scale-110">
                                <img
                                    src={'/images/p1.jpg'}
                                    alt={'d'}
                                    className="h-40 w-full rounded-4xl object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                    style={{ objectFit: "cover" }}

                                />
                                
                                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-6 group-hover:opacity-50 opacity-70"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="black"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </p>
                            </div>


                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
                </div>
            </div>
        </div>
    );
};

export default CommercialLedLight;
