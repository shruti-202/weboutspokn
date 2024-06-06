import React from "react";
import styles from "./Review.module.css";
import Slider from "./Slider";

const Review = () => {
  return (
    <div className={styles.reviewWrapper}>
      <h2 className={styles.reviewHeading}>What our users say?</h2>
      <div className={styles.reviewSlider}>
        <Slider />
      </div>
    </div>
  );
};

export default Review;
