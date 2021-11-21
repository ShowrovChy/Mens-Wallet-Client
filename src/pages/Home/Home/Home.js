import React from "react";
import Header from "../../Shared/Header/Header";
import AllReviews from "../AllReviews/AllReviews";
import Banner from "../Banner/Banner";
import HomeProducts from "../HomeProducts/HomeProducts";
import Subscription from "../Subscription/Subscription";

const Home = () => {
  window.scroll(0, 0);
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <AllReviews></AllReviews>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
