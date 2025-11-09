import React from "react";
import Banner from "./Banner";
import FeaturedCategories from "./FeaturedCategories";
import Testimonials from "./Testimonials";
import LatestProducts from "./LatestProducts";
import { useLoaderData } from "react-router";

const Home = () => {
  const latestProducts = useLoaderData();
  // console.log(latestProducts);
  return (
    <div>
      <Banner></Banner>
      <FeaturedCategories></FeaturedCategories>
      <LatestProducts latestProducts={latestProducts}></LatestProducts>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
