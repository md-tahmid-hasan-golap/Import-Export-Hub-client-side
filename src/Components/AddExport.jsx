import axios from "axios";
import React, { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const AddExport = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    data.email = user.email;
    data.userName = user.displayName;
    data.createdAt = new Date();

    // console.log(data);

    axios
      .post("https://import-export-hub-server-side.vercel.app/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Add Product SuccessFully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <Link
        to="/"
        className="text-xl font-semibold flex items-center gap-2 mb-6"
      >
        <FaArrowLeftLong /> Back To Home
      </Link>

      {/* ✅ Title + Description */}
      <h2
        className="
          text-3xl 
          md:text-4xl 
          lg:text-5xl 
          font-bold 
          mb-4 
          text-center 
          bg-gradient-to-r 
          from-purple-500 
          via-pink-500 
          to-red-500 
          bg-clip-text 
          text-transparent
        "
      >
        Add New Export Product
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Add a product to your export list. Provide accurate product information
        so that others can import your product easily.
      </p>

      {/* ✅ FORM START */}
      <form onSubmit={handleAddProduct} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Product Name */}
          <div>
            <label className="label">Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Origin Country */}
          <div>
            <label className="label">Origin Country</label>
            <input
              type="text"
              name="origin"
              placeholder="Enter country name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="label">Rating</label>
            <input
              type="number"
              step="0.1"
              max="5"
              name="rating"
              placeholder="Rate out of 5"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Available Quantity */}
          <div>
            <label className="label">Available Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter available quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="label">Product Image (URL)</label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="btn w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold mt-4">
          Add Export/Product
        </button>
      </form>
    </div>
  );
};

export default AddExport;
