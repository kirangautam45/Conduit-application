import React from "react";
import Favorite from "./Favorite";
//@ts-ignore
import style from "./Home.module.css";
// @ts-ignore
import demo from "../../../assets/demoavatar.png";
import Tag from "./Tag";

const ArticleInfo = () => {
  const dateString = "2023-12-09T13:46:24.264Z";
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className={style.preview}>
        <div className={style.wrapper}>
          <img className={style.articleMeta} src={demo} alt="Article Info" />
          <div className={style.info}>
            <p className={style.infoArticle}> Kiran Gautam </p>
            <p className={style.infoDate}> {formattedDate} </p>
          </div>
        </div>

        <div className={style.rightButton}>
          <Favorite />
        </div>
      </div>
      <div className={style.headingText}>
        <h1 className={style.title}>
          If we quantify the alarm, we can get to the FTP pixel through the
          online SSL interface!
        </h1>
        <p className={style.description}>
          Omnis perspiciatis qui quia commodi sequi modi. Nostrum quam aut
          cupiditate est facere omnis possimus. Tenetur similique nemo illo
          soluta molestias facere quo. Ipsam totam facilis delectus nihil quidem
          soluta vel est omnis.
        </p>
        <div className={style.readMoreTag}>
          <span className={style.read}>Read more...</span>
          <div className={style.tagsWrapper}>
            <Tag tag="rerum" />
            <Tag tag="maiores" />
            <Tag tag="omnis" />
            <Tag tag="quae" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleInfo;
