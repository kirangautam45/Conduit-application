import React, { useEffect } from 'react';
import { NavBar } from '../Navbar/Navbar';
import ArticleInfo from './component/Article/ArticleInfo';
import Banner from './component/Banner';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { articleSelector } from '../../store/article/selector';
import { getArticle } from '../../store/article/slice';
import Tags from './component/DefaultTags';
import style from './Dashboard.module.css';
import Pagination from '../../components/pagination/pagination';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { articles, limit, offset, articlesCount, isLoading, isSuccess } =
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
      <div className={style.wrapper}>
        <h5>{articlesCount} Articles</h5>
        <div className={style.leftSide}>
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
        </div>

        <div className={style.rightSide}>
          <Tags />
        </div>
        {/* {offset > 1 && (
          <Pagination
          // limit={limit}
          // articlesCount={articlesCount}
          // handlePagination={undefined}
          />
        )} */}
      </div>
      <div className={style.pagination}>
        {!isLoading && isSuccess && <Pagination />}
      </div>
    </>
  );
};

export default Dashboard;
