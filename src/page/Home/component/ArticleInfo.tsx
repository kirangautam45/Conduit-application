import React from "react";
import Favorite from "./Favorite";
import style from "./Home.module.css";
import demo from "../../../assets/demoavatar.png";
import Tag from "./Tag";

declare type ArticleInfoProps = {
  username: string;
  tag: string[];
  count: number;
  slug: string;
  description: string;
  createdAt: string;
};

const ArticleInfo = ({
  username,
  tag,
  count,
  slug,
  description,
  createdAt,
}: ArticleInfoProps) => {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  console.log("count", count);

  return (
    <>
      <div className={style.preview}>
        <div className={style.wrapper}>
          <img className={style.articleMeta} src={demo} alt="Article Info" />
          <div className={style.info}>
            <p className={style.infoArticle}> {username} </p>
            <p className={style.infoDate}> {formattedDate} </p>
          </div>
        </div>

        <div className={style.rightButton}>
          <Favorite Count={count} />
        </div>
      </div>
      <div className={style.headingText}>
        <h1 className={style.title}>{slug}</h1>
        <p className={style.description}>{description}</p>
        <div className={style.readMoreTag}>
          <span className={style.read}>Read more...</span>
          <div className={style.tagsWrapper}>
            {tag.map((data) => (
              <Tag tag={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleInfo;
