import React, { useContext } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import { FaUpload } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UploadMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  //   approved
  const { data: approved = [] } = useQuery({
    queryKey: ["approved", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/approved-sessions/tutor/${user.email}`
      );
      return res.data;
    },
  });

  console.log("approved session", approved);
  return (
    <div>
      <DynamicTitle
        subtitle={
          "Create a new session by tutor. When admin approves your session, it will be published."
        }
        title={"Create Session"}
      ></DynamicTitle>

      <div className="mt-10  w-full bg-[#ffffff] py-16 rounded-xl px-20 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {approved?.map((session) => (
          <div key={session._id} className="">
            <div className=" bg-white shadow-lg rounded-2xl overflow-hidden">
              <img
                src={session?.banner}
                alt={session?.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 mx-6 min-h-[200px] flex items-center justify-center flex-col">
                <h2 className="text-xl font-bold text-gray-800">
                  {session.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {session.description.slice(0, 140)}....
                </p>
                <div className="flex justify-between items-center gap-8 mt-4">
                  <NavLink to={`/dashboard/upload/${session?._id}`} className=''>
                    <button className="py-2 font-extrabold flex items-center gap-2  rounded-lg bg-[#0A033C] text-[#ffffff] px-5 ">
                      <FaUpload></FaUpload>
                      Upload
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadMaterials;
