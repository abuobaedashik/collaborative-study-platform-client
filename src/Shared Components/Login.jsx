import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/Auth/Authprovider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { LogInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
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
        const Errormessage = error.message;
        toast.error(Errormessage, {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
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

      const role = "student";

      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
        photo: result?.user?.photoURL,
        role,
      };
      console.log(userInfo);

      const res = await axiosPublic.post("/user", userInfo);

      if (res.data.insertedId) {
        console.log("DB Response:", res.data);
        Swal.fire({
          title: "Google Signup Successful!",
          icon: "success",
        });
      }

      navigate(from, { replace: true });

      // if (res.data.insertedId) {

      // }
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      toast.error(error.message, { position: "top-center" });
    }
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
            onClick={handleGoogleSignIn}
            type="button"
            className="btn btn-primary mt-4 flex items-center justify-center w-full"
          >
            Sign in with Google
          </button>

          <p className="my-4 text-base text-white text-center">
            If you have no account go to{" "}
            <NavLink
              className="text-base font-semibold text-green-700"
              to={"/signup"}
            >
              SignUp
            </NavLink>
          </p>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
