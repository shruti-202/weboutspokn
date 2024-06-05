import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.headerbg}>
      <div className={styles.headerLeft}>
        <h1 className={styles.headerHeading}>
          Improve your language with no mistakes
        </h1>
        <p className={styles.headerContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat.
        </p>
        <div className={styles.headerContentImages}>
          <div className={styles.googlePlayStore}>
            <Image
              src="https://outspoknweb.s3.us-east-2.amazonaws.com/header/GooglePlayStore.png"
              alt="Download from play store"
              fill
            />
          </div>
          <div className={styles.appStore}>
            <Image
              src="https://outspoknweb.s3.us-east-2.amazonaws.com/header/AppStore.png"
              alt="Download from app store"
              fill
            />
          </div>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerImg}>
          <Image
            src="https://outspoknweb.s3.us-east-2.amazonaws.com/HeaderMobile.png"
            alt="Header Image"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
