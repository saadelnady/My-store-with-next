import React from "react";
import styles from "./styles/styles.module.scss";
import { useSelector } from "react-redux";
import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import { FormattedMessage } from "react-intl";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/future/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import ProductCard from "./productCard";
import { useRouter } from "next/router";
import { Grid, Pagination } from "swiper";
const SingleBrand = () => {
  const { category } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  const filteredProducts = products.filter(
    (product) => product.category._id === category?._id
  );

  const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="categories" />, url: "/categories" },
    { title: category.name },
  ];
  const { locale } = useRouter();

  const dir = locale === "ar" ? "rtl" : "ltr";

  const renderProductsItems =
    filteredProducts && filteredProducts.length > 0 ? (
      filteredProducts?.map((item, index) => (
        <SwiperSlide key={index}>
          <ProductCard product={item} />
        </SwiperSlide>
      ))
    ) : (
      <div className="no-data">
        <p>
          <FormattedMessage id="no-data" />
        </p>
      </div>
    );
  // const renderProducts = () => {
  //   if (filteredProducts && filteredProducts?.length > 0) {
  //     return filteredProducts?.map((product, index) => (
  //       <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
  //         <Link href={`/products/${product?._id}`}>
  //           <a>
  //             <div className="product">
  //               <div className="product-img">
  //                 <Image
  //                   src={product.imageCover}
  //                   alt={product.title}
  //                   width={500}
  //                   height={500}
  //                   priority
  //                   unoptimized
  //                 />
  //               </div>
  //               <h4 className="product-name">{product.title}</h4>
  //             </div>
  //           </a>
  //         </Link>
  //       </Col>
  //     ));
  //   }
  //   return (
  //     <p className="text-center">
  //       <FormattedMessage id="no-data" />
  //     </p>
  //   );
  // };

  return (
    <div className={styles.singleBrand}>
      <BreadCrumb items={items} />
      <Container>
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
                slidesPerView: 4,
                spaceBetween: 15,
                slidesPerGroup: 4,
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
                slidesPerView: 2,
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

export default SingleBrand;
