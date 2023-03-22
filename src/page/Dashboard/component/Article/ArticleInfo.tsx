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
};

const ArticleInfo = ({
  demo,
  tag,
  count,
  slug,
  description,
  username,
  createdAt,
}: ArticleInfoProps) => {
  const Slugs = slug.replace(/-/g, ' ').slice(0, slug.indexOf('!') + 1);
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.preview}>
          <div className={style.leftContainer}>
            <Author src={demo} username={username} createdAt={createdAt} />
          </div>
          <div className={style.rightButton}>
            <Favorite Count={count} />
          </div>
        </div>

        <div className={style.headingText}>
          {/* link for slug Details */}

          <Link to={`/article/${slug}`} className={style.link}>
            <h1 className={style.title}>{Slugs}</h1>
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
      </div>
    </>
  );
};

export default ArticleInfo;
