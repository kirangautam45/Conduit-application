import React from 'react';

import style from './Author.module.css';

declare type AuthorProps = {
  src: string;
  username: string;
  createdAt: string;
};

const Author = ({ src, username, createdAt }: AuthorProps) => {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={style.leftContainer}>
      <img className={style.articleMeta} src={src} alt="Author Info" />
      <div className={style.info}>
        <p className={style.infoArticle}> {username} </p>
        <p className={style.infoDate}> {formattedDate} </p>
      </div>
    </div>
  );
};

export default Author;
