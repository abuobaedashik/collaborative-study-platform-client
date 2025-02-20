import React from "react";
import Navbar from "../../Shared Components/Navbar";
import Banner from "./Banner";
import StudySession from "./StudySession";

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

    </div>
  );
};

export default Home;
