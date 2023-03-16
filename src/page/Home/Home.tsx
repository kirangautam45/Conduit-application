import React, { useEffect } from "react";
import { NavBar } from "../Navbar/Navbar";
import ArticleInfo from "./component/ArticleInfo";
import Banner from "./component/Banner";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import Spinner from "../../components/Spinner";
import { articleSelector } from "../../store/article/selector";
import { getArticle } from "../../store/article/slice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { articles } = useAppSelector(articleSelector);
  console.log("article", articles);



  useEffect(() => {
    dispatch(getArticle());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Banner />
      {articles.length ? (
        articles.map((data) => (
          <ArticleInfo
            username={data.author.username}
            tag={data.tagList}
            count={data.favoritesCount}
            slug={data.slug}
            description={data.description}
            createdAt={data.createdAt}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
