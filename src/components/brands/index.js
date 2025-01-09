import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper";
import { useRouter } from "next/router";
import Image from "next/future/image";
import CustomHeading from "../shared/customHeading/CustomHeading";
import { FormattedMessage } from "react-intl";
import styles from "./styles/styles.module.scss";
import Link from "next/link";
const Brands = () => {
  const { locale } = useRouter();
  const { brands } = useSelector((state) => state.brands);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div className={styles.brands}>
      <Container>
        <CustomHeading
          title={<FormattedMessage id="brands" />}
          subTitle={<FormattedMessage id="brandsSubtitle" />}
        />
        {brands && brands.length > 0 && (
          <div className="list" dir={dir}>
            <div className="swiper-container">
              <Swiper
                modules={[A11y, Autoplay, Navigation]}
                slidesPerView={4.5}
                breakpoints={{
                  150: { slidesPerView: 2 },
                  320: { slidesPerView: 2.5 },
                  500: { slidesPerView: 3 },
                  640: { slidesPerView: 2.5, spaceBetween: 15 },
                  1024: { slidesPerView: 3.5, spaceBetween: 20 },
                  1280: { slidesPerView: 5, spaceBetween: 25 },
                }}
                spaceBetween={20}
                effect="fade"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation
                style={{ display: "flex" }}
                dir={dir}
                key={dir}
              >
                {brands?.map((element, index) => {
                  const { image } = element;
                  return (
                    <SwiperSlide key={index}>
                      <Link href={`/brands/${element._id}`}>
                        <a>
                          <div className="item">
                            <Image
                              src={image}
                              alt="category-img"
                              width={100}
                              height={100}
                              className="item-img"
                            />
                          </div>
                        </a>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Brands;
