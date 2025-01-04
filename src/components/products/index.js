import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import CustomHeading from "../shared/customHeading/CustomHeading";
import styles from "./styles/styles.module.scss";
import ProductCard from "./productCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Pagination } from "swiper";
import { useRouter } from "next/router";
const Products = () => {
  const { locale } = useRouter();
  const { products } = useSelector((state) => state.products);
  const dir = locale === "ar" ? "rtl" : "ltr";

  const renderProductsItems =
    products &&
    products.length > 0 &&
    products?.reverse()?.map((item, index) => (
      <SwiperSlide key={index}>
        <ProductCard product={item} />
      </SwiperSlide>
    ));
  return (
    <div className={styles.products}>
      <Container>
        <CustomHeading
          title={<FormattedMessage id="products" />}
          subTitle={<FormattedMessage id="productsSubtitle" />}
        />
        {/* desktop-slider */}

        <div className="desktop-slider">
          <Swiper
            key={dir}
            dir={dir}
            grid={{
              rows: 2,
              fill: "row",
            }}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                  rows: 2,
                },
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
                slidesPerGroup: 3,
                grid: {
                  rows: 2,
                },
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 15,
                slidesPerGroup: 3,
                grid: {
                  rows: 2,
                },
              },
            }}
            spaceBetween={15}
            pagination={{
              dynamicBullets: true,
              type: "bullets",
              clickable: true,
            }}
            modules={[Grid, Pagination]}
          >
            {renderProductsItems}
          </Swiper>
        </div>

        {/* mobile slider */}
        <Col className={"mobileOnlySlider"}>
          <Swiper
            key={dir}
            dir={dir}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              dynamicBullets: true,
              type: "bullets",
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {renderProductsItems}
          </Swiper>
        </Col>
      </Container>
    </div>
  );
};

export default Products;
