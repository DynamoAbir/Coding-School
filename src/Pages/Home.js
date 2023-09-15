import React from "react";
import Banner from "../Components/Banner";
import Team from "../Components/Team";
import Features from "../Components/Features";
import CoursesHome from "../Components/CoursesHome";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CoursesHome></CoursesHome>
      <Features></Features>
      <Team></Team>
    </div>
  );
};

export default Home;
