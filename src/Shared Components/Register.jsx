import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/Auth/Authprovider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { span } from "framer-motion/client";
import { toast, ToastContainer } from "react-toastify";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Register = () => {
  const { register, handleSubmit ,reset ,formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic =useAxiosPublic();
  const from = location.state?.from?.pathname || "/";

  const { CreateUser, googleSignIn, UpdateUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    CreateUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser, "user create");
      // Swal.fire({
      //   title: "Registration Successful!",
      //   icon: "success",
      // });
      UpdateUser(data?.name,data?.photo)
      .then(async()=>{
        console.log("user updated successfull")
        reset()

        const name = data?.name
        const email = data?.email
        const role = data?.role
        const photo = data?.photo

        const userInfo = { name,email,role,photo};
        console.log("user info",userInfo)

        const res = await axiosPublic.post("/user", userInfo);

        if (res.data.insertedId) {
          Swal.fire({
            title: "Registration Successful!",
            icon: "success",
          });
          console.log("user data save to database ",res.data)
        }
      })
      
      navigate("/");
    });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log("Google Sign-In Success:", result);

          Swal.fire({
              position: "center",
              icon: "success",
              title: "Google login successfull",
              showConfirmButton: false,
              timer: 1500
            });

      // toast.success("Google Sign-In Successful!", { position: "top-center" });
       const role = "student"
   
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        photo: result?.user?.photoURL,
        role 
      };
      console.log(userInfo)

      const res = await axiosPublic.post("/user", userInfo)
      
      
      if (res.data.insertedId) {
        console.log("DB Response:", res.data);
        Swal.fire({
          title: "Google Register Successful!",
          icon: "success",
        });
      }

      navigate(from, { replace: true });

      
    }
    
    catch (error) {
      console.error("Google Sign-In Error:", error.message);
      toast.error(error.message, { position: "top-center" });
    }
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
              {...register("photo",{
                required:true
              })
              }
              className="file-input file-input-bordered file-input-secondary w-full "
            />
               {errors?.photoURL?.type === "required"  && <span className="text-base font-medium">PhotoURL is not defiend</span>}
          </div>

       

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
            onClick={handleGoogleSignIn}
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
