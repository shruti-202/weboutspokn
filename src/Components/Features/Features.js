import React from "react";
import styles from "./Features.module.css";
import CardBox from "./Card";

const Features = () => {
  return (
    <div className={styles.featureWrap}>
      <div className={styles.headerWrap}>
        <h2 className={styles.heading}>
          What problem we are tying to solve and for who
        </h2>
        <p className={styles.desc}>
          54% of working professionals believe knowing a second language is
          important for their current job
        </p>
      </div>
      <div className={styles.featureContent}>
        <div className={styles.columnDiv}>
          <CardBox />
        </div>
        <div className={styles.singleDiv}></div>
        <div className={styles.columnDiv}></div>
      </div>
    </div>
  );
};

export default Features;
