import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import { NavLink } from "react-router-dom";

const ViewBookedSession = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: mySession = [], refetch } = useQuery({
    queryKey: ["mySession", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myBookedSession/${user.email}`);
      return res.data;
    },
  });

  console.log("my session", mySession);

  return (
    <div>
      <DynamicTitle
        subtitle={"View Your Booked Session"}
        title={"My Booked Session"}
      ></DynamicTitle>
        <div className="mt-5 bg-[#ffffff] py-4 px-6 w-full rounded-lg mb-16">
           <div className="grid grid-cols-3 gap-4 p-4 py-12">
               {
                mySession.map(session=> <div key={session._id} className="">
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
                          <NavLink to={`mysession/${session._id}`}>
                            <button className="py-2 font-extrabold rounded-lg bg-[#0a033cec] text-[#ffffff] px-5 ">
                              Read More
                            </button>
                          </NavLink>
                          <button>
                             Button
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>)
               }
           </div>
        </div>
        {/* update pfrofile */}
    </div>

  );
};

export default ViewBookedSession;
