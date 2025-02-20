
import bannerimg from "../../../src/assets/image/collebrating.jpg";
import icon1 from '../../../src/assets/image/iconbg1.png'
import icon2 from '../../../src/assets/image/sparkles.png'
import icon3 from '../../../src/assets/image/iconbg3.png'

const Banner = () => {
  return (
    <div className="relative">
      <div className="flex items-center md:flex-row flex-col gap-4  justify-between py-48 bg-[#F5EDFE]  px-6 md:px-20">
        <div className="text w-full md:w-[40%] ">
          <h1 className="text-[38px] leading-10 font-extrabold text-[#0A033C]">
            Your Ultimate Collaborative Learning Hub
          </h1>
          <p className="py-6 font-light text-[#3B3563] text-lg">
            Study Smarter, Not Harder Learn from Experts, Collaborate with
            Peers, and Achieve More.Harness the Power of Technology to Learn
            Faster, Retain More, and Collaborate Seamlessly!
          </p>
          <div className="flex gap-3">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn bg-[#ffffff]">Browse Courses</button>
          </div>
        </div>
        <div className="image w-full md:w-[40%]">
          <div className="">
            <img
              src={bannerimg}
              className="w-full h-[400px] hidden md:flex rounded-lg shadow-2xl md:rounded-bl-[8px] md:rounded-tr-[10px] md:rounded-br-[80px] md:rounded-tl-[128px]"
            />
          </div>
        </div>
         <div className="absolute left-[90px] top-[600px] "><img src={icon2} alt="" className="translate-y-10 w-[110px] h-[76px] opacity-80" /></div>
         {/* <div className="absolute right-[220px] top-[610px]"><img src={icon1} alt="" className="translate-y-10 w-[60px] h-[50px]  z-0 opacity-100" /></div> */}
         <div className="absolute left-[730px] top-[430px]"><img src={icon3} alt="" className="translate-y-10 w-[50px] h-[50px]  z-0 opacity-100" /></div>
      </div>
    </div>
  );
};

export default Banner;
