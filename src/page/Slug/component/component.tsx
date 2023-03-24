import React from 'react';
import Author from '../../../components/Author/Author';
import Favorite from '../../../components/Favorite/Favorite';
import Follow from '../../../components/Follow/Follow';
import style from './authorinfo.module.css';

const AuthorInfo = ({ src, username, createdAt, count }) => {
  return (
    <div className={style.articleWrapper}>
      <Author src={src} username={username} createdAt={createdAt} />
      <Follow Follow={`follow ${username}`} />
      <Favorite Count={count} />
    </div>
  );
};

export default AuthorInfo;
