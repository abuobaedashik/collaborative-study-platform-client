import bannerimg from "../../../src/assets/image/collebrating.jpg";
import icon1 from "../../../src/assets/image/iconbg1.png";
import icon2 from "../../../src/assets/image/sparkles.png";
import icon3 from "../../../src/assets/image/iconbg3.png";
import svg from "../../../src/assets/image/Untitled.svg";
import ban2 from "../../assets/banner-img1.jpg";
import ban1 from "../../assets/banner-img2.jpg";
// import ban3 from "../../assets/banner-img3.avif";
import ban4 from "../../assets/banner-img4.jpg";
import ban5 from "../../assets/banner-img5.jpg";
import logo1 from "../../../src/assets/collaboration/ten minute school.png";
import logo2 from "../../../src/assets/collaboration/shikho.png";
import logo3 from "../../../src/assets/collaboration/gai-logo-2.png";
import logo4 from "../../../src/assets/collaboration/bteb.jpg";
import logo5 from "../../../src/assets/collaboration/ict-logo.png";
import logo6 from "../../../src/assets/collaboration/ulab.png";
import logo7 from "../../../src/assets/collaboration/ph2.jpg";
import logo8 from "../../../src/assets/collaboration/diu-logo.png";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className=" bg-[#ffffff] ">
      <div className="p-[33px]"></div>
      <div className=" min-h-[75vh] overflow-hidden w-11/12 mx-auto py-14">
        {/* <SwiperSlider></SwiperSlider> */}
        <div className="banner-full  gap-[14px] sm:flex items-center justify-center ">
          {/* left side text */}
          <div className="left-side-text sm:w-[49%] w-full flex flex-col gap-4 items-start justify-center p-3">
            <div className="title-small text-lg text-[#fe753f] font-nunito">
              Collaborative Learning, Smart Future
            </div>
            <div className="title-banner text-[#1a2330] font-extrabold text-[2.7rem] leading-[2.9rem] tracking-normal  font-roboto ">
              Join our growin community where learners and tutors thrive
              together.
            </div>
            <div className="title-subtitle text-[#486b9b] text-sm font-normal font-nunito">
              Become a part of our ever-growing community, where passionate
              learners and dedicated tutors collaborate closely to unlock
              academic excellence and shape a brighter future together.
            </div>
            <button className="button text-base text-[#ffffff] font-inter bg-[#1a2330] font-semibold px-2 py-1 rounded-md">
              Get Start
            </button>
          </div>
          {/* right side slide */}
          <div className="left-side-text overflow-hidden sm:w-[49%] w-full flex flex-col gap-4 items-start justify-center p-3">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              initialSlide={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper w-full sm:w-full"
            >
              <SwiperSlide className="">
                <img
                  src={ban1}
                  className="w-full h-40 sm:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={ban2}
                  className="w-full h-40 sm:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide>
              {/* <SwiperSlide>
                <img
                  src={ban3}
                  className="w-full h-40 sm:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide> */}
              <SwiperSlide>
                <img
                  src={ban4}
                  className="w-full h-40 sm:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={ban5}
                  className="w-full h-40 sm:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={ban1}
                  className="w-full h-40 sm:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide>

              {/* <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  className="w-full h-40 sm:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                  className="w-full h-40 sm:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  className="w-full h-40 sm:h-[360px] object-cover rounded-lg"
                />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
        {/* marque */}
        <div className="p-3">
          <Marquee pauseOnHover={true} speed={50} className="mt-10 ">
            <div className="flex items-center justify-center gap-5">
              <div>
                <div className="logo-img1 ">
                  <img
                    src={logo1}
                    alt="logo1"
                    className="w-full h-[100px] overflow-hidden"
                  />
                </div>
              </div>
              <div>
                <div className="logo-img2">
                  <img src={logo2} alt="logo2" className="w-full h-[100px]" />
                </div>
              </div>
              <div>
                <div className="logo-img3">
                  <img src={logo3} alt="logo3" className="w-full h-[100px]" />
                </div>
              </div>
              <div>
                <div className="logo-img3">
                  <img src={logo4} alt="logo4" className="w-full h-[100px]" />
                </div>
              </div>
              <div>
                <div className="logo-img3">
                  <img src={logo5} alt="logo5" className="w-full h-[100px]" />
                </div>
              </div>
              <div>
                <div className="logo-img3">
                  <img src={logo6} alt="logo6" className="w-full h-[100px]" />
                </div>
              </div>
              <div>
                <div className="logo-img7">
                  <img src={logo7} alt="logo7" className="w-full h-[100px]" />
                </div>
              </div>
              <div>
                <div className="logo-img8 mr-5">
                  <img src={logo8} alt="logo8" className="w-full h-[100px]" />
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      {/* #F5EDFE */}
      {/* <div className="flex items-center flex-col z-10 md:flex-row md:pt-[116px] pt-40 gap-3  justify-between    px-6 md:px-20">
        <div className="text w-full md:w-[40%] ">
          <h1 className="text-2xl md:text-[40px] md:leading-[46px] font-extrabold text-[#0A033C]">
            Your Ultimate Collaborative Learning Hub
          </h1>
          <p className="py-8 z-10 font-medium text-[#0a033c] text-lg">
            Study Smarter, Not Harder. Learn from Experts, Collaborate with
            Peers, and Achieve More. Harness the Power of Technology to Learn
            Faster, Retain More, and Collaborate Seamlessly! Stay Motivated,
            Stay Focused—Turn Every Study Session into a Success!Unlock Your
            Potential with Interactive Learning and Real-Time Collaboration.
          </p>
          <div className="flex z-10 gap-3">
            <button className="btn btn-primary bg-[#0A033C] z-10 hover:shadow-2xl">Get Started</button>
            <button className="btn bg-[#ffffff] z-10">Browse Courses</button>
          </div>
        </div>
        <div className="image w-full  md:w-[40%]">
          <div className="">
            <img
              src={bannerimg}
              className="w-full h-[300px] md:flex rounded-lg md:rounded-bl-[8px] md:rounded-tr-[10px] md:rounded-br-[80px] md:rounded-tl-[128px] hover:border-2 hover:border-[#00ffff] rounded-bl-[1px] shadow-2xl rounded-tr-[4px] rounded-br-[50px] rounded-tl-[68px]"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
