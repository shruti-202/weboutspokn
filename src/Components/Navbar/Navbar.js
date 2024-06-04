import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <h2>Navbar</h2>
      <Image
        src="https://outspokn-fr.s3.us-east-2.amazonaws.com/Outspokn-web/Outspokn-logo-new.png"
        alt="outspoknlogo"
        width={330}
        height={66}
      />
    </div>
  );
};

export default Navbar;
