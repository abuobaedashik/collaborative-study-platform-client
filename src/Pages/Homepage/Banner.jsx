import bannerimg from "../../../src/assets/image/collebrating.jpg";
import icon1 from "../../../src/assets/image/iconbg1.png";
import icon2 from "../../../src/assets/image/sparkles.png";
import icon3 from "../../../src/assets/image/iconbg3.png";
import svg from "../../../src/assets/image/Untitled.svg";

const Banner = () => {
  return (
    <div className="relative  md:h-[700px] bg-[#F3CFCF]">
      {/* #F5EDFE */}
      <div className="flex items-center flex-col z-10 md:flex-row md:pt-[116px] pt-40 gap-3  justify-between    px-6 md:px-20">
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
              className="w-full h-[400px] md:flex rounded-lg md:rounded-bl-[8px] md:rounded-tr-[10px] md:rounded-br-[80px] md:rounded-tl-[128px] hover:border-2 hover:border-[#00ffff] rounded-bl-[1px] shadow-2xl rounded-tr-[4px] rounded-br-[50px] rounded-tl-[68px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 left-0 ">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0A033C" fill-opacity="0.1" d="M0,128L120,149.3C240,171,480,213,720,213.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,0L60,37.3C120,75,240,149,360,154.7C480,160,600,96,720,101.3C840,107,960,181,1080,224C1200,267,1320,277,1380,282.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
   
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0A033C" fill-opacity="0.1" d="M0,64L120,101.3C240,139,480,213,720,234.7C960,256,1200,224,1320,208L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div>
    </div>
  );
};

export default Banner;
