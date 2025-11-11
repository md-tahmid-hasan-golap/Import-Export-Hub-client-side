import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const MyAddedProducts = ({ products, index, onDelete }) => {
  const { _id, image, name, price, origin, rating, quantity } = products;

  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://import-export-hub-server-side.vercel.app/products-delete/${_id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              onDelete(_id);

              Swal.fire({
                title: "Deleted!",
                text: "Product removed successfully.",
                icon: "success",
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <motion.div
      className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition flex flex-col"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded mb-4"
      />

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
      <p className="text-gray-700 mb-4">
        <span className="font-semibold text-blue-500">Available Quantity:</span>{" "}
        {quantity}
      </p>

      <div className="flex gap-3 mt-auto">
        <Link
          to={`/productDetails/${_id}`}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded hover:from-pink-500 hover:to-purple-500 transition"
        >
          <FaEye /> View
        </Link>

        <Link
          to={`/updateProducts/${_id}`}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
        >
          <FaPen /> Update
        </Link>

        <button
          onClick={() => handelDelete(_id)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          <FaTrash /> Delete
        </button>
      </div>
    </motion.div>
  );
};

export default MyAddedProducts;
