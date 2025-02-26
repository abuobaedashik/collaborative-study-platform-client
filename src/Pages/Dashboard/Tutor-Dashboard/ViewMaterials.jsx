import React, { useContext } from "react";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineUpdate } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const ViewMaterials = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure =useAxiosSecure()
    const axiosPublic =useAxiosPublic()
     
    const { data: materials = [] ,refetch} = useQuery({
        queryKey: ["approved", user.email],
        queryFn: async () => {
          const res = await axiosSecure.get(
            `/materials/tutor/${user.email}`
          );
          return res.data;
        },
      });

        const handleDeleteMaterials = (material) => {
          console.log("material ", material);
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
                    text: "Your Materials has been deleted.",
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
        title={"Create Note"}
        subtitle={` Keep up the hard work and stay consistent in your studies. Every small
          effort you put in today will lead to great success in the future. Stay
          curious, ask questions, and never stop learning. Believe in
          yourself—you are capable of achieving great things!`}
        // image={note}
      ></DynamicTitle>

      <div className="mt-5 bg-[#ffffff] py-4 px-6 w-full rounded-lg mb-16">
        <div className="justify-center items-center   flex flex-col mb-3  gap-1">
          <p className="my-3 text-3xl font-bold"> Upload Materials Session </p>
          <p className=" font-semibold text-base">
            {" "}
            Total Approved Sessions : {materials?.length}{" "}
          </p>
        </div>
        {materials.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Materials Image</th>
                    <th>Materials Info</th>
                    <th>Title</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((session, index) => (
                    <tr key={session._id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="h-12 w-12 flex gap-1 rounded-sm overflow-hidden">
                          <img
                            src={session?.materialImage}
                            alt="Session"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="text-xl font-semibold">{session.email}</p>
                        <p className="text-base text-gray-600">
                          {session.sessionId}
                        </p>
                      </td>
                      <td className="text-center">
                        <p className="text-base  hover:text-[#ffff00] rounded-md px-2 py-1 hover:bg-[#0a043cbb] bg-[#0A043C] text-[#ffff]">
                           <NavLink to={session.link} target="_blank" rel="noopener noreferrer">Link</NavLink>
                        </p>
                      </td>
                      <td>
                        <div className="flex items-center flex-col gap-2">
                          <NavLink
                            to={`/dashboard/updatematerials/${session._id}`}
                          >
                            <button className="rounded-xl bg-red-600 text-white px-4 py-2">
                              <MdOutlineUpdate />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleDeleteMaterials(session)}
                            className="rounded-xl  bg-red-600 text-white px-4 py-2"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default ViewMaterials;
