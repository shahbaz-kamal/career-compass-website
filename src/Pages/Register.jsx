import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import SectionTitle from "../Components/SectionTitle";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  // *declaring states & navigation functions
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // *getting data from context API
  const { googleSignInUser, registerUser, manageProfileUser } =
    useContext(AuthContext);

  // *google sign in functions
  const handleGoogleSignIn = () => {
    googleSignInUser()
      .then((result) => {
        toast("Google Log In Successful");
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        toast.error(`${error}`);
      });
  };
  //   *register with email & password
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo, email, password);
    if (password.length < 6) {
      return toast("Password must be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      return toast("Password must contain at least 1 uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return toast("Password must contain at least 1 lowercase letter");
    }
    registerUser(email, password)
      .then((result) => {
        manageProfileUser(name, photo)
          .then(() => {
            toast("Registration Process Successful");
            console.log(result.user);
          })
          .catch((errrr) => {
            setError(errrr.message);
            toast(`${errrr.message}`);
          });
      })
      .catch((err) => {
        setError(err.message);
        toast(`${err.message}`);
      });
  };
  return (
    <div className="flex items-center justify-center flex-col min-h-screen pb-10">
      <div>
        <SectionTitle sectionTitle={"Register"}></SectionTitle>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        className="bg-base-200 rounded-lg w-full md:w-[50%] lg:w-[40%] shadow-lg"
      >
        <div className="px-[2rem] pt-[2rem] justify-center items-center w-full">
          <button
            onClick={handleGoogleSignIn}
            className="flex gap-2 items-center justify-center bg-base-300 w-full py-2 rounded-full"
          >
            <FcGoogle size={22}></FcGoogle>
            <span>Sign in with Google</span>
          </button>
        </div>
        <div className="divider px-[2rem] ">OR</div>
        <form onSubmit={handleRegister} className="card-body py-0">
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
