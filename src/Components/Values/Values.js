import React from "react";
import styles from "./Values.module.css";
import Image from "next/image";

const Values = () => {
  return (
    <div className={styles.valuesWrapper}>
      <div className={styles.leftValue}>
        <div className={styles.imgWrapper}>
          <Image
            src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/Feature1.png"
            alt="feature-1"
            fill
          />
        </div>
      </div>
      <div className={styles.rightValue}>
        <h2 className={styles.valueHeading}>
          Earn daily rewards on your idle tokens
        </h2>
        <p className={styles.valueDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Feugiat nulla suspendisse tortor aene. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse
          tortor aene.
        </p>
      </div>
    </div>
  );
};

export default Values;
