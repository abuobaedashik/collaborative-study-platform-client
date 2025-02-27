import { NavLink } from "react-router-dom";
import icon1 from "../../src/assets/image/iconbg1.png";
import icon2 from "../../src/assets/image/iconimg.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Auth/Authprovider";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
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

  const handleSignOut = () => {
    SignOut()
      .then(() => {
        // console.log('Logout successful');
        Swal.fire({
          title: "Logout Successful",
          icon: "success",
        });
      })
      .catch((error) => {
        //  console.log(error.message);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      });
  };
  return (
    <div>
      <div
        className={`navbar  md:max-w-[1920px]  fixed z-50 md:py-6 py-2  sm:mb-2 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFFFFF]  navbar max-w-[1920px]  fixed z-10 "
            : "bg-[#F3CFCF]"
        }`}
      >
        <div className="md:flex-1 pl-2 md:pl-16">
          <div className=" text-xl font-bold flex gap-3 text-[#0A033C] items-center justify-between">
            <div className="flex item-center">
              <img src={icon2} alt="" className="w-[35px] h-[35px]" />
              <p className="text-xl  sm:text-3xl text-[#0A033C] font-bold">
                {" "}
                EduHive
              </p>
            </div>
         
          </div>
        </div>

        <div className="px-12 flex items-center text-xl font-bold text-[#0A033C]  mb-2 navbar-center">
              <NavLink
                className="text-base hidden md:flex font-semibold"
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                className="text-base hidden md:flex font-semibold ml-6"
                to={"/contact-info"}
              >
                Contact
              </NavLink>
              {user && (
                <NavLink
                  className="text-base font-semibold sm:ml-6"
                  to={"/dashboard"}
                >
                  Dashboard
                </NavLink>
              )}
            </div>

        <div className="flex-none md:pr-16">
          <div className="dropdown dropdown-end">
            <div className="flex items-center mb-3 justify-between">
              {user ? (
                <div className=" flex items-center justify-center gap-2">
                  {/* <span className="mr-6">{user?.displayName}</span> */}

                  <button onClick={handleSignOut}>SignOut</button>
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
                          : "md:flex gap-1 items-center text-sm font-medium px-3"
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
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Navbar;
