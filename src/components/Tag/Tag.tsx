import React from 'react';
import style from './Tag.module.css';

declare type TagProp = {
  tag: string;
  color: string;
};
const Tag = ({ tag }: TagProp) => {
  return <div className={style.tag}>{tag}</div>;
};

export default Tag;
