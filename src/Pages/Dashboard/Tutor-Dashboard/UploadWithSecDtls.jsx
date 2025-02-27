import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UploadWithSecDtls = () => {
  const AxiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset, watch } = useForm();
  const session = useLoaderData();
  console.log(session);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const res = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data.data)

      if (res.data.success) {
        const allData = {
          title: session.title,
          Sessionid: session._id,
          email: user?.email,
          materialImage: res.data.data.url,
          link: data.link,
        };

        console.log(allData)
        const response = await AxiosSecure.post("/material", allData);

        if (response.data.insertedId) {
          reset(); 
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Material Uploaded Successfully!",
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
        title={"Upload Materials"}
        subtitle={` Keep up the hard work and stay consistent in your studies. Every small
          effort you put in today will lead to great success in the future. Stay
          curious, ask questions, and never stop learning. Believe in
          yourself—you are capable of achieving great things!`}
        // image={note}
      ></DynamicTitle>

      <div className="mt-10  py-16 rounded-xl px-20 bg-[#ffffff]  flex items-center justify-center ">
        <div className="mt-4 px-16 py-10 rounded-lg bg-[#F3CFCF] shadow-xl hover:shadow-2xl ">
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
                defaultValue={session.title}
                readOnly
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

            {/* Image Upload */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Upload Material Image
                </span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                placeholder="upload Materials image"
                accept="image/*"
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* drive link */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Session Title
                </span>
              </label>
              <input
                {...register("link", { required: true })}
                type="text"
                placeholder="Enter material link"
                className="input input-bordered"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center mt-8">
              <button className="text-xl font-bold bg-[#0A033C] px-4 rounded-2xl py-2 text-[#ffffff]">
                Upload Materials
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadWithSecDtls;
