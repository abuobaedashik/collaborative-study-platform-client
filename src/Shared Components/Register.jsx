import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/Auth/Authprovider";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { span } from "framer-motion/client";

const Register = () => {
  const { register, handleSubmit ,  formState: { errors } } = useForm();
  const navigate = useNavigate();

  const { CreateUser, googleSignIn, UpdateUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    CreateUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser, "user create");
      Swal.fire({
        title: "Registration Successful!",
        icon: "success",
      });
      navigate("/");
    });
  };
  return (
    <div>
      <div className="mt-8 px-12 mx-auto py-10 w-[500px] bg-[#e476e9] rounded-xl border-blue-500">
        <div className="text-center font-bold text-4xl">Sign Up</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          /> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: true,
              })}
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: true,
              })}
              type="email"
              placeholder="Enter your Email"
              className="input input-bordered"
              required
            />
          </div>

          {/* {errors?.name?.type === "required" && <p>This field is required</p>} */}

          {/* photo url */}
          {/* <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              {...register("photo")}
              className="file-input file-input-bordered file-input-secondary w-full "
            />
          </div> */}

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              {...register("photoURl",{
                required:true
              })
              }
              className="file-input file-input-bordered file-input-secondary w-full "
            />
          </div>

          {errors.photoURL  && <span className="text-base font-medium">PhotoURL is not defiend</span>}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: true,
              })}
              type="password"
              placeholder="Enter your Password"
              className="input input-bordered"
              required
            />
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Pick your role</span>
              <span className="label-text-alt">Alt label</span>
            </div>
            <select
              {...register("role", {
                required: true,
              })}
              className="select select-bordered"
            >
              <option disabled selected>
                Pick one
              </option>
              <option>student</option>
              <option>tutor</option>
              <option>admin</option>
            </select>
          </label>

          <button className="btn btn-success mt-6 flex items-center justify-center w-full">
            <input type="submit" />
          </button>

          <p className="my-4 text-base text-white text-center">
            Or Social Login
          </p>

          {/* Google Sign In Button */}
          <button
            onClick={googleSignIn}
            type="button"
            className="btn btn-primary mt-4 flex items-center justify-center w-full"
          >
            Sign in with Google
          </button>

          <p className="my-4 text-base text-white text-center">
            Already if you have an account go to{" "}
            <NavLink
              className="text-base font-semibold text-green-700"
              to={"/login"}
            >
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
