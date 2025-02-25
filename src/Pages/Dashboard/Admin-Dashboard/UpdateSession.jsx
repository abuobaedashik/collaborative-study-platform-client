import { useContext } from "react";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateSession = () => {
  const AxiosSecure = useAxiosSecure();
  const AxiosPublic = useAxiosPublic();
  const { title, description,startDate, endDate, startTime, endTime,duration,fee, status, banner,_id} = useLoaderData(); 
  

  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset, watch } = useForm();

  // const onSubmit = async (data) => {
  //   if (data.image.length > 0) {
  //     const formData = new FormData();
  //     formData.append("image", data.image[0]);
  
  //     try {
  //       const res = await AxiosPublic.post(image_hosting_api, formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });
  
  //       if (res.data.success) {
  //         const allData = {
  //           title: data?.title,
  //           name: user?.displayName,
  //           email: user?.email,
  //           description: data.description,
  //           startDate: data.startDate,
  //           endDate: data.endDate,
  //           startTime: data.startTime,
  //           endTime: data.endTime,
  //           duration: data.duration,
  //           fee: data.fee,
  //           status: data.status,
  //           banner: res.data.data.url, 
  //         };
  //         console.log(allData,"all data ")
  
  //         const response = await AxiosPublic.patch(`/session/update/${_id}`, allData);
  //         console.log(response.data)
  //         if (response.data.modifiedCount > 0) {
  //           Swal.fire({
  //             position: "center",
  //             icon: "success",
  //             title: "Session Updated Successfully!",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       } else {
  //         console.error("Image upload failed:", res.data); 
  //       }
  //     } catch (error) {
  //       console.error("Error uploading image:", error);
  //     }
  //   }
  // };
  

  const onSubmit = async (data) => {
    let imageUrl = banner; 
  
    if (data.image && data.image.length > 0) { 
      const formData = new FormData();
      formData.append("image", data.image[0]);
  
      try {
        const res = await AxiosPublic.post(image_hosting_api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        if (res.data.success) {
          imageUrl = res.data.data.url;
        } else {
          console.error("Image upload failed:", res.data);
          return;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        return;
      }
    }
  

    const allData = {
      title: data?.title,
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
      banner: imageUrl, 
    };
  
    try {
      const response = await AxiosSecure.patch(`/session/update/${_id}`, allData);
  
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Session Updated Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        reset(); 
      }
    } catch (error) {
      console.error("Error updating session:", error);
    }
  };
  

  return (
    <div>
      <DynamicTitle
        subtitle={"Update your session details."}
        title={"Update Session"}
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
              defaultValue={title}
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
              defaultValue={description}
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
                defaultValue={startDate}
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
                defaultValue={endDate}
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
                defaultValue={startTime}
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
                defaultValue={endTime}
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
              defaultValue={duration}
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


          {/* session fee and status */}
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
                 defaultValue={status}
                 readOnly
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
                {...register("fee", { required: true })}
                type="number"
                defaultValue={fee}
                className="input input-bordered"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-[#131313]">
                Upload Banner Image
              </span>
            </label>
            <input
              {...register("image")}
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

export default UpdateSession;
