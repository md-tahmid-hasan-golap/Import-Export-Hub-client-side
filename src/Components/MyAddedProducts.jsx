import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const MyAddedProducts = ({ products, index }) => {
  const { image, name, price, origin, rating, quantity } = products;

  return (
    <motion.div
      className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition flex flex-col"
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
      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        {name}
      </h3>

      <p className="text-gray-700 mb-1">
        <span className="font-semibold text-purple-500">Price:</span> ${price}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold text-pink-500">Origin:</span> {origin}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold text-green-500">Rating:</span> {rating}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold text-blue-500">Available Quantity:</span>{" "}
        {quantity}
      </p>
    </motion.div>
  );
};

export default MyAddedProducts;
