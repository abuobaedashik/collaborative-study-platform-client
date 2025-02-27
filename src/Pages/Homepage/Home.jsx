import React from "react";
import Navbar from "../../Shared Components/Navbar";
import Banner from "./Banner";
import StudySession from "./StudySession";
import Statistics from "./Statistics";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="bg-[#F6F6F6]">
        <Helmet>
              <title>Home</title>
            </Helmet>
      {/* banner */}
      <div className="mx-auto w-full">
        <Banner></Banner>
      </div>
      <div className="mx-auto pb-[86px] w-[89%]">
        <StudySession></StudySession>
      </div>

      <div className="w-full my-8">
          <Statistics></Statistics>
      </div>

    </div>
  );
};

export default Home;
