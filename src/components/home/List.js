import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import Item from "./Item";

const List = ({ data }) => {
  return (
    <Swiper
      className="list"
      modules={[Navigation, Pagination, A11y, Autoplay]}
      slidesPerView={3.5}
      spaceBetween={50} // Add space between slides
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      style={{ display: "flex" }}
    >
      {data?.map((element, index) => (
        <SwiperSlide key={index}>
          <Item item={element} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default List;
