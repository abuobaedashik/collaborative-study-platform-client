import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Auth/Authprovider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaClock } from "react-icons/fa";

const StudySession = () => {
  const [sessions, setsessions] = useState();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/approved-sessions").then((res) => {
      setsessions(res.data);
    });
  }, [axiosPublic]);

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
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 items-center justify-between mb-24 ">
        {sessions?.map((session) => (
          <div key={session._id} className="">
            <div className=" bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={session?.banner}
                alt={session?.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 mx-6">
                <h2 className="text-xl font-bold text-gray-800">{session.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{session.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <button className="py-2 font-extrabold rounded-lg bg-[#0A033C] text-[#ffffff] px-5 ">Read More</button>
                  {/* <span
                    className={`badge ${
                      status === "Ongoing" ? "badge-success" : "badge-error"
                    }`}
                  >
                    <FaClock className="inline-block mr-1" /> {status}
                  </span> */}
                  <button className="py-2 rounded-lg font-bold bg-[#0A033C] text-[#ffff00] px-5">Ongoing</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudySession;
