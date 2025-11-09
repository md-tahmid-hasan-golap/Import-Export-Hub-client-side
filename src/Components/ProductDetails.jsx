import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    image,
    name,
    price,
    origin,
    rating,
    quantity,
    createdAt,
    email,
    userName,
  } = product;

  const [importQty, setImportQty] = useState(0);

  const handleImport = () => {
    if (importQty <= 0 || importQty > quantity) return;

    Swal.fire({
      title: "Imported Successfully!",
      text: `You imported ${importQty} of ${name}`,
      icon: "success",
      confirmButtonColor: "#8b5cf6", // gradient match color
    });

    setImportQty(0);
  };

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-purple-600 font-semibold hover:underline"
        >
          <FaArrowLeftLong /> Back To Home
        </Link>
      </motion.div>

      {/* Product Card */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 md:flex gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Product Image */}
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 h-80 object-cover rounded mb-4 md:mb-0"
        />

        {/* Product Info */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {name}
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-purple-500">Price:</span> $
              {price}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-pink-500">Origin:</span>{" "}
              {origin}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-green-500">Rating:</span>{" "}
              {rating}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold text-blue-500">
                Available Quantity:
              </span>{" "}
              {quantity}
            </p>
          </div>

          {/* Import Now Section */}
          <div className="flex justify-center mt-4">
            <button
              onClick={handleImport}
              disabled={importQty <= 0 || importQty > quantity}
              className={`w-full sm:w-1/2 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-md ${
                importQty > 0 && importQty <= quantity
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Import Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
