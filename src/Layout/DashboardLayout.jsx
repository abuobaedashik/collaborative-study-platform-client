import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUserRole from "../Hooks/useRole";
import { MdAdminPanelSettings } from "react-icons/md";
import { AuthContext } from "../Provider/Auth/Authprovider";
import { FaUsers } from "react-icons/fa";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";

const DashboardLayout = () => {
  const axiosPublic = useAxiosPublic();
  const { role, loading } = useUserRole();
  console.log("user role ", role);
  const { user } = useContext(AuthContext);

  return (
    <div className="flex  gap-0">
      <div className=" space-y-2 w-[20%]  min-h-screen  text-base text-[#0A043C] bg-[#E476E9] pt-6 pl-3">
        <p className="pt-3">
          <p className="text-2xl px-3 font-semibold   text-[#0A043C]">
            Collaborative
          </p>
          <p className="text-xl px-3  font-normal uppercase   text-[#0A043C]">
            Study Platform
          </p>
        </p>

        <div className="my-5 flex items-center justify-between px-3">
          <div className="text-xl">{user && <div>{user.displayName}</div>}</div>
          <div className="gap-1 items-start text-base  font-semibold text-end mr-3">
            <>
              <img
                src={user?.photoURL}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />{" "}
            </>
          </div>
        </div>

        {/*  Student  dashboard */}
        {role === "student" && (
          <>
            <div className="my-5 flex items-center justify-between px-3">
              <div className="gap-1 items-center text-base flex  font-semibold text-end mr-3">
                <div className="text-xl">
                  <PiStudent />
                </div>
                <span className="text-base font-bold text-[#0A033C]">
                  {" "}
                  Student
                </span>
              </div>
            </div>
            <div className="divider text-[#ffffff] pr-3"></div>

            <NavLink
              to="create-note"
              className="flex gap-1 items-center px-3 font-medium"
            >
              Create Note
            </NavLink>
            <NavLink
              to="manage-note"
              className="flex gap-1 items-center px-3 font-medium"
            >
              Manage Note
            </NavLink>
          </>
        )}

        {/*Admin dashboard*/}
        {role === "admin" && (
          <>
            <div className="my-5 flex items-center justify-between px-3">
              <div className="gap-1 items-center text-base flex  font-semibold text-end mr-3">
                <div className="text-xl">
                  <MdAdminPanelSettings />
                </div>
                <span className="text-base font-bold text-[#0A033C]">
                  {" "}
                  Admin
                </span>
              </div>
            </div>
            <div className="divider text-[#ffffff] pr-3"></div>

            <NavLink
              to="alluser"
              className="flex gap-1 items-center px-3 font-medium"
            >
              <FaUsers />
              All User
            </NavLink>

            <NavLink
              to="/"
              className="flex gap-1 items-center px-3 font-medium"
            >
              <BsFillFolderSymlinkFill />
              All Materials
            </NavLink>
          </>
        )}

        {/*Tutor dashboard*/}
        {role === "tutor" && (
          <>
            <div className="my-5 flex items-center justify-between px-3">
              <div className="gap-1 items-center text-base flex  font-semibold text-end mr-3">
                <div className="text-xl">
                  <GiTeacher />
                </div>
                <span className="text-base font-bold text-[#0A033C]">
                  {" "}
                  Tutor
                </span>
              </div>
            </div>
            <div className="divider text-[#ffffff] pr-3"></div>

            <NavLink
              to="/"
              className="flex gap-1 items-center px-3 font-medium"
            >
              Check Assignments
            </NavLink>
            <NavLink
              to="/"
              className="flex gap-1 items-center px-3 font-medium"
            >
              Upload Study Materials
            </NavLink>
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
