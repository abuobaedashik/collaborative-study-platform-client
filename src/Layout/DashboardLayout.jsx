import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUserRole from "../Hooks/useRole";

const DashboardLayout = () => {

  const axiosPublic =useAxiosPublic()
  const {role,loading} = useUserRole()
  console.log("user role ", role)

  return (
    <div className="flex  gap-0">
      <div className=" space-y-2 w-[20%]  min-h-screen  text-base text-[#0A043C] bg-[#ffffff] pt-6 pl-3">
        <p className="py-3">
          <p className="text-2xl px-3 font-semibold   text-[#0A043C]">
           Collaborative
          </p>
          <p className="text-xl px-3  font-normal uppercase   text-[#0A043C]">
          Study Platform
          </p>
        </p>



           {/*  Student  dashboard */}
        {role === "student" && (
          <>
            <NavLink to="create-note" className="flex gap-1 items-center px-3 font-medium">
              Create Note
            </NavLink>
            <NavLink to="manage-note" className="flex gap-1 items-center px-3 font-medium">
              Manage Note
            </NavLink>
            <div className="gap-1 items-center px-3 font-medium">Student DB</div>
          </>
        )}

        {/*Admin dashboard*/}
        {role === "admin" && (
          <>
            <NavLink to="/" className="flex gap-1 items-center px-3 font-medium">
             All User
            </NavLink>
            <NavLink to="/" className="flex gap-1 items-center px-3 font-medium">
             All Materials
            </NavLink>
            <div className="gap-1 items-center px-3 font-medium">Admin DB</div>
          </>
        )}
        {/*Tutor dashboard*/}
        {role === "tutor" && (
          <>
            <NavLink to="/" className="flex gap-1 items-center px-3 font-medium">
              Check Assignments
            </NavLink>
            <NavLink to="/" className="flex gap-1 items-center px-3 font-medium">
              Upload Study Materials
            </NavLink>

            <div className="gap-1 items-center px-3 font-medium">Teacher DB</div>
          </>
        )}

        {/* conditional rendering isAdmin or User  */}

    

        {/* shared item  */}

        <div className="divider text-[#ffffff] pr-3"></div>

        <p className="">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-3 text-base text-[#ffffff] font-medium flex gap-1 items-center"
                : "flex gap-1 items-center text-sm font-medium px-3"
            }
            to={"/"}
          >

            Home
          </NavLink>
        </p>
      </div>

      <div className="p-6 bg-[#f6f6f6] w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
