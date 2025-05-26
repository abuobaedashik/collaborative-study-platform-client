import React from "react";
import DynamicTitle from "../../Shared Components/DynamicTitle";
import classroom1 from "../../assets/banner-new/class-room.jpg"; // Adjust the path as necessary
import classroom2 from "../../assets/banner-new/class-4.jpg"; // Adjust the path as necessary

const FeatureSection = () => {
  return (
    <div>
      {/* <div className="mt-8 mb-0 flex items-center gap-3 flex-col">
        <DynamicTitle
          heading="Why Join Us?"
          title="Empowering Students Through Collaboration & Smart Learning"
          subtitle="Unlock Your Learning Potential with Our Collaborative Study Hub"
        />
      </div> */}
      <section className="w-full pb-5 bg-white">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-6">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={classroom1}
              alt="Student Collaboration"
              className="w-full h-[350px] rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-[#fe753f] font-semibold uppercase tracking-wider">
              Why Join Us?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2330]">
              Unlock Your Learning Potential with Our Collaborative Study Hub
            </h2>
            <p className="text-[#486b9b] font-nunito text-base">
              Study smarter, not harder. Join thousands of learners who are
              collaborating, sharing notes, solving problems, and staying
              productive—together!
            </p>
            <button className="button text-base text-[#ffffff] font-inter bg-[#1a2330] font-semibold px-2 py-1 rounded-md">
              Learn More
            </button>

            {/* Features */}
            {/* <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span>✅</span> Real-time Group Study Rooms
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span> Access to Shared Notes & Resources
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span> Topic-based Discussions
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span> Personalized Study Planner
              </li>
            </ul> */}
          </div>
        </div>
        {/* electration 2 */}
        <div className="   flex-col-reverse md:flex-row justify-between mt-24 mx-auto flex  items-center gap-10 px-6">
          {/* Left: text */}
          <div className="w-full md:w-[46%] space-y-4">
            <p className="text-[#fe753f] font-semibold uppercase tracking-wider">
              Why Join Us?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2330]">
              Unlock Your Learning Potential with Our Collaborative Study Hub
            </h2>
            <p className="text-[#486b9b] font-nunito text-base ">
              Study smarter, not harder. Join thousands of learners who are
              collaborating, sharing notes, solving problems, and staying
              productive—together!
            </p>
            <button className="button text-base text-[#ffffff] font-inter bg-[#1a2330] font-semibold px-2 py-1 rounded-md">
              Learn More
            </button>
          </div>

          {/* Right:image*/}
          <div className="w-full md:w-[46%] space-y-4">
            {/* Features */}
            {/* <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span>✅</span> Real-time Group Study Rooms
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span> Access to Shared Notes & Resources
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span> Topic-based Discussions
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span> Personalized Study Planner
              </li>
            </ul> */}
            <img
              src={classroom2}
              alt="Student Collaboration"
              className="w-full h-[350px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
