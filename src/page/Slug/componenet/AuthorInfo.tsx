import React from 'react';
import Author from '../../../components/Author/Author';
import Favorite from '../../../components/Favorite/Favorite';
import Follow from '../../../components/Follow/Follow';
import style from './authorinfo.module.css';

const AuthorInfo = () => {
  return (
    <div className={style.articleWrapper}>
      <Author src={''} username={''} createdAt={''} />
      <Follow Follow={''} />
      <Favorite Count={ 0} />
    </div>
  );
};

export default AuthorInfo;
