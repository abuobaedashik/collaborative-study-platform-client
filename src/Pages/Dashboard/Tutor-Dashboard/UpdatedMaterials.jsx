import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdatedMaterials = () => {
  const { title, sessionId, materialImage, link, email, _id } = useLoaderData();
  const AxiosSecure = useAxiosSecure();
  const AxiosPublic = useAxiosPublic();

  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset, watch } = useForm();

    const onSubmit = async (data) => {
      let imageUrl = materialImage;

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
        sessionId:data?.sessionId,
        email: user?.email,
        materialImage: imageUrl,
        link:data.link,
      };

      try {
        const response = await AxiosSecure.patch(`/material/update/${_id}`, allData);

        if (response.data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Material Updated Successfully!",
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
        title={"UpdateMaterials"}
        subtitle={`  Believe in
          yourself—you are capable of achieving great things!`}
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
                defaultValue={title}
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
                {...register("image")}
                type="file"
                placeholder="Update Materials image"
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
                defaultValue={link}
                className="input input-bordered"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center mt-8">
              <button className="text-xl font-bold bg-[#0A033C] px-4 rounded-2xl py-2 text-[#ffffff]">
                Update Materials
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatedMaterials;
