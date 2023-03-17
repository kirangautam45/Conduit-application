import React from 'react';
import style from './Tags.module.css';

const Tags = () => {
  return (
    <div className={style.tagsWrapper}>
      <p className={style.p}>Popular Tags</p>
      <div>
        <div className={style.tags}>implementations</div>
        <div className={style.tags}>welcome</div>
        <div className={style.tags}>welcome</div>
        <div className={style.tags}>samp</div>
      </div>
    </div>
  );
};

export default Tags;
