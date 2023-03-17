import React from 'react';
import Favorite from '../Favorite';
import style from '../Home.module.css';
import Tag from '../../../../components/Tag/Tag';

declare type ArticleInfoProps = {
  username: string;
  tag: string[];
  count: number;
  slug: string;
  description: string;
  createdAt: string;
  demo: string;
};

const ArticleInfo = ({
  username,
  tag,
  count,
  slug,
  description,
  createdAt,
  demo,
}: ArticleInfoProps) => {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const Slugs = slug.replace(/-/g, ' ').slice(0, slug.indexOf('!') + 1);
  return (

    <>
      <div className={style.wrapper}>
        <div className={style.preview}>
          <img className={style.articleMeta} src={demo} alt="Article Info" />
          <div className={style.info}>
            <p className={style.infoArticle}> {username} </p>
            <p className={style.infoDate}> {formattedDate} </p>
          </div>
        </div>
        <div className={style.rightButton}>
          <Favorite Count={count} />
        </div>
      </div>
      <div className={style.headingText}>
        <h1 className={style.title}>{Slugs}</h1>
        <p className={style.description}>{description}</p>
        <div className={style.readMoreTag}>
          <span className={style.read}>Read more...</span>
          <div className={style.tagsWrapper}>
            {tag.map((data, index) => (
              <Tag key={index} tag={data} color={'#aaa'} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleInfo;
