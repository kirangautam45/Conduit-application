import React, { useEffect } from 'react';
import { NavBar } from '../Navbar/Navbar';
import Tag from '../../components/Tag/Tag';
//@ts-ignore
import style from './slug.module.css';
import AuthorInfo from './componenet/component';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { fetchArticlesBySlug } from '../../store/slug/slice';
import { useParams } from 'react-router-dom';
import { articleSlugSelector } from '../../store/slug/selector';

const Slug = () => {
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const { articleSlug, isLoading, isSuccess } =
    useAppSelector(articleSlugSelector);

  const description =
    articleSlug.body && articleSlug.body.replace(/(\r\n|\r|\n)/g, ' \n');


  useEffect(() => {
    if (slug) dispatch(fetchArticlesBySlug({ slug: slug }));
  }, [dispatch, slug]);

  return (
    <>
      <NavBar />
      {isSuccess && !isLoading && (
        <>
          <div className={style.banner}>
            <div className={style.container}>
              <h1>{articleSlug.title}</h1>
              <AuthorInfo
                src={articleSlug.author?.image}
                username={articleSlug.author?.username}
                createdAt={articleSlug.createdAt}
                count={articleSlug.favoritesCount.toString()}
              />
            </div>
          </div>
          <div className={style.containerPage}>
            <div className={style.row}>
              <p className={style.paragraph}>{description}</p>
            </div>

            {articleSlug.tagList.map((data, index) => (
              <Tag key={index} tag={data} />
            ))}
            <hr className={style.hr} />

            <AuthorInfo
              src={articleSlug.author?.image}
              username={articleSlug.author?.username}
              createdAt={articleSlug.createdAt}
              count={articleSlug.favoritesCount.toString()}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Slug;
