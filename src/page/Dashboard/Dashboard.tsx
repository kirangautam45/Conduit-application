import React, { useEffect } from "react";
import { NavBar } from "../Navbar/Navbar";
import ArticleInfo from "./component/ArticleInfo";
import Banner from "./component/Banner";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import Spinner from "../../components/Spinner";
import { articleSelector } from "../../store/article/selector";
import { getArticle } from "../../store/article/slice";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { articles } = useAppSelector(articleSelector);

  useEffect(() => {
    dispatch(getArticle());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Banner />
      {articles.length ? (
        articles.map((data, index) => (
          <ArticleInfo
            key={index}
            username={data.author.username}
            tag={data.tagList}
            count={data.favoritesCount}
            slug={data.slug}
            description={data.description}
            createdAt={data.createdAt}
            demo={data.author.image}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Dashboard;
