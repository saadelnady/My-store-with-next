import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/future/image";
import { useRouter } from "next/router";

import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import icFacebook from "../../../public/images/ic-facebook.svg";
import icTwitetter from "../../../public/images/ic-twitter.svg";
import icLinkedin from "../../../public/images/ic-linkedin.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import BreadCrumb from "../shared/breadCrumb/BreadCrumb";
import styles from "./styles/styles.module.scss";
import { showToast } from "@/helpers/helpers";

const ProductComponent = () => {
  const { product } = useSelector((state) => state.products);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const intl = useIntl();
  const { locale } = useRouter();
  const [count, setCount] = useState(1);

  const dir = locale === "ar" ? "rtl" : "ltr";
  // -------------------------------------------------------------

  const totalStars = 5;
  const filledStars = Math.round(product?.ratingsAverage);

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    stars.push(i < filledStars ? "filled" : "empty");
  }
  // -------------------------------------------------------------

  const items = [
    { title: <FormattedMessage id="home" />, url: "/" },
    { title: <FormattedMessage id="products" />, url: "/products" },
    { title: product?.title },
  ];
  // -------------------------------------------------------------
  const socialMediaIcons = [
    {
      name: "Facebook",
      link: "https://facebook.com",
      imageSrc: icFacebook,
    },
    {
      name: "Twitter",
      link: "https://twitter.com",
      imageSrc: icTwitetter,
    },
    {
      name: "linkedin",
      link: "https://linkedin.com",
      imageSrc: icLinkedin,
    },
  ];

  const handleShareButton = (icon) => {
    const shareUrls = {
      Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,
      Twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        window.location.href
      )}&text=${encodeURIComponent("Check this out!")}`,
      Linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}`,
    };

    if (shareUrls[icon.name]) {
      window.open(shareUrls[icon.name], "_blank", "noopener,noreferrer");
    } else {
      console.log(`${icon.name} sharing is not supported.`);
    }
  };
  // -------------------------------------------------------------
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count === 1) {
      showToast("error", "countError", intl);

      return;
    }
    setCount(count - 1);
  };
  // -------------------------------------------------------------

  return (
    <div className={styles.productPage}>
      <BreadCrumb items={items} />
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="product-imgs">
              <div className="main-imgs">
                <Swiper
                  spaceBetween={10}
                  navigation
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Navigation, Thumbs, Autoplay, EffectFade]}
                  effect="fade"
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  dir={dir}
                >
                  {product?.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="main-img">
                        <Image
                          src={image}
                          alt={`product-image-${index}`}
                          priority={true}
                          width={500}
                          height={500}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="thumb-imgs">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={20}
                  slidesPerView={3}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                  freeMode
                  modules={[Navigation, Thumbs]}
                  dir={dir}
                >
                  {product?.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="product-thumb-img">
                        <Image
                          src={image}
                          alt={`product-thumbnail`}
                          width={100}
                          height={100}
                          priority={true}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="product-info">
              <h1>{product?.title}</h1>
              {product?.description && (
                <div>
                  <strong>
                    <FormattedMessage id="description" /> :
                  </strong>
                  <p>{product?.description}</p>
                </div>
              )}
              {product?.ratingsAverage && (
                <div className="rating">
                  <strong>
                    <FormattedMessage id="rating" /> :
                  </strong>
                  <div className="stars">
                    {stars.map((star, index) => (
                      <span
                        key={index}
                        className={`star ${star === "filled" ? "filled" : ""}`}
                      >
                        &#9733;
                      </span>
                    ))}
                    <span className="count"> ({product?.ratingsAverage})</span>
                  </div>
                </div>
              )}
              <div>
                <strong>
                  <FormattedMessage id="category" /> :
                </strong>
                <p> {product?.category?.name}</p>
              </div>
              <div>
                <strong>
                  <FormattedMessage id="brand" /> :
                </strong>
                <p> {product?.brand?.name}</p>
              </div>
              <div>
                <strong>
                  <FormattedMessage id="price" /> :
                </strong>

                {product?.priceAfterDiscount ? (
                  <div className="price-content">
                    {product?.priceAfterDiscount} <FormattedMessage id="egp" />
                    <strong className="mx-3">
                      <FormattedMessage id="insteadOf" />
                    </strong>
                    <del>
                      {product.price} <FormattedMessage id="egp" />
                    </del>
                  </div>
                ) : (
                  <div className="price-content">
                    {product?.price} <FormattedMessage id="egp" />
                  </div>
                )}
              </div>
              <div className="counter">
                <button onClick={handleIncrement}>+</button>
                <span>{count}</span>
                <button onClick={handleDecrement}>-</button>
              </div>
              <div className="buttons">
                <button className="btn border m-0 add-to-cart">
                  <FormattedMessage id="addToCart" />
                </button>
                <button className="btn wishlist">
                  <i className="bi bi-suit-heart "></i>
                </button>
              </div>
              {product?.ratingsQuantity && (
                <div>
                  <strong>
                    <FormattedMessage id="reviews" />:
                  </strong>
                  <p className="mx-2"> {product?.ratingsQuantity}</p>
                  <FormattedMessage id="review" />
                </div>
              )}
              <div className="social-media">
                <strong>
                  <FormattedMessage id="share" />:
                </strong>
                {socialMediaIcons.map((icon, index) => (
                  <button
                    className="btn mx-2 social-icon"
                    key={index}
                    onClick={() => {
                      handleShareButton(icon);
                    }}
                  >
                    <icon.imageSrc />
                  </button>
                ))}
              </div>
              {/* <p>
                <strong>
                  <FormattedMessage id="available-quantity" />:
                </strong>
                {product.quantity}
              </p> */}
              {/* <p>
                <strong>
                  <FormattedMessage id="soldNumber" />:
                </strong> 
                {product.sold}
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductComponent;
