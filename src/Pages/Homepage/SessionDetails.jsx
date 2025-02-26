import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React, { useContext } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Auth/Authprovider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SessionDetails = () => {
  const session = useLoaderData();
  console.log(session);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    title,
    name,
    email,
    description,
    startDate,
    endDate,
    startTime,
    endTime,
    duration,
    fee,
    status,
    banner,
  } = session;

  const { data: usersData = [], refetch } = useQuery({
    queryKey: ["usersData", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/role/${user.email}`);
      return res.data;
    },
  });
  const role =usersData.role;

  console.log("user role is from",role)


   

  const isClosed = moment(endDate).isBefore(moment(), "day");

  return (
    <div className="bg-[#F6F6F6]">
      <div className="pt-40 px-11/12">
        <div className="flex md:flex-row flex-col mt-10 items-start p-6 justify-between ">
          <div className="md:w-[60%] w-full px-4">
            <div className="mt-6">
              <img
                src={banner}
                alt="banner"
                className="w-full h-[300px] rounded-2xl"
              />
            </div>
            <div className="title text-4xl mt-5 font-bold text-[#0A043C]">
              {title}
            </div>
            <div className="title text-xl font-bold mt-10 text-[#131313]">
              {description}
            </div>
            <div className="title text-xl font-bold mt-10 text-[#131313]">
              review here .....................
            </div>
          </div>
          <div className="md:w-[36%]   w-full px-4  txt-xl font-semibold md:px-1 mt-6">
            <div className=" bg-[#ffffff] px-6 pb-10 mb-2 py-1 space-y-6 rounded-xl">
              <div className="text-red-500 font-semibold ">
                Average rating : 5{" "}
              </div>
              <div className="font-semibold">
                Registration Start Date {startDate}
              </div>
              <div className="font-semibold">
                Registration End Date {endDate}
              </div>
              <div className="font-semibold">Class Start Time {startDate} </div>
              <div className="font-semibold">ClassEnd Time {endDate} </div>
              <div className="font-semibold">
                Class Duration {duration} Hours
              </div>
              <div className="font-semibold">Registration Fee {fee}</div>
            </div>

            {isClosed || role !== "student" ? (
              <button className="px-4 py-2 w-full rounded-2xl my-8 font-bold bg-[#F3CFCF] text-red-600 cursor-not-allowed">
                Closed
              </button>
            ) : (
              <NavLink to={"/payment"}>
                <button className="px-4 py-4  w-full rounded-2xl mt-6 font-bold bg-[#0A043C] text-[#ffffff]">
                  Booked Now
                </button>
              </NavLink>
            )}

            {/* <button className="px-4 py-4 w-full   ">
              Booked Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionDetails;
