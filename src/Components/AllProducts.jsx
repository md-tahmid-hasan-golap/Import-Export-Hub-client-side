import React, { useState } from "react";
import { useLoaderData } from "react-router";
import LatestProductsCard from "./LatestProductsCard";
import { FaSearch } from "react-icons/fa";

const AllProducts = () => {
  const allData = useLoaderData();
  const [searchText, setSearchText] = useState("");

  // Filtered data based on search
  const filteredData = allData.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="mb-10 px-3 md:px-10">
      {/* Page Title */}
      <h2
        className="
        my-7
        text-3xl 
        md:text-4xl 
        lg:text-5xl 
        font-bold 
        text-center 
        bg-gradient-to-r 
        from-purple-500 
        via-pink-500 
        to-red-500 
        bg-clip-text 
        text-transparent
      "
      >
        All Products
      </h2>

      {/* Search Box - Right Aligned */}
      <div className="flex justify-end mb-8">
        <div className="relative w-full md:w-1/3 lg:w-1/4">
          <input
            type="text"
            placeholder="Search product by name..."
            className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        </div>
      </div>

      {/* Products Grid */}
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((product, index) => (
            <LatestProductsCard
              key={product._id}
              product={product}
              index={index}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No products found for "{searchText}"
        </p>
      )}
    </div>
  );
};

export default AllProducts;
