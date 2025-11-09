import React from "react";
import { data, useLoaderData } from "react-router";
import LatestProductsCard from "./LatestProductsCard";

const AllProducts = () => {
  const allData = useLoaderData();
  // console.log(allData);
  return (
    <div>
      <h2
        className="
        my-7
    text-3xl 
    md:text-4xl 
    lg:text-5xl 
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
        All Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allData.map((product) => (
          <LatestProductsCard
            key={product._id}
            product={product}
          ></LatestProductsCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
