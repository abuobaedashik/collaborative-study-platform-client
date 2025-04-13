import bannerimg from "../../../src/assets/image/collebrating.jpg";
import icon1 from "../../../src/assets/image/iconbg1.png";
import icon2 from "../../../src/assets/image/sparkles.png";
import icon3 from "../../../src/assets/image/iconbg3.png";
import svg from "../../../src/assets/image/Untitled.svg";
import SwiperSlider from "./SwiperSlider";

const Banner = () => {
  return (
    <div className=" bg-[#ffffff]">
      <div className="p-[35.5px]  "></div>
      <div className=" md:h-[500px]">
         <SwiperSlider></SwiperSlider>
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
