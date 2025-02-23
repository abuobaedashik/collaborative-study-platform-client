import React, { useContext } from "react";
import DynamicTitle from "../../../Shared Components/DynamicTitle";
import create from "../../../assets/image/createtutor.png";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateSession = () => {
  const AxiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    AxiosSecure.post("/session", data)
    .then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Session Create Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <DynamicTitle
        subtitle={
          "Create a new session by tutor. When admin approver your session it will be published. By default you create a free session .Admin can modify it "
        }
        title={"Create Session"}
        image={create}
      ></DynamicTitle>

      <div className="mt-12 px-20  mx-auto py-10 w-full bg-[#ffffff] rounded-xl border-blue-500">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* tutor info  */}
          <div className="flex items-center w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Tutor Name
                </span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                defaultValue={user?.displayName}
                readOnly
                placeholder="Enter your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Tutor Email
                </span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                defaultValue={user?.email}
                placeholder="Enter your Note Title"
                className="input input-bordered"
                required
                readOnly
              />
            </div>
          </div>
          {/* session Description */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-[#131313]">
                session Description
              </span>
            </label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Enter session Description "
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
          {/* start and end date */}
          <div className="flex items-center w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Registration start date
                </span>
              </label>
              <input
                {...register("startDate", { required: true })}
                type="date"
                placeholder=" Enter Registation Start Date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Registration end date
                </span>
              </label>
              <input
                {...register("endDate", { required: true })}
                type="date"
                placeholder="Enter Registation End Date"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* class start & end date */}
          <div className="flex items-center w-full gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Class start date
                </span>
              </label>
              <input
                {...register("Class-StartDate", { required: true })}
                type="date"
                placeholder="Enter class start date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Class end date
                </span>
              </label>
              <input
                {...register("Class-endDate", { required: true })}
                type="date"
                placeholder="Enter class end date"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* session duration */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-[#131313]">
                Session duration
              </span>
            </label>
            <select
              {...register("duration", { required: true })}
              placeholder="Enter session duration"
              className="input input-bordered"
              required
            >
              <option disabled selected>
                Choice Your Session Duration
              </option>
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3</option>
              <option>3.5</option>
              <option>4</option>
            </select>
          </div>
          {/*registation fee & status  */}
          <div className="flex items-center w-full gap-5">
            {/* fee */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Registration fee (Only Admin Access)
                </span>
              </label>
              <input
                {...register("fee", { required: true })}
                type="number"
                placeholder="Enter Registation Fee (Only Admin access)"
                className="input input-bordered"
                readOnly
                defaultValue={0}
              />
            </div>
            {/* status */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#131313]">
                  Status (Only Admin access)
                </span>
              </label>
              <input
                {...register("status", { required: true })}
                type="text"
                defaultValue={"pending"}
                placeholder="Status (Only Admin access)"
                className="input input-bordered"
                readOnly
              />
            </div>
          </div>

          {/* image */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl font-bold text-[#131313]">
                Banner Url
              </span>
            </label>
            <input
              {...register("banner", { required: true })}
              type="text"
              placeholder="Banner imagae url"
              className="input input-bordered"
            />
          </div>

          <div className="flex items-center justify-center mt-8">
            <button className="text-xl font-bold bg-[#0A033C] px-4 rounded-2xl  py-2 text-[#ffffff]">
              Add to Node
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSession;
