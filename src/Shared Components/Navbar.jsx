import { NavLink } from "react-router-dom";
import icon1 from "../../src/assets/image/iconbg1.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Auth/Authprovider";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Navbar = () => {
   const {user,SignOut} =useContext(AuthContext)
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



   const handleSignOut =()=>{
    SignOut()
     .then(()=>{
      // console.log('Logout successful');
      Swal.fire({
        title: "Logout Successful",
        icon: "success"
      });
     })
     .catch(error=>{
      //  console.log(error.message);
      toast.error(error.message, {
        position: "top-center", 
        autoClose: 3000, 
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored", 
      });
     })
  }
  return (
    <div>
      <div

       className={`navbar max-w-[1920px]  fixed z-10    transition-all duration-300 ${
        isScrolled ? "bg-[#FFFFFF]  navbar max-w-[1920px]  fixed z-10 " : "bg-[#E476E9]"
      }`}>
        <div className="flex-1 pl-6 md:pl-16">
          <div className=" text-xl font-bold flex gap-3 items-center justify-between">
            <img src={icon1} alt="" className="w-[35px] h-[35px]" />
            <p className="text-2xl font-semibold"> Collaborative Study Platform</p>
           
          </div>
        </div>
        <div className="flex-none pr-6 md:pr-16">
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <div className="dropdown dropdown-end">
          
            <div className="flex items-center justify-between">
              {user ? (
                <div className=" flex items-center justify-center gap-2">
                  {/* <span className="mr-6">{user?.displayName}</span> */}
                   
                  <button  onClick={handleSignOut}>SignOut</button>
                  <span className="mr-6">
                    {" "}
                    {user ? (
                      <>
                        <img
                          src={user?.photoURL}
                          alt="profile"
                          className="w-10 h-10 rounded-full"
                        />{" "}
                      </>
                    ) : (
                      <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                    )}{" "}
                  </span>
                </div>
              ) : (
                <div>
                  <div className="flex items-center  gap-3 mr-5">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "rounded-md px-3 py-1 text-[#ffffff] bg-[#FFA633] font-bold"
                          : "md:flex gap-1 items-center hidden text-sm font-medium px-3"
                      }
                      to={"/signup"}
                    >
                      <button>Signup</button>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "rounded-md px-3 py-1 text-[#ffffff] bg-[#FFA633] font-bold"
                          : "flex gap-1 items-center text-sm font-medium px-3"
                      }
                      to={"/login"}
                    >
                      <button>Login</button>
                    </NavLink>

                    {/* className="rounded-md px-3 py-1 text-[#ffffff] bg-[#FFA633] font-bold" */}
                  </div>
                </div>
              )}
            </div>

            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Navbar;
