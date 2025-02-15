import React from "react";
import styles from "./styles/styles.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.bullets}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
