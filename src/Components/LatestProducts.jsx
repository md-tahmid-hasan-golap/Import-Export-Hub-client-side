import React from "react";
import LatestProductsCard from "./LatestProductsCard";

const LatestProducts = ({ latestProducts }) => {
  //   console.log(latestProducts);
  return (
    <div className="my-7">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Latest Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {latestProducts.map((product) => (
          <LatestProductsCard
            key={product._id}
            product={product}
          ></LatestProductsCard>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
