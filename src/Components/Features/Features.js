import React from "react";
import styles from "./Features.module.css";
import CardBox from "./Card";
import Image from "next/image";

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
        {/* <div className={styles.gradientBack}></div> */}
        <div className={styles.columnDiv}>
          <CardBox
            height={30}
            width={30}
            src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/pratice-icon.png"
            title="Supervised Practice"
            desc=" Our platform provides a structured learning environment with hands-on
        practice and guidance powered by AI,"
          />
          <CardBox
            height={30}
            width={30}
            src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/educator-network.png"
            title="Trusted Educator Network"
            desc="We carefully curate a network of  highly qualified and vetted  educators, ensuring learners have"
          />
        </div>
        <div className={styles.singleDiv}>
          <p className={styles.singleDesc}>
            App that blends AI & human for accelerated language learning
          </p>
          <div className={styles.singleImgContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/iphone-image.png"
                fill
                alt="talk with ai"
              />
            </div>
          </div>
        </div>
        <div className={styles.columnDiv}>
          <CardBox
            height={30}
            width={30}
            src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/ai-ineraction.png"
            title="Peer and AI Interaction"
            desc="Learners can engage in  conversations  with AI and peers, in a safe and  supportive environment"
          />
          <CardBox
            height={29}
            width={34}
            src="https://outspoknweb.s3.us-east-2.amazonaws.com/Feature/supervised-icon.png"
            title="Supervised Practice"
            desc="Our platform provides a structured  learning environment with hands-on  practice and guidance powered by AI"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
