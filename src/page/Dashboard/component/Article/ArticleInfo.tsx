import React from 'react';
import { Link } from 'react-router-dom';
import Favorite from '../../../../components/Favorite/Favorite';
import Tag from '../../../../components/Tag/Tag';
import Author from '../../../../components/Author/Author';
import style from './Article.module.css';

declare type ArticleInfoProps = {
  username: string;
  tag: string[];
  count: number;
  slug: string;
  description: string;
  createdAt: string;
  demo: string;
  title: string;
};

const ArticleInfo = ({
  demo,
  tag,
  count,
  slug,
  description,
  username,
  createdAt,
  title,
}: ArticleInfoProps) => {
  return (
    <>
      <hr className={style.wrapper} />
      <div className={style.preview}>
        <div className={style.leftContainer}>
          <Author src={demo} username={username} createdAt={createdAt} />
        </div>
        <div className={style.rightButton}>
          <Favorite Count={count.toString()} />
        </div>
      </div>

      <div className={style.headingText}>
        {/* link for slug Details */}

        <Link to={`/article/${slug}`} className={style.link}>
          <h1 className={style.title}>{title}</h1>
        </Link>
        <p className={style.description}>{description}</p>
        <div className={style.readMoreTag}>
          <span className={style.read}>Read more...</span>
          <div className={style.tagsWrapper}>
            {tag.map((data, index) => (
              <Tag key={index} tag={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleInfo;
