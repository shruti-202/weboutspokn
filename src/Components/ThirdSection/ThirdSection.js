import React from "react";
import styles from "./ThirdSection.module.css";
import Image from "next/image";
import { MdOutlineMic } from "react-icons/md";

const ThirdSection = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.Left}>
        <h2 className={styles.heading}>
          Are you ready to take your English to the next level?
        </h2>
        <p className={styles.Content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat.
        </p>
        <div className={styles.googlePlayStore}>
          <Image
            src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/get-it-on-google-play-logo-white.png"
            alt="Download from play store"
            fill
          />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.waveAnimation}>
          <div id="a">
            <div className={styles.circleRipple}>
              <MdOutlineMic className={styles.mic} />
            </div>
          </div>
        </div>
        <div className={styles.rightImg}>
          <Image
            src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/cta-phone.png"
            alt="USPs"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
