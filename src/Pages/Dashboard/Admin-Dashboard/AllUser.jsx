import React from "react";

import { useQuery } from "@tanstack/react-query";
import { FaHandMiddleFinger, FaTrash, FaUsers } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiAdminLine } from "react-icons/ri";

const AllUser = () => {
  const AxiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await AxiosSecure.get("/user");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
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
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        AxiosSecure.delete(`/user/${user._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Add Admin",
      denyButtonText: `Don't Add to Admin`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("user ", user);
        AxiosSecure.patch(`/user/admin/${user._id}`).then((res) => {
          console.log(res.data);
          console.log("user", user);
          if (res.data.modifiedCount > 0) {
            refetch();
            toast.success(`${user.name} is admin now`, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "colored",
            });
          }
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  console.log(users);
  return (
    <div>
      <div className="my-8 px-6 py-4 flex bg-[#ffffff] w-full justify-between gap-16 items-center">
        <div className="text-3xl  rounded-2xl  py-5 font-semibold text-[#0A033C]">
          Total Users : {users.length}{" "}
        </div>
        <div className="flex  items-center gap-4 ">
          <label className="form-control ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button className="px-4 py-2 bg-[#0A033C] rounded-lg text-[#ffffff]">
            Search
          </button>
        </div>
      </div>

      <div className="mt-5 bg-[#ffffff] py-4 px-6 w-full rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => (
                <tr key={user._id} className="">
                  <th>{index + 1}</th>
                  <td className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="rounded-full h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="text-base">{user?.name}</div>
                  </td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    {user.role === "admin" ? (
                      <>
                        <button
                          disabled
                          className="btn font-semibold   btn-ghost btn-xs px-3 bg-gray-200  py-2 text-red-600"
                        >
                          {/* <FaUsers></FaUsers> */}
                          <RiAdminLine />
                        </button>
                      </>
                    ) : (
                      <>
                        <p>
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn hover:text-[#131313] btn-ghost btn-xs bg-red-600 px-3 py-2 text-[#ffffff]"
                          >
                            {/* <FaUsers></FaUsers> */}

                            {user.role === "student" ? (
                              <p>
                                <PiStudentBold />
                              </p>
                            ) : (
                              <p>
                                <GiTeacher />
                              </p>
                            )}
                          </button>
                        </p>
                      </>
                    )}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn hover:text-[#131313] btn-ghost btn-xs bg-red-600 px-2 py-1 text-[#ffffff]"
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
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default AllUser;
