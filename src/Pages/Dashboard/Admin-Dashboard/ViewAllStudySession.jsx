import React, { useMemo, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import sessionimg from "../../../assets/image/sessionall.png";
import { ToastContainer } from "react-toastify";
import { FaTrash, FaUpload } from "react-icons/fa";
import { MdDoNotDisturb, MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const ViewAllStudySession = () => {
  const axiosSecure = useAxiosSecure();
  const { data: sessions = [], refetch } = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/session");
      return res.data;
    },
  });

  // approved ,rejected and pending sessions

  const approvedSessions = useMemo(
    () => sessions.filter((session) => session.status === "approved"),
    [sessions]
  );

  const rejectedSessions = useMemo(
    () => sessions.filter((session) => session.status === "rejected"),
    [sessions]
  );

  const pendingSessions = useMemo(
    () => sessions.filter((session) => session.status === "pending"),
    [sessions]
  );

  console.log(approvedSessions, rejectedSessions, pendingSessions);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [fee, setFee] = useState(0);

  const handleStatusUpdate = async (id, newStatus) => {
    if (newStatus === "approved") {
      setSelectedSessionId(id);
      setModalOpen(true);
    } else {
      const res = await axiosSecure.patch(`/session/${id}`, {
        status: newStatus,
      });
      if (res.data.modifiedCount > 0) {
        refetch();
        console.log(res.data);
        Swal.fire("State Change", "Status updated successfully!", "success");
      }
    }
  };

  const handleFeeSubmit = async () => {
    const res = await axiosSecure.patch(`/session/${selectedSessionId}`, {
      status: "approved",
      fee: Number(fee),
    });

    if (res.data.modifiedCount > 0) {
      Swal.fire("Success", "Session approved and fee updated!", "success");
      setModalOpen(false);
      setFee(0);
      refetch();
    } else {
      Swal.fire("Error", "Failed to update fee.", "error");
    }
  };

  const handleDlete = (session) => {
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
        axiosSecure.delete(`/session/${session._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Session Deleted Successful",
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
        title="View All Study Sessions"
        subtitle="Explore and Manage Your Study Sessions Effortlessly"
        total={`Total Sessions: ${sessions.length}`}
        total2={`Total Pending Sessions: ${pendingSessions.length}`}
        total3={`Total Approved Sessions: ${approvedSessions.length}`}
        total4={`Total Rejected Sessions: ${rejectedSessions.length}`}
        // todo create more beautiful ui
        image={sessionimg}
      />

      {/* pending session */}
      <div className="mt-5 bg-white py-4 px-6 w-full rounded-lg my-16">
        <div className="justify-center items-center   flex flex-col mb-3  gap-1">
          <p className="my-3 text-3xl font-bold"> Pending Session </p>
          <p className=" font-semibold text-base">
            {" "}
            Total pending Sessions : {pendingSessions?.length}{" "}
          </p>
        </div>
        {pendingSessions.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Session Image</th>
                    <th>Tutor Info</th>
                    <th>Status</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingSessions.map((session, index) => (
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
                          {session.title}
                        </p>
                      </td>
                      <td>
                        {session.status === "pending" ? (
                          <select
                            onChange={(e) =>
                              handleStatusUpdate(session._id, e.target.value)
                            }
                            className="border border-gray-300 px-3 py-1 rounded-md"
                            defaultValue="pending"
                          >
                            <option value="pending" disabled>
                              Pending
                            </option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        ) : (
                          <span
                            className={`px-4 py-1 rounded-md text-white ${
                              session.status === "approved"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          >
                            {session.status}
                          </span>
                        )}
                      </td>
                      <td>
                        <div className="text-base px-2 py-1 text-center rounded-xl w-[60px] flex items-center justify-center bg-red-300">
                          <MdDoNotDisturb />
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
            <div className="text-center">No Pending Session </div>
          </>
        )}
      </div>

      {/* approved session */}
      <div className="mt-5 bg-white py-4 px-6 w-full rounded-lg mb-16">
        <div className="justify-center items-center   flex flex-col mb-3  gap-1">
          <p className="my-3 text-3xl font-bold"> Approved Session </p>
          <p className=" font-semibold text-base">
            {" "}
            Total Approved Sessions : {approvedSessions?.length}{" "}
          </p>
        </div>
        {approvedSessions.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Session Image</th>
                    <th>Tutor Info</th>
                    <th>Status</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedSessions.map((session, index) => (
                    <tr key={session._id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="h-12 w-12 flex gap-1 rounded-sm overflow-hidden">
                          <img
                            src={session?.banner}
                            alt="Session"
                            className="h-full w-full object-cover"
                          />
                         
                        </div>
                      </td>
                      <td>
                        <p className="text-xl font-semibold">{session.name}</p>
                        <p className="text-base text-gray-600">
                          {session.description}
                        </p>
                      </td>
                      <td>
                        <p className="text-base font-semibold">
                          {session.status}
                        </p>
                      </td>
                      <td>
                        <div className="flex items-center flex-col gap-2">
                          <NavLink
                            to={`/dashboard/updatesession/${session._id}`}
                          >
                            <button className="rounded-xl bg-red-600 text-white px-4 py-2">
                              <MdOutlineUpdate />
                            </button>
                          </NavLink>
                          <button
                            onClick={() => handleDlete(session)}
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
            <div className="text-center">No Approved Session </div>
          </>
        )}
      </div>

      {/* rejected session */}
      <div className="mt-5 bg-white py-4 px-6 w-full rounded-lg mb-16">
        <div className="justify-center items-center   flex flex-col mb-3  gap-1">
          <p className="my-3 text-3xl font-bold"> Rejected Session </p>
          <p className=" font-semibold text-base">
            {" "}
            Total Rejected Sessions : {rejectedSessions?.length}{" "}
          </p>
        </div>
        {rejectedSessions.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Session Image</th>
                    <th>Tutor Info</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rejectedSessions.map((session, index) => (
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
                      <td>
                        <p className="text-base font-semibold">
                          {session.status}
                        </p>
                      </td>
                      <td>
                        <div className="text-base px-2 py-1 text-center rounded-xl w-[60px] flex items-center justify-center bg-red-300">
                          <MdDoNotDisturb />
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
            <div className="text-center">No Rejected Session </div>
          </>
        )}
        <ToastContainer />
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-xl font-semibold mb-4">
              Enter Fee for Approval
            </h2>
            <input
              type="number"
              value={fee}
              onChange={(e) => setFee(Math.max(0, Number(e.target.value)))}
              className="border px-4 py-2 rounded w-full mb-4"
              placeholder="Enter fee"
            />
            <div className="flex justify-between">
              <button
                onClick={handleFeeSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => {
                  setModalOpen(false);
                  setFee(0);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAllStudySession;
