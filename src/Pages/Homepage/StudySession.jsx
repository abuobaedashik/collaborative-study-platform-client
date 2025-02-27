import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Auth/Authprovider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaClock } from "react-icons/fa";
import moment from "moment/moment";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

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
      <div className="mt-16 text-4xl font-extrabold mb-12 text-center text-[#0A033C]">
        {" "}
        study session{" "}
      </div>
      <div className="mt-5 grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 gap-10 items-center justify-between mb-24 ">
        {sessions.map((session) => {
          const isClosed = moment(session.endDate).isBefore(moment(), "day");

          return (
            <div key={session._id} className="">
              <div className=" bg-white shadow-lg rounded-2xl overflow-hidden">
                  <div className="text-base">
                  <img
                  src={session?.banner}
                  alt={session?.title}
                  className="w-full h-48 object-cover"
                />
                  </div>
                  <div className=" bg-black text-[#ffff00]  font-extrabold w-[50px] text-base text center px-4 -mt-6 flex  z-30">
                  {
                 session.fee == 0 ? "free" : <>{session.fee}$</>
                  }
                  </div>
                <div className="p-4 mx-6 min-h-[200px] flex items-center justify-center flex-col">
              
                  <h2 className="text-xl font-bold text-gray-800">
                    {session.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {session.description.slice(0, 140)}....
                  </p>
                  <div className="flex justify-between items-center gap-8 mt-4">
                    <NavLink to={`sesssionDetails/${session._id}`}>
                      <button className="py-2 font-extrabold rounded-lg bg-[#0a033cec] text-[#ffffff] px-5 ">
                        Read More
                      </button>
                    </NavLink>

                    {/* conditional button onging or closed */}
                    <button
                      className={` px-4 py-2 rounded-lg font-bold   ${
                        isClosed
                          ? "bg-[#F3CFCF] text-red-600"
                          : "bg-[#f3cfcfb1] text-green-500"
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
