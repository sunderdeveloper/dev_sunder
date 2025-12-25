import React from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import REACT from "../assets/react.png";
import REDUX from "../assets/redux.png";
import BOOTSTRAP from "../assets/bootstrap.png";
import TAILWIND from "../assets/tailwind.png";
import GIT from "../assets/github.png";
import CANVA from "../assets/canva.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IconsSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 1500 }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="w-full mb-10 px-6"
      >
        <SwiperSlide>
          <img src={HTML} alt="" className="w-24 mx-auto mt-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CSS} alt="" className="w-24 mx-auto mt-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={JS} alt="" className="w-24 mx-auto mt-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BOOTSTRAP} alt="" className="w-24 mx-auto mt-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TAILWIND} alt="" className="w-24 mx-auto mt-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={REACT} alt="" className="w-24 mx-auto mt-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={REDUX} alt="" className="w-24 mx-auto mt-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GIT} alt="" className="w-24 mx-auto mt-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CANVA} alt="" className="w-24 mx-auto mt-4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default IconsSlider;
