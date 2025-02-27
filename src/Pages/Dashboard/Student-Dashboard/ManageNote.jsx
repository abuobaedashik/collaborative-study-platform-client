import React, { useContext } from "react";
import notemanage from "../../../assets/image/manage1.png";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUpload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import Swal from "sweetalert2";
import { BiEdit } from "react-icons/bi";
import { AuthContext } from "../../../Provider/Auth/Authprovider";

const ManageNote = () => {
  const axiosPublic = useAxiosPublic();
  const {user} =useContext(AuthContext)

  const { data: notes = [], refetch } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/note/email/${user.email}`);
      return res.data;
    },
  });
  console.log(notes)

  //   note delete
  const handleDeleteNote = (note) => {
    console.log("note is ", note);
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
        axiosPublic.delete(`/note/${note._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Note has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // note update
  // const handleUpdateNote = (note) => {
  //   console.log(note);
  // };

  return (
    <div className="mx-16">
      <DynamicTitle
        title={"Manage Note"}
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
                      to={`/dashboard/manage-note/notedetails/${note?._id}`}
                    >
                      <button className=" font-semibold btn-ghost  px-4 rounded-md bg-gray-200  py-2 text-red-600">
                        View Note
                      </button>
                    </NavLink>
                  </td>
                  <th className="flex items-center gap-2 flex-col ">
                    <NavLink to={`/dashboard/updatenote/${note._id}`}>
                      <button className="font-medium rounded-md bg-[#0a033c83] hover:bg-[#0a033c45] px-6 py-1 text-[#ffffff]">
                       <BiEdit></BiEdit>
                      </button>
                    </NavLink>

                    <button
                      onClick={() => handleDeleteNote(note)}
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
