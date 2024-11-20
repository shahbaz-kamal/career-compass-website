import React, { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa6";

const Login = () => {
  // *declaring states
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  // *getting data from context API
  const { googleSignInUser, loginUser } = useContext(AuthContext);
  // *google sign in functions
  const handleGoogleSignIn = () => {
    googleSignInUser()
      .then((result) => {
        if (location?.state?.from) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
        toast("Google Log In Successful");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(`${err.message}`);
        console.log(err.message);
      });
  };

  //   *Login Functions

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        if (location?.state?.from) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
        toast("Login Successful");
      })
      .catch((err) => {
        setError(err.message);
        toast.warn(`${err.message}`);
      });
  };

  //   *toggling password field

  const handleToggle = () => {
    const dummy = !isVisible;
    setIsVisible(dummy);
  };

  useEffect(() => {
    if (location?.state?.toastToBeShown) {
      toast(`${location.state.toastMessage}`);
      navigate(location.pathname, {
        state: { ...location.state, toastToBeShown: false },
        replace: true,
      });
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col min-h-screen pb-10 ">
      <div>
        <SectionTitle sectionTitle={"Login"}></SectionTitle>
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
        <form onSubmit={handleLogin} className="card-body mt-0 pt-0">
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
          <div className="form-control relative">
            <label className="label">
              <span className="text-base md:text-xl">Password</span>
            </label>
            <input
              name="password"
              type={isVisible ? "password" : "text"}
              placeholder="password"
              className="input input-bordered"
              required
            />

            <div onClick={handleToggle} className="absolute right-4 bottom-12">
              <FaEye></FaEye>
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="bg-color-primary font-bold text-black rounded-md py-3 px-4 hover:bg-color-secondary hover:border-color-secondary transition duration-300">
              Login
            </button>
          </div>
        </form>

        {/* {error && (
          <p className="px-[2rem] font-bold text-red-500 text-center">
            {error}
          </p>
        )} */}

        <p className="p-[2rem] text-center font-semibold">
          New to this Website?{" "}
          <span className="text-red-500 font-bold">
            <Link to={"/register"}>Register Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
