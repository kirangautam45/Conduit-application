import React from "react";
import styles from "./Home.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.header}>conduit</h1>

      <p className={styles.paragraph}>A place to share your knowledge</p>
    </div>
  );
};

export default Banner;
