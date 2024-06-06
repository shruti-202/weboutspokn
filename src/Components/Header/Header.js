import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
// Dynamically import lottie-react to ensure it only loads on the client side
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const Header = ({ lottieUrl }) => {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    const fetchLottieData = async () => {
      try {
        const response = await fetch(lottieUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching Lottie animation data:", error);
      }
    };

    fetchLottieData();
  }, [lottieUrl]);
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
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerImg}>
          <Image
            src="https://outspoknweb.s3.us-east-2.amazonaws.com/header/HeaderMobile.png"
            alt="Header Image"
            fill
          />
        </div>
        <div className={styles.lottieAnimation}>
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Header;
