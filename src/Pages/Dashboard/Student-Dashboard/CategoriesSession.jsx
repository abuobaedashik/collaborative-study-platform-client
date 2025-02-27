import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import { FaTrash, FaUpload } from "react-icons/fa";

const CategoriesSession = () => {
  const session = useLoaderData();
  const axiosPublic = useAxiosPublic();

  const { data: materials = [], refetch } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/Materials/sessions/${session.Sessionid}`
      );
      return res.data;
    },
  });

  const downloadImage = (imageUrl) => {
    const link = document.createElement("a"); 
    link.href = imageUrl; 
    link.download = "material-image.jpg"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  };

  console.log(materials, "filter meta");

  console.log(session.Sessionid, "session for categories materials");

  return (
    <div>
      <DynamicTitle
        title={"Create Note"}
        subtitle={` Keep up the hard work and stay consistent in your studies. Every small
          effort you put in today will lead to great success in the future. Stay
          curious, ask questions, and never stop learning. Believe in
          yourself—you are capable of achieving great things!`}
        // image={note}
      ></DynamicTitle>

      <div className="mt-5 bg-[#ffffff] py-4 px-6 w-full rounded-lg mb-16">
        <div className="justify-center items-center flex flex-col mb-3  gap-1">
          <p className="my-3 text-3xl font-bold"> Upload Materials Session </p>
          <p className=" font-semibold text-base">
            {" "}
            Total Approved Sessions : {materials?.length}{" "}
          </p>
        </div>
        {materials.length > 0 ? (
          <>
            <div className="my-6 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 items-center justify-between gap-4">
              {materials.map((sec) => (
                <div
                  key={sec._id}
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
                    <div className="flex items-center gap-8 mt-4">
                      <NavLink
                        to={sec.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="py-2 hover:underline font-extrabold flex items-center gap-2 rounded-lg bg-[#0A033C] text-white px-5 hover:bg-[#09022a] transition">
                          Link
                        </button>
                      </NavLink>

                      <button
                        onClick={() => downloadImage(sec.materialImage)}
                        className=" px-4 py-2 rounded-lg text-white bg-[#0a033c]"
                      >
                        Download Image
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center">No Upload Materials ! </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoriesSession;
