import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
           {/* student */}
           <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-3 text-base  font-medium flex gap-1 items-center"
                : "flex gap-1 items-center text-sm font-medium px-3"
            }
            to={"create-note"}
          >

            Create Note
          </NavLink>
           <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-3 text-base  font-medium flex gap-1 items-center"
                : "flex gap-1 items-center text-sm font-medium px-3"
            }
            to={"manage-note"}
          >

           Manage Note
          </NavLink>

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
