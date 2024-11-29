import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { useRouter } from "next/router";
import Image from "next/future/image";
import CustomHeading from "../shared/customHeading/CustomHeading";
import { FormattedMessage } from "react-intl";
const Categories = () => {
  const { locale } = useRouter();
  const { categories } = useSelector((state) => state.categories);
  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <Container>
      <CustomHeading
        title={<FormattedMessage id="categories" />}
        subTitle={<FormattedMessage id="categoriesSubtitle" />}
      />
      {categories && categories.length > 0 && (
        <div className="list" dir={dir}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            slidesPerView={4.5}
            breakpoints={{
              150: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 2.5,
              },
              500: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
            }}
            spaceBetween={20}
            effect="fade"
            autoplay={{
              delay: 3000,
            }}
            navigation
            dir={dir}
            key={dir}
          >
            {categories?.map((element, index) => {
              const { name, slug, image } = element;
              return (
                <SwiperSlide key={index}>
                  <div className="item">
                    <Image
                      src={image}
                      alt="category-img"
                      width={100}
                      height={100}
                      className="item-img"
                    />
                    <p>{name}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </Container>
  );
};

export default Categories;
