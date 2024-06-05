import React from "react";
import styles from "./Features.module.css";
import Image from "next/image";

const CardBox = ({ src, title, desc, height, width }) => {
  return (
    <div className={styles.CardBox}>
      <div className={styles.boxImage}>
        <Image src={src} alt="practice-icon" height={height} width={width} />
      </div>
      <h2 className={styles.boxHeading}>{title}</h2>
      <p className={styles.boxDesc}>{desc}</p>
    </div>
  );
};

export default CardBox;
