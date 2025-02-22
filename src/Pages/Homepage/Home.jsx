import React from "react";
import Navbar from "../../Shared Components/Navbar";
import Banner from "./Banner";
import StudySession from "./StudySession";
import Statistics from "./Statistics";

const Home = () => {
  return (
    <div className="">
      {/* banner */}
      <div className="mx-auto w-full">
        <Banner></Banner>
      </div>
      <div className="mx-auto w-10/12">
        <StudySession></StudySession>
      </div>

      <div className="w-full ">
          <Statistics></Statistics>
      </div>

    </div>
  );
};

export default Home;
