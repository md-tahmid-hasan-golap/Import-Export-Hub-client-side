import { Link, useLoaderData, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import axios from "axios";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();

  const navigate = useNavigate();
  const { _id, image, name, price, origin, rating, quantity } = product;

  const handleImport = () => {
    const importedProduct = {
      productId: _id,
      image,
      name,
      price,
      origin,
      rating,
      email: user.email,
      userName: user.displayName,
    };

    axios
      .post(
        "https://import-export-hub-server-side.vercel.app/imports",
        importedProduct
      )
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Imported Successfully!",
            text: `${name} is added to your imports.`,
            icon: "success",
            confirmButtonColor: "#8b5cf6",
          });
          navigate("/myImports");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Something went wrong!",
          text: "Try again later.",
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
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

      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 md:flex gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 h-80 object-cover rounded mb-4 md:mb-0"
        />

        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {name}
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="text-purple-600 font-semibold">Price:</span> $
              {price}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-pink-600 font-semibold">Origin:</span>{" "}
              {origin}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-green-600 font-semibold">Rating:</span>{" "}
              {rating}
            </p>
            <p className="text-gray-700">
              <span className="text-blue-600 font-semibold">Available:</span>{" "}
              {quantity}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleImport}
              className="w-full sm:w-1/2 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500"
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
