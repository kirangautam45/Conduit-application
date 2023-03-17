import React from "react";
//@ts-ignore
import style from "./Home.module.css";

declare type TagProp = {
  tag: string;
};
const Tag = ({ tag }: TagProp) => {
  return <div className={style.tag}>{tag}</div>;
};

export default Tag;
