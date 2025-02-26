import React from "react";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import { NavLink } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import notfound from '../../../assets/image/notfound.png'

const ViewAllMaterials = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic =useAxiosPublic();
  const { data: materials = [], refetch } = useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-materials");
      return res.data;
    },
  });

  console.log("all materials is", materials);

  const handleDeleteNote = (material) => {
    console.log("note is ", material);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/material/${material._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "MAterial has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <DynamicTitle
        title="View All Study Sessions"
        subtitle="Explore and Manage Your Study Sessions Effortlessly"
        // total={`Total Sessions: ${sessions.length}`}
        // total2={`Total Pending Sessions: ${pendingSessions.length}`}
        // total3={`Total Approved Sessions: ${approvedSessions.length}`}
        // total4={`Total Rejected Sessions: ${rejectedSessions.length}`}
        // todo create more beautiful ui
        // image={sessionimg}
      />

      <div className="mt-10 w-full bg-white py-16 rounded-xl px-10 grid items-center justify-center grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
         {
         materials.length > 0 ? <>
           {materials.map((material) => (
          <div
            key={material._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <img
              src={material?.materialImage}
              alt={material?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 mx-6 min-h-[200px] flex items-center justify-center flex-col">
              <h2 className="text-xl font-bold text-gray-800">
                {material.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{material.sessionId}</p>
              <div className="flex justify-between items-center gap-8 mt-4">
                <NavLink to={material.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <button className="py-2 font-extrabold flex items-center gap-2 rounded-lg bg-[#0A033C] text-white px-5 hover:bg-[#09022a] transition">
                    Link
                  </button>
                </NavLink>
                <button
                  onClick={() => handleDeleteNote(material)}
                  className="py-2 font-extrabold flex items-center gap-2 rounded-lg bg-[#0A033C] text-white px-5 hover:bg-[#09022a] transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
         </>   : <>
           <div className="my-4 text-[#0A043C] text-2xl flex items-center gap-3 justify-center ">
             <img src={notfound} alt="no" className="icon w-[26px] h-[26px]" />
             <div>No any Materials Found</div>
            </div>
         </>
         }
      </div>
    </div>
  );
};

export default ViewAllMaterials;
