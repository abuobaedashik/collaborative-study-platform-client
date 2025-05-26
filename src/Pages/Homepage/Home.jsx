import React from "react";
import Navbar from "../../Shared Components/Navbar";
import Banner from "./Banner";
import StudySession from "./StudySession";
import Statistics from "./Statistics";
import { Helmet } from "react-helmet-async";
import WhyChoiceUs from "./WhyChoiceUs";
import ReviewSection from "./ReviewSection";
import FeatureSection from "./FeatureSection";
import HowItWorks from "./HowItWorks";
import FaqSection from "./FaqSection";

const Home = () => {
  return (
    <div className=" min-h-screen">
      <Helmet>
        <title>Home</title>
      </Helmet>
      {/* banner */}
      <div className="mx-auto w-full ">
        <div className="px-0">
          <Banner></Banner>
        </div>
      </div>
      {/* why choice us  */}
      <div className="mx-auto pb-[36px] w-11/12 bg-[#ffffff]">
        <WhyChoiceUs></WhyChoiceUs>
      </div>
      {/* feature section */}
      <div className="mx-auto pb-[36px] w-11/12 bg-[#ffffff]">
        <FeatureSection></FeatureSection>
      </div>
      {/* study session */}
      <div className=" py-2 w-full">
        <div className="mx-auto pb-[34px] w-11/12">
          <StudySession></StudySession>
        </div>
      </div>
     {/* how it works section */}
      <div className="mx-auto pb-[36px] w-11/12 bg-[#ffffff]">
         <HowItWorks></HowItWorks>
      </div>
      <div className="w-full my-8">
        <Statistics></Statistics>
      </div>
      {/* faq section */}
       <div className="mx-auto pb-[36px] w-11/12">
        <FaqSection></FaqSection>
      </div>
      <div className="mx-auto pb-[36px] w-11/12">
        <ReviewSection></ReviewSection>
      </div>
    </div>
  );
};

export default Home;
