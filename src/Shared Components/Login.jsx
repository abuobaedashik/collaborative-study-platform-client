import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/Auth/Authprovider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { LogInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    LogInUser(data.email, data.password)
      .then((result) => {
        const login = result.user;
        console.log(login, "user login");
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login failed", error);
        const Errormessage =error.message
        toast.error(Errormessage , {
          position: "top-center", 
          autoClose: 3000, 
          pauseOnHover: true,
          draggable: true,
          theme: "colored", 
        })
      });
  };

  return (
    <div>
      <div className="mt-12 px-12 mx-auto py-10 w-[500px] bg-[#e476e9] rounded-xl border-blue-500">
        <div className="text-center font-bold text-4xl">Log in</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your Email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter your Password"
              className="input input-bordered"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-success mt-6 flex items-center justify-center w-full"
          >
            Login
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
            If you have no account go to  <NavLink className="text-base font-semibold text-green-700" to={ "/signup"}>SignUp</NavLink>
          </p>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
