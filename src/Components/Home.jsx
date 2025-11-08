import React from "react";
import Banner from "./Banner";
import FeaturedCategories from "./FeaturedCategories";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedCategories></FeaturedCategories>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
