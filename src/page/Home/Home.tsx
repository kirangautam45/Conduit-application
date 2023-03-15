import React from "react";
import { NavBar } from "../Navbar/Navbar";
import ArticleInfo from "./component/ArticleInfo";
import Banner from "./component/Banner";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import { articleSelector } from "../../store/article/selector";

const Home = () => {
  // const dispatch = useDispatch();
  const { articleList, isLoading } = useSelector(articleSelector);
  console.log(articleList);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <NavBar />
      <Banner />
      <ArticleInfo />
      <ArticleInfo />
      <ArticleInfo />
    </div>
  );
};

export default Home;
