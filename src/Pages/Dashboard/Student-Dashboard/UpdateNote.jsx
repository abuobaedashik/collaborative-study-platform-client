import React, { useContext } from "react";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import update from "../../../assets/image/details.png";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateNote = () => {
  const { title, description, email, _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const navigate =useNavigate()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const noteItem = {
      title: data.title,
      description: data.description,
    };

    axiosPublic
      .patch(`/note/${_id}`, noteItem)

      .then((res) => {
        console.log(res.data);

        if (res.data.modifiedCount > 0) {
          //  console.log(`${menuItem.name} Added Successfully`)
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Note has been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/dashboard/manage-note/notedetails/${_id}`)
         
        }
      });
  };
  return (
    <div>
      <DynamicTitle
        subtitle={"Update Your Notes in Detail"}
        title={"Update Note"}
        image={update}
      ></DynamicTitle>
      <div className="mt-12 px-20  mx-auto py-10 w-full bg-[#ffffff] rounded-xl border-blue-500">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="flex items-center w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Email
                </span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                defaultValue={user.email}
                readOnly
                placeholder="Enter your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Title
                </span>
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                defaultValue={title}
                placeholder="Enter your Note Title"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-[#131313]">
                Title
              </span>
            </label>
            <textarea
              {...register("description", { required: true })}
              defaultValue={description}
              placeholder="Enter your Description here"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-xl font-bold bg-[#0A033C] px-4 rounded-2xl  py-2 text-[#ffffff]">
              Update Your Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNote;
