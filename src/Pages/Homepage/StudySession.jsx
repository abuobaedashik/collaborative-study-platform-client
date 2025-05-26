import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Auth/Authprovider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaClock } from "react-icons/fa";
import moment from "moment/moment";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DynamicTitle from "../../Shared Components/DynamicTitle";

const StudySession = () => {
  const [sessions, setsessions] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosPublic.get("/approved-sessions").then((res) => {
      setsessions(res.data.slice(0, 6));
    });
  }, [axiosPublic]);

  const currentDate = moment().format("YYYY-MM-DD");

  //   useEffect(() => {
  //     const today = new Date();
  //     const courseStartDate = new Date(startDate);
  //     if (today > courseStartDate) {
  //       setStatus("Closed");
  //     } else {
  //       setStatus("Ongoing");
  //     }
  //   }, [startDate]);
  console.log(sessions);
  return (
    <div>
      <div className="mt-6 flex items-center gap-3 flex-col">
        <DynamicTitle
          heading="Don’t Miss Out"
          title=" Upcoming Study Session"
          subtitle="Don’t miss this golden opportunity to unlock your potential, gain new skills, and grow with every session."
        />
      </div>
      <div className="mt-5 grid grid-cols-1 xl:grid-cols-4  sm:grid-cols-2 gap-6 items-center justify-between mb-24 ">
        {sessions.map((session) => {
          const isClosed = moment(session.endDate).isBefore(moment(), "day");

          return (
            <div key={session._id} className="">
              <div className=" bg-white shadow-lg rounded-2xl min-h-[500px] overflow-hidden transition-transform transform hover:scale-[1.01] duration-300">
                <div className="text-base">
                  <img
                    src={session?.banner}
                    alt={session?.title}
                    className="w-full h-[250px] hover:scale-[1.060] overflow-hidden duration-300  object-cover"
                  />
                </div>
                <div className=" bg-black text-[#fe753f]  font-extrabold w-[50px] text-base text center px-4 -mt-6 flex  z-30">
                  {session.fee == 0 ? "free" : <>{session.fee}$</>}
                </div>
                {/* content */}
                <div className="p-4 mx-2 items-left  flex flex-col justify-between min-h-[210px]">
                  <div className="text  h-[190px] ">
                    <h2 className="text-xl font-bold text-gray-800">
                      {session.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-4">
                      {session.description.slice(0, 150)}....
                    </p>
                  </div>
                  {/* buttons */}
                  <div className="flex justify-between items-center gap-8 mt-auto ">
                    <NavLink to={`sesssionDetails/${session._id}`}>
                      <button className="button text-base text-[#ffffff] font-inter bg-[#1a2330] font-semibold px-2 py-1 rounded-md">
                        Read More
                      </button>
                    </NavLink>

                    {/* conditional button onging or closed */}
                    <button
                      className={` px-4 py-1 font-semibold rounded-lg font-inter   ${
                        isClosed
                          ? "bg-[#fe753f] text-[#ffffff]"
                          : "bg-[#fe753fd1] text-[#ffffff]"
                      }`}
                    >
                      {isClosed ? "Closed" : "Ongoing"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* update start 12 assignment 4/11/2025 */}
      </div>
    </div>
  );
};

export default StudySession;

// {sessions.map((session) => {
//   const isClosed = moment(session.endDate).isBefore(moment(), "day");

//   return (

//   );
// })}
