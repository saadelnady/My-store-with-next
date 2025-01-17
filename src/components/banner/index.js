import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/style.module.scss";
import Image from "next/future/image";
import Banner from "./assets/images/banner.png";
import IcArrow from "./assets/svgs/ic-arrow.svg";
import { bannerData } from "./data";
import { useRouter } from "next/router";
import Link from "next/link";

const BannerComponent = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const { locale } = useRouter();
  const nextBanner = (index) => {
    if (index === bannerData?.length - 1) {
      return;
    }
    setActiveItem(index + 1);
  };

  const prevBanner = (index) => {
    if (index === 0) {
      return;
    }
    setActiveItem(index - 1);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX); // store touch start position
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX); // store touch end position
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStart - touchEnd > 100) {
      // Swiped left, go to the next banner
      nextBanner(activeItem);
    }

    if (touchEnd - touchStart > 100) {
      // Swiped right, go to the previous banner
      prevBanner(activeItem);
    }
  };

  return (
    <>
      <div className={styles["home-banner"]}>
        <div className="banner-container py-5">
          <Row
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-100 d-flex justify-content-center align-items-center"
          >
            {bannerData?.map((data, index, array) => {
              return (
                <Col
                  md={index === activeItem ? 10 : 1}
                  style={{
                    transition: "ease-in-out all 0.5s",
                  }}
                  key={index}
                  className={`column ${
                    index === activeItem ? "active-col" : ""
                  }`}
                >
                  <div
                    className={`image-div ${
                      index === activeItem ? "active" : ""
                    }`}
                    style={{
                      backgroundImage: `url("${data?.image?.src}")`,
                    }}
                    onClick={() => setActiveItem(index)}
                  >
                    <div className="overlay">
                      <Row className="w-100 h-100">
                        <Col className="temp-col" lg={7} md={6} xs={0}></Col>
                        <Col lg={5} md={6} xs={12} className="content">
                          <h1 className="title">{data?.title?.[locale]}</h1>
                          <p className="desc">{data?.description?.[locale]}</p>
                          <button className="btn rounded-1">
                            تعرف علي المزيد
                          </button>
                        </Col>
                        <button
                          className="item-switch-btn"
                          aria-label="button-switch-item"
                        >
                          <IcArrow />
                        </button>
                      </Row>
                    </div>
                    <button
                      className={`next-btn ${
                        activeItem === array.length - 1 ? "latest-next" : ""
                      }`}
                      aria-label="button-switch-item-next"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextBanner(index);
                      }}
                    >
                      <IcArrow />
                    </button>
                    <button
                      className={`prev-btn ${
                        activeItem === 0 ? "latest-prev" : ""
                      }`}
                      aria-label="button-switch-item-prev"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevBanner(index);
                      }}
                    >
                      <IcArrow />
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default BannerComponent;
