import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // React Router Link
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    title: "Discover Global Products",
    description:
      "Browse the latest products from around the world and add them to your Imports with a single click.",
    buttonText: "See All Products",
    buttonLink: "/allProducts",
    bgImage:
      "https://i.ibb.co.com/DDSjCsDZ/pexels-dhruvi-desai-79381073-8710506.jpg",
  },
  {
    id: 2,
    title: "Add Your Exports",
    description:
      "Share your products with the world by adding them to the Export section effortlessly.",
    buttonText: "Add Export",
    buttonLink: "/addExport",
    bgImage: "https://i.ibb.co.com/TDNs6FPf/pexels-photo-2765586.webp",
  },
  {
    id: 3,
    title: "Manage Your Imports",
    description:
      "Track your imported products, check available quantity, and see detailed product information.",
    buttonText: "My Imports",
    buttonLink: "myImports",
    bgImage: "https://i.ibb.co.com/wDX1LbV/pexels-goumbik-590022.jpg",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 my-7">
      <Slider {...settings}>
        {slides.map(
          ({ id, title, description, buttonText, buttonLink, bgImage }) => (
            <div key={id}>
              <div
                className="h-[300px] sm:h-[400px] md:h-[500px] flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 text-white rounded-lg relative"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0  bg-opacity-40 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10 max-w-full sm:max-w-lg">
                  <h2
                    className="
    text-3xl 
    sm:text-4xl 
    md:text-5xl 
    lg:text-6xl 
    font-bold 
    mb-8 
    text-center 
    bg-gradient-to-r 
    from-purple-500 
    via-pink-500 
    to-red-500 
    bg-clip-text 
    text-transparent
  "
                  >
                    {title}
                  </h2>

                  <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg drop-shadow-lg">
                    {description}
                  </p>
                  <Link
                    to={buttonLink || "#"}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2 rounded shadow-lg transition"
                  >
                    {buttonText}
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Banner;
