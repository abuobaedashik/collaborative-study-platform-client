import React, { useContext } from "react";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../Provider/Auth/Authprovider";
import { IoIosCreate } from "react-icons/io";
import note from "../../../assets/image/noteicon.png";
import Swal from "sweetalert2";

const CreateNote = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = (data) => {
   
  axiosPublic.post('/note',data)
    
      .then(res=>{
          console.log(res.data)

          if(res.data.insertedId){
            //  console.log(`${menuItem.name} Added Successfully`)
             reset();
            // sweet alert
            Swal.fire(
                'Good job!',
                `Note Added Successfully`,
                'success'
            )  
            }
      })
  }
  return (
    <div className="mx-16">
      <div className="my-8 mx-auto px-20 py-4 flex flex-col items-center rounded-xl  justify-center bg-[#ffffff] w-full  gap-2 ">
        <div className="text-3xl flex items-center flex-col rounded-2xl  ">
          <img src={note} alt="note" />
          <p className="text-4xl font-bold text-[#0A033C] mb-2">
            {" "}
            Create Note{" "}
          </p>
        </div>
        <div className="text-base pl-3 mb-5 font-semibold text-[#131313] ">
          Keep up the hard work and stay consistent in your studies. Every small
          effort you put in today will lead to great success in the future. Stay
          curious, ask questions, and never stop learning. Believe in
          yourself—you are capable of achieving great things!
        </div>
      </div>

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
              placeholder="Enter your Description here"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
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

export default CreateNote;
