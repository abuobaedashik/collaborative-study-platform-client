import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUserRole from "../Hooks/useRole";
import { MdAdminPanelSettings, MdGridView, MdManageHistory } from "react-icons/md";
import { AuthContext } from "../Provider/Auth/Authprovider";
import { FaUpload, FaUsers } from "react-icons/fa";
import { BsFillExclamationSquareFill, BsFillFolderSymlinkFill } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { IoIosCreate } from "react-icons/io";
import icon3 from '../assets/image/iconimg.png'
import { RiGalleryView2 } from "react-icons/ri";

const DashboardLayout = () => {
  const axiosPublic = useAxiosPublic();
  const { role, loading } = useUserRole();
  console.log("user role ", role);
  const { user } = useContext(AuthContext);

  return (
    <div className="flex  gap-0">
      <div className=" space-y-2 w-[35%] sm:w-[20%]  min-h-screen  text-base text-[#0A043C] bg-[#ffffff] shadow-lg pt-6 pl-3">
        <p className="pt-3">
          <p className="text-sm md:text-2xl px-3 font-semibold flex items-center gap-2   text-[#0A043C]">
            <img src={icon3} alt="" className="w-[35px] h-[35px]" />
            <p className="sm:text-2xl text-sm font-bold">
              {" "}
              Collaborative 
            </p>
          </p>
          <p className="sm:text-xl px-3 text-xs  font-senibold uppercase   text-[#0A043C]">
            Study Platform
          </p>
        </p>

        <div className="my-5 flex items-center justify-between px-3">
          <div className="text-xs md:text-xl">{user && <div>{user.displayName}</div>}</div>
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
              <IoIosCreate />
              Create Note
            </NavLink>
            <NavLink
              to="manage-note"
              className="flex gap-1 items-center px-3 font-medium"
            >
              <MdManageHistory />
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
              to="view-all-session"
              className="flex gap-1 items-center px-3 font-medium"
            >
              <BsFillFolderSymlinkFill />
              View All Study Session
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
              to="create-session"
              className="flex gap-1 items-center px-3 font-medium"
            >
              <IoIosCreate />
              Create study session
            </NavLink>

            <NavLink
              to="View-all-sessions"
              className="flex gap-1 items-center px-3 font-medium"
            >
              <RiGalleryView2 />
             View All Session
            </NavLink>

            <NavLink
              to="upload-materials"
              className="flex gap-1 items-center px-3 font-medium"
            >
              <FaUpload />
              Upload Study Materials
            </NavLink>
            <NavLink
              to="view-all-materials"
              className="flex gap-1 items-center px-3 font-medium"
            >
             <MdGridView />
             View All Materials
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

      <div className="md:p-6 p-2 bg-[#f3cfcf] w-[65%] sm:w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
