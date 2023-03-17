import React from 'react';

declare type TagProp = {
  tag: string;
};
const Tag = ({ tag }: TagProp) => {
  return <div className={style.tag}>{tag}</div>;
};

export default Tag;
