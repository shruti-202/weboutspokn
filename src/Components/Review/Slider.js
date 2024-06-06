import React, { useState, useEffect } from "react";
import styles from "./Review.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Slider = () => {
  const reviewArray = [
    {
      id: 1,
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "John carter",
      role: "Role, Company",
      src: "https://outspoknweb.s3.us-east-2.amazonaws.com/review/review-fake.png",
    },
    {
      id: 2,
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "John carter",
      role: "Role, Company",
      src: "https://outspoknweb.s3.us-east-2.amazonaws.com/review/review-fake.png",
    },
    {
      id: 3,
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "John carter",
      role: "Role, Company",
      src: "https://outspoknweb.s3.us-east-2.amazonaws.com/review/review-fake.png",
    },
    {
      id: 4,
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "John carter",
      role: "Role, Company",
      src: "https://outspoknweb.s3.us-east-2.amazonaws.com/review/review-fake.png",
    },
    {
      id: 5,
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "John carter",
      role: "Role, Company",
      src: "https://outspoknweb.s3.us-east-2.amazonaws.com/review/review-fake.png",
    },
    {
      id: 6,
      desc: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”",
      name: "John carter",
      role: "Role, Company",
      src: "https://outspoknweb.s3.us-east-2.amazonaws.com/review/review-fake.png",
    },
  ];
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={30}
      style={{ "--swiper-theme-color": "#185ba9" }}
      className="mySwiper"
      breakpoints={{
        1281: { slidesPerView: 3, spaceBetween: 40 },
        801: { slidesPerView: 2.5, spaceBetween: 30 },
        641: { slidesPerView: 1.6, spaceBetween: 10 },
        481: { slidesPerView: 1, spaceBetween: 10 },
        200: { slidesPerView: 1, spaceBetween: 10 },
      }}
    >
      {reviewArray.map((data, i) => {
        return (
          <SwiperSlide
            key={i}
            loop={true}
            centeredSlides={true}
            className={styles.sliderCard}
          >
            <p className={styles.desc}>{data.desc}</p>
            <div className={styles.reviewProfile}>
              <div className={styles.imgWrapper}>
                <Image
                  src={data.src}
                  width={50}
                  height={50}
                  alt={data.name}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className={styles.reviewProfileContent}>
                <h4 className={styles.reviewName}>{data.name}</h4>
                <p className={styles.reviewRole}>{data.role}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
