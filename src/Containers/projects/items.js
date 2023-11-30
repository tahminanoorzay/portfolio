import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Items = ({ projectItems }) => {
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
      {projectItems.map((projectItem) => {
        const { id, img, name } = projectItem;
        return (
          <SwiperSlide className="project-items card card-two" key={id}>
            <div className="project-img-wrapper">
              <img src={img} alt="" className="project-img" />
            </div>
            <br />
            <p className="name-projects">{name}</p>
            <button>
              <a href="https://github.com/tahminanoorzay">Visit</a>
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Items;
