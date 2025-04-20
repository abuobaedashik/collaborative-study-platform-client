import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ban1 from "../../assets/Hero_Banner_Desktop@2x.avif";
import ban2 from "../../assets/windows-KXIWqtmvfxg-unsplash.jpg";
import ban3 from "../../assets/phyo-min-cIocF-SSZiM-unsplash.jpg";
import ban4 from "../../assets/smartworks-coworking-Uz8THWPXwhI-unsplash.jpg";
import ban5 from "../../assets/walls-io-2BNiI2DV9GI-unsplash.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";

const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="flex items-center flex-col justify-center gap-6 text-2xl font-bold text-white brightness-50  h-[550px] bg-cover bg-center object-cover bg-no-repeat"
            style={{ backgroundImage: `url(${ban1})` }}
          >
            <div className="text-[#FFF100] text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Collaborative Study Platform
            </div>
            <NavLink
              to={"/dashboard"}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition z-10"
            >
              Go To Dashboard
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center flex-col justify-center gap-6 text-2xl font-bold text-white brightness-50  h-[550px] bg-cover object-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ban2})` }}
          >
            <div className="text-[#FFD65A] text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Empowering Students Through Technology
            </div>
            <NavLink
              to={"/dashboard"}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition z-10"
            >
              Go To Dashboard
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center flex-col justify-center gap-6 text-2xl font-bold text-white brightness-50  h-[550px] bg-cover bg-center object-cover bg-no-repeat"
            style={{ backgroundImage: `url(${ban3})` }}
          >
            <div className="text-white text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Smart Tools for Smarter Learning
            </div>
            <NavLink
              to={"/dashboard"}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition z-10"
            >
              Go To Dashboard
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center flex-col justify-center object-cover gap-6 text-2xl font-bold text-white brightness-50  h-[550px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ban4})` }}
          >
            <div className="text-[#FF6600] text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Learn Together. Grow Together
            </div>
            <NavLink
              to={"/dashboard"}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition z-10"
            >
              Go To Dashboard
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center flex-col justify-center object-cover gap-6 text-2xl font-bold text-white brightness-50  h-[550px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ban5})` }}
          >
            <div className="text-[#FF0000] text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Your Gateway to Future Excellence
            </div>
            <NavLink
              to={"/dashboard"}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition z-10"
            >
              Go To Dashboard
            </NavLink>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
