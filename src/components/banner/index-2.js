import React, { useEffect, useState } from "react";

import { bannerData } from "./data"; // استيراد البيانات
import styles from "./styles/newStyle.module.scss"; // استيراد التنسيقات
import Image from "next/future/image";
import { useRouter } from "next/router";
import IcArrow from "./assets/svgs/ic-arrow.svg";

const ImageSlider = () => {
  const { locale } = useRouter();
  const [activeSlide, setActiveSlide] = useState(1);
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  useEffect(() => {}, []);
  return (
    <div className={styles.slider}>
      {bannerData.length > 0 &&
        bannerData.map((item, index) => (
          <div
            className={`item ${index === activeSlide ? "active" : ""}`}
            key={index}
          >
            <div className="img">
              <Image src={item.image} alt="banner" />
            </div>
            <div className="content">
              <h3 className="title">{item.title[locale]}</h3>
              <p className="description">{item.description[locale]}</p>
            </div>
            <button className="arrow" onClick={() => handleSlideChange(index)}>
              <IcArrow />
            </button>
          </div>
        ))}
    </div>
  );
};

export default ImageSlider;
