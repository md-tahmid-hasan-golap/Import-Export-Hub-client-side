import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const LatestProductsCard = ({ product, index }) => {
  const { image, name, price, origin, rating, quantity, _id } = product;

  return (
    <motion.div
      className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded mb-4"
      />

      {/* Product Info */}
      <h3 className="font-semibold text-lg text-gray-800 mb-1">{name}</h3>

      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Price:</span>{" "}
        <span className="text-purple-500">${price}</span>
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Origin:</span>{" "}
        <span className="text-pink-500">{origin}</span>
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Rating:</span>{" "}
        <span className="text-green-500">{rating}</span>
      </p>
      <p className="text-gray-600 mb-3">
        <span className="font-semibold">Available:</span>{" "}
        <span className="text-blue-500">{quantity}</span>
      </p>

      {/* See Details Button */}
      <Link
        to={`/productDetails/${_id}`}
        className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold px-4 py-2 rounded hover:from-pink-500 hover:to-purple-500 transition"
      >
        See Details <FaArrowRightLong />
      </Link>
    </motion.div>
  );
};

export default LatestProductsCard;
