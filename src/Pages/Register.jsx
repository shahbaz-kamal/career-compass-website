import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen pb-10">
      <div>
        <h1 className="font-bold text-5xl mb-6">Register</h1>
      </div>
      <div className="bg-base-200 rounded-lg w-full md:w-[50%] lg:w-[40%] shadow-lg">
        <div className="px-[2rem] pt-[2rem] justify-center items-center w-full">
          <button className="flex gap-2 items-center justify-center bg-base-300 w-full py-2 rounded-full">
            <FcGoogle size={22}></FcGoogle>
            <span>Sign in with Google</span>
          </button>
        </div>
        <div className="divider px-[2rem] ">OR</div>
        <form className="card-body py-0">
          <div className="form-control">
            <label className="label">
              <span className="text-base md:text-xl">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base md:text-xl">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter Your photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base md:text-xl">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-base md:text-xl">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className=" bg-color-primary font-bold text-black rounded-md py-3 px-4 hover:bg-color-secondary hover:border-color-secondary transition duration-300">
              Register
            </button>
          </div>
        </form>

        {/* {error && (
          <p className="px-[2rem] font-bold text-red-500 text-center">
            {error}
          </p>
        )} */}

        <p className="p-[2rem] text-center font-semibold">
          Already have an account?{" "}
          <span className="text-red-500 font-bold">
            <Link to={"/log-in"}>Log in Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
