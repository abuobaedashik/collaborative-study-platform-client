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

  // Query for fetching approved sessions
  const { data: approved = [], isLoading } = useQuery({
    queryKey: ["approved", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/approved-sessions/tutor/${user.email}`
      );
      return res.data;
    },
    enabled: !!user?.email, 
  });

  return (
    <div>
      <DynamicTitle
        subtitle={
          "Create a new session by tutor. When admin approves your session, it will be published."
        }
        title={"Create Session"}
      />

      <div className="mt-10 w-full bg-white py-16 rounded-xl px-20 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {isLoading ? (
          <p className="text-center text-gray-500 text-lg">
            Loading sessions...
          </p>
        ) : approved.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No approved sessions found.
          </p>
        ) : (
          approved.map((session) => (
            <div
              key={session._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
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
                  {session.description
                    ? session.description.length > 140
                      ? `${session.description.slice(0, 140)}...`
                      : session.description
                    : "No description available."}
                </p>
                <div className="flex justify-between items-center gap-8 mt-4">
                  <NavLink
                    to={`/dashboard/upload/${session?._id}`}
                    className="inline-block"
                  >
                    <button className="py-2 font-extrabold flex items-center gap-2 rounded-lg bg-[#0A033C] text-white px-5 hover:bg-[#09022a] transition">
                      <FaUpload /> Upload
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UploadMaterials;
