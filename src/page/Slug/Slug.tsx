import React, { useEffect } from 'react';
import { NavBar } from '../Navbar/Navbar';
import Tag from '../../components/Tag/Tag';
import style from './slug.module.css';
import AuthorInfo from './component/component';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchArticlesBySlug } from '../../store/article/slice';
import { useParams } from 'react-router-dom';
import { articleSelector } from '../../store/article/selector';

const Slug = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const { articles, isLoading, isSuccess } = useAppSelector(articleSelector);
  console.log(articles, 'articles');

  const articlesList =
    articles && articles.find(articles => articles.slug === slug);

  console.log(articlesList);

  useEffect(() => {
    if (slug) dispatch(fetchArticlesBySlug({ slug: slug }));
  }, [dispatch, slug]);

  return (
    <>
      <NavBar />
      {isSuccess && isLoading && (
        <>
          <div className={style.banner}>
            <div className={style.container}>
              <h1>{articlesList?.title}</h1>
              <AuthorInfo
                src={articlesList?.author.image}
                username={articlesList?.author.username}
                createdAt={articlesList?.createdAt}
                count={articlesList?.favoritesCount}
              />
            </div>
          </div>
          <div className={style.containerPage}>
            <div className={style.row}>
              <p className={style.paragraph}>{articlesList?.description}</p>
            </div>
            {articlesList?.tagList.map((data, index) => (
              <Tag key={index} tag={data} />
            ))}
            <hr className={style.hr} />
            <AuthorInfo
              src={articlesList?.author.image}
              username={articlesList?.author.username}
              createdAt={articlesList?.createdAt}
              count={articlesList?.favoritesCount}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Slug;
