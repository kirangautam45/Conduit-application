import React from "react";
import demo from "../../../assets/demoavatar.png";
import Favorite from "./Favorite";
import style from "./Home.module.css";

const ArticleInfo = () => {
  return (
    <div className={style.preview}>
      <div className={style.wrapper}>
        <img className={style.articleMeta} src={demo} alt="Article Info" />
        <div className={style.info}>
          <p className={style.infoArticle}> Kiran Gautam </p>
          <p className={style.infoDate}> December 9 2022 </p>
        </div>
      </div>

      <div className={style.rightButton}>
        <Favorite />
      </div>
    </div>
  );
};

export default ArticleInfo;
