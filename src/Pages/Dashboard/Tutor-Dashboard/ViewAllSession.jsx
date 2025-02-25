import React, { useContext } from "react";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import sessiontutor from "../../../assets/image/viewallTutor.png";
import { MdDoNotDisturb } from "react-icons/md";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoGitPullRequestSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const ViewAllSession = () => {
  const { user } = useContext(AuthContext);
  const axiosSSecure = useAxiosSecure();

  // pending
  const { data: pending = [], refetch: refetchPending } = useQuery({
    queryKey: ["pending", user.email],
    queryFn: async () => {
      const res = await axiosSSecure.get(
        `/pending-sessions/tutor/${user.email}`
      );
      return res.data;
    },
  });

  //   rejected
  const { data: rejected = [], refetch: refetchRejected } = useQuery({
    queryKey: ["rejected", user.email],
    queryFn: async () => {
      const res = await axiosSSecure.get(
        `/rejected-sessions/tutor/${user.email}`
      );
      return res.data;
    },
  });

  //   approved
  const { data: approved = [] } = useQuery({
    queryKey: ["approved", user.email],
    queryFn: async () => {
      const res = await axiosSSecure.get(
        `/approved-sessions/tutor/${user.email}`
      );
      return res.data;
    },
  });

  //   update  to reject to pending request

  const handleStatusChange = async (id) => {
    try {
      const res = await axiosSSecure.patch(`/update-status/${id}`);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Status change to Pending",
          showConfirmButton: false,
          timer: 1500,
        });
        refetchPending();
        refetchRejected();
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  console.log("tutor pending data is ", pending);
  console.log("tutor approved data is ", approved);
  console.log("tutor rejected data is ", rejected);
  return (
    <div>
      <DynamicTitle
        title="View Your Study Sessions"
        subtitle="Explore and Manage Your Study Sessions Effortlessly"
        // total2={`Total Pending Sessions: ${pendingSessions.length}`}
        // total3={`Total Approved Sessions: ${approvedSessions.length}`}
        // total4={`Total Rejected Sessions: ${rejectedSessions.length}`}
        // todo create more beautiful ui
        image={sessiontutor}
      />

      {/* pending session tutor*/}
      <div className="mt-5 bg-white py-4 px-6 w-full rounded-lg my-16">
        <div className="justify-center items-center   flex flex-col mb-3  gap-1">
          <p className="my-3 text-3xl font-bold"> Pending Session </p>
          <p className=" font-semibold text-base">
            {" "}
            Total pending Sessions : {pending?.length}{" "}
          </p>
        </div>
        {pending.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Session Image</th>
                    <th>Tutor Info</th>
                    <th>Session Title</th>
                    <th>Session Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pending.map((session, index) => (
                    <tr key={session._id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="h-12 w-12 rounded-sm overflow-hidden">
                          <img
                            src={session.banner}
                            alt="Session"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="text-xl font-semibold">{session.name}</p>
                        <p className="text-base text-gray-600">
                          {session.email}
                        </p>
                      </td>
                      <td>{session.title}</td>
                      <td>{session.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">No Pending Session </div>
          </>
        )}
      </div>

      {/* approved session tutor*/}
      <div className="mt-5 bg-white py-4 px-6 w-full rounded-lg my-16">
        <div className="justify-center items-center   flex flex-col mb-3  gap-1">
          <p className="my-3 text-3xl font-bold"> Approved Session </p>
          <p className=" font-semibold text-base">
            {" "}
            Total Approved Sessions : {pending?.length}{" "}
          </p>
        </div>
        {approved.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Session Image</th>
                    <th>Tutor Info</th>
                    <th>Session Title</th>
                    <th>Session Status</th>
                  </tr>
                </thead>
                <tbody>
                  {approved.map((session, index) => (
                    <tr key={session._id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="h-12 w-12 rounded-sm overflow-hidden">
                          <img
                            src={session.banner}
                            alt="Session"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="text-xl font-semibold">{session.name}</p>
                        <p className="text-base text-gray-600">
                          {session.email}
                        </p>
                      </td>
                      <td>{session.title}</td>
                      <td>{session.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">No Approved Session </div>
          </>
        )}
      </div>

      {/*rejected session session tutor*/}
      <div className="mt-5 bg-white py-4 px-6 w-full rounded-lg my-16">
        <div className="justify-center items-center   flex flex-col mb-3  gap-1">
          <p className="my-3 text-3xl font-bold"> Rejected Session </p>
          <p className=" font-semibold text-base">
            {" "}
            Total Rejected Sessions : {rejected?.length}{" "}
          </p>
        </div>
        {rejected.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Session Image</th>
                    <th>Tutor Info</th>
                    <th>Session Title</th>
                    <th>Session Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rejected.map((session, index) => (
                    <tr key={session._id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="h-12 w-12 rounded-sm overflow-hidden">
                          <img
                            src={session.banner}
                            alt="Session"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </td>
                      <td>
                        <p className="text-xl font-semibold">{session.name}</p>
                        <p className="text-base text-gray-600">
                          {session.email}
                        </p>
                      </td>
                      <td>{session.title}</td>
                      <td>
                        <button
                          className="text-base flex gap-1 items-center bg-[#E476E9] font-bold text-[#ffffff]  px-2 py-1 rounded-md"
                          onClick={() => handleStatusChange(session._id)}
                        >
                          <IoGitPullRequestSharp />
                          Request for Pending
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">No Rejected Session </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewAllSession;
