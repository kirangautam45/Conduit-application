import React from "react";
//@ts-ignore
import style from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={style.spinnerContainer}>
      <div className={style.spinnerLoading}></div>
    </div>
  );
};

export default Spinner;
