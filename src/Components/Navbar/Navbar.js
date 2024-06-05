import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <h2>Navbar</h2>
      <div className={styles.imgWrapper}>
        <Image
          src="https://outspokn-fr.s3.us-east-2.amazonaws.com/Outspokn-web/Outspokn-logo-new.png"
          alt="outspoknlogo"
          fill
        />
      </div>
    </div>
  );
};

export default Navbar;
