import React from "react";
// @ts-ignore
import heart from "../../../assets/heart.png";
// @ts-ignore
import style from "./Home.module.css";

const Favorite = () => {
  return (
    <button className={style.btn}>
      <img className={style.btnImg} src={heart} alt="Favorite Button" />
      617
    </button>
  );
};

export default Favorite;
