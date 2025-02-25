import React from "react";
import Navbar from "../../Shared Components/Navbar";
import Banner from "./Banner";
import StudySession from "./StudySession";
import Statistics from "./Statistics";

const Home = () => {
  return (
    <div className="bg-[#F6F6F6]">
      {/* banner */}
      <div className="mx-auto w-full">
        <Banner></Banner>
      </div>
      <div className="w-full ">
          <Statistics></Statistics>
      </div>
      <div className="mx-auto pb-[86px] w-[89%]">
        <StudySession></StudySession>
      </div>

    </div>
  );
};

export default Home;
