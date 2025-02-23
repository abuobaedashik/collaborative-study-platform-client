import React from "react";
import notemanage from "../../../assets/image/manage1.png";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUpload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DynamicTitle from "../../../Shared Components/DynamicTitle";

const ManageNote = () => {
  const axiosPublic = useAxiosPublic();

  const { data: notes = [], refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/note");
      return res.data;
    },
  });


  return (
    <div className="mx-16">
      {/* <div className="my-8 mx-auto px-20 py-4 flex flex-col items-center rounded-xl  justify-center bg-[#ffffff] w-full  gap-2 ">
        <div className="text-3xl flex items-center flex-col rounded-2xl  ">
          <img src={notemanage} alt="note" />
          <p className="text-4xl font-bold text-[#0A033C] mb-2">
            {" "}
           {" "}
          </p>
          <p className="text-base">Total Note : {notes.length}</p>
        </div>
        <div className="text-base pl-3 mb-5 font-semibold text-[#131313] ">
         
        </div>
      </div> */}
      <DynamicTitle 
       title={ "Manage Note"} 
       subtitle={`Manage Your Notes Efficiently Easily organize, edit, and delete your
          notes to keep track of important information. Stay productive by
          keeping your notes updated and accessible anytime `}
        image={notemanage}
        total={` Your Total Note  : ${notes?.length}`}

      ></DynamicTitle>



      <div className="mt-12 px-20  mx-auto py-10 w-full bg-[#ffffff] rounded-xl border-blue-500">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {notes.map((note, index) => (
                <tr key={note._id} className="">
                  <th>{index + 1}</th>
                  <td className="flex items-center gap-4">
                    <div className="text-2xl  text-[#0A033C] font-bold">
                      {note?.title}
                    </div>
                  </td>

                  <td>
                    <NavLink 
                   to={`/dashboard/manage-note/notedetails/${note?._id}`} >
                      <button className=" font-semibold btn-ghost  px-4 rounded-md bg-gray-200  py-2 text-red-600">
                        View Note
                      </button>
                    </NavLink>
                  </td>
                  <th className="flex items-center gap-2 flex-col ">
                    <button
                      // onClick={() => handleDeleteUser(user)}
                      className="font-medium rounded-md bg-orange-600 hover:bg-orange-400 px-2 py-1 text-[#ffffff]"
                    >
                      Update
                    </button>
                    <button
                      // onClick={() => handleDeleteUser(user)}
                      className="font-medium rounded-md bg-[#0a033c] hover:bg-[#0a033cd3] px-6 py-1 text-[#ffffff]"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageNote;
