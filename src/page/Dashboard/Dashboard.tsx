import React, { useEffect } from 'react';
import { NavBar } from '../Navbar/Navbar';
import ArticleInfo from './component/Article/ArticleInfo';
import Banner from './component/Banner';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { articleSelector } from '../../store/article/selector';
import { getArticle } from '../../store/article/slice';
import Tags from './component/DeafultTags';
import style from './Dashboard.module.css';

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
      <div className={style.wrapper}>
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
          <div> Article Loading...</div>
        )}

        <div className={style.rightSide}>
          <Tags />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
