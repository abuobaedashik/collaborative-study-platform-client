import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ban1 from "../../assets/Hero_Banner_Desktop@2x.avif";
import ban2 from "../../assets/ChatGPT Image Apr 13, 2025, 07_56_30 PM.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="flex items-center justify-center text-2xl font-bold text-white h-[400px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ban1})` }}
          >
             <div className="text-4xl font-bold text-[#0A043C]"> Collaborative Study Platform</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ban2} className="w-full h-[500px] " alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
