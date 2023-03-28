import React from 'react';
import Author from '../../../components/Author/Author';
import Favorite from '../../../components/Favorite/Favorite';
import Follow from '../../../components/Follow/Follow';
import style from './authorinfo.module.css';

declare type AuthorInfoProps = {
  src: string;
  username: string;
  createdAt: string;
  count: string;
};

const AuthorInfo = ({ src, username, createdAt, count }: AuthorInfoProps) => {
  return (
    <div className={style.articleWrapper}>
      <Author src={src} username={username} createdAt={createdAt} />
      <Follow Follow={`follow ${username}`} />
      <Favorite Count={`Favorite Article (${count})`} />
    </div>
  );
};

export default AuthorInfo;
