import React, { useContext } from "react";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import create from "../../../assets/image/createtutor.png";
// import { AuthContext } from "../../../Provider/Auth/Authprovider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios"; // Axios import
import { AuthContext } from "../../../Provider/Auth/Authprovider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateSession = () => {
  const AxiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset, watch } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]); 

    try {
      // **Step 1: Image Upload to imgbb**
      const res = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        // **Step 2: Image URL & Form Data Merge**
        const allData = {
          title: data.title,
          name: user?.displayName,
          email: user?.email,
          description: data.description,
          startDate: data.startDate,
          endDate: data.endDate,
          startTime: data.startTime,
          endTime: data.endTime,
          duration: data.duration,
          fee: data.fee,
          status: data.status,
          banner: res.data.data.url, 
        };

        // **Step 3: Send Data to Database**
        const response = await AxiosSecure.post("/session", allData);

        if (response.data.insertedId) {
          reset(); 
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Session Created Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error("Image Upload Failed:", error);
    }
  };

  return (
    <div>
      <DynamicTitle
        subtitle={
          "Create a new session by tutor. When admin approves your session, it will be published."
        }
        title={"Create Session"}
        image={create}
      ></DynamicTitle>

      <div className="mt-12 px-20 mx-auto py-10 w-full bg-[#ffffff] rounded-xl border-blue-500">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Session Title */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-[#131313]">
                Session Title
              </span>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Enter your session title"
              className="input input-bordered"
              required
            />
          </div>

          {/* Tutor Name & Email */}
          <div className="flex items-center w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Tutor Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Tutor Email
                </span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
              />
            </div>
          </div>

          {/* Session Description */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-[#131313]">
                Session Description
              </span>
            </label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Enter session description"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>

          {/* Registration Dates */}
          <div className="flex items-center w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Registration Start Date
                </span>
              </label>
              <input
                {...register("startDate", { required: true })}
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Registration End Date
                </span>
              </label>
              <input
                {...register("endDate", { required: true })}
                type="date"
                min={watch("startDate")}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="flex items-center w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                Class start time
                </span>
              </label>
              <input
                {...register("startTime", { required: true })}
                type="time"
                min={new Date().toISOString().split("T")[0]}
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                 Class End time
                </span>
              </label>
              <input
                {...register("endTime", { required: true })}
                type="time"
                className="input input-bordered"
              />
            </div>
          </div>
          {/* status */}
          <div className="flex items-center w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
               Status
                </span>
              </label>
              <input
                {...register("status", { required: true })}
                type="text"
                 defaultValue={"pending"}
                 readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
               Fee 
                </span>
              </label>
              <input
                {...register("fee", { required: true })}
                type="number"
                defaultValue={0}
                readOnly
                className="input input-bordered"
              />
            </div>
          </div>

          {/* Session Duration */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-[#131313]">
                Session Duration (in hours)
              </span>
            </label>
            <select
              {...register("duration", { required: true })}
              className="input input-bordered"
            >
              <option disabled selected>
                Select Duration
              </option>
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3</option>
            </select>
          </div>


          {/* Image Upload */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-[#131313]">
                Upload Banner Image
              </span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              placeholder="upload session banner"
              accept="image/*"
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center mt-8">
            <button className="text-xl font-bold bg-[#0A033C] px-4 rounded-2xl py-2 text-[#ffffff]">
              Create Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSession;
