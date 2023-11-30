import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Items = ({ achievementItems }) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        540: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination]}
      className="mySwiper">
      {achievementItems.map((achievementItem) => {
        const { id, img, name } = achievementItem;
        return (
          <SwiperSlide className="achievement-items card card-two" key={id}>
            <div className="achievement-img-wrapper">
              <img src={img} alt="" className="achievement-img" />
            </div>
            <br />
            <p className="name-achievement">{name}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Items;
