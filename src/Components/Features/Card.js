import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";

const CardBox = () => {
  return (
    <div className={styles.CardBox}>
      <Image
        src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/pratice-icon.png"
        alt="practice-icon"
        height={40}
        width={40}
      />
      <h2>hello</h2>
    </div>
  );
};

export default CardBox;
