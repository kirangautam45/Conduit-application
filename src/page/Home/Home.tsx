import React from "react";
import { NavBar } from "../Navbar/Navbar";
import ArticleInfo from "./component/ArticleInfo";
import Banner from "./component/Banner";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <ArticleInfo />
    </div>
  );
};

export default Home;
