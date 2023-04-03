import React, { useEffect } from 'react';
import { NavBar } from '../Navbar/Navbar';
import ArticleInfo from './component/Article/ArticleInfo';
import Banner from './component/Banner';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { articleSelector } from '../../store/article/selector';
import { getArticle } from '../../store/article/slice';
import Tags from './component/DefaultTags';
import Pagination from '../../components/pagination/pagination';
import Footer from '../Footer/Footer';
//@ts-ignore
import style from './Dashboard.module.css';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { articles, limit, offset, isLoading, isSuccess } =
    useAppSelector(articleSelector);

  useEffect(() => {
    dispatch(
      getArticle({
        limit: limit,
        offset: offset,
      }),
    );
  }, [dispatch, limit, offset]);

  return (
    <>
      <NavBar />
      <Banner />

      {isLoading && !isSuccess && (
        <div className={style.wrapper}>Article Loading... </div>
      )}
      {isSuccess && (
        <>
          <div className={style.wrapper}>
            <div className={style.leftSide}>
              {articles.map((data, index) => (
                <ArticleInfo
                  key={index}
                  username={data.author.username}
                  tag={data.tagList}
                  count={data.favoritesCount}
                  slug={data.slug}
                  title={data.title}
                  description={data.description}
                  createdAt={data.createdAt}
                  demo={data.author.image}
                />
              ))}
              {!isLoading && isSuccess && <Pagination />}
            </div>

            <div className={style.rightSide}>
              <Tags />
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
