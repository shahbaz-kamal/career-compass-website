import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.webp";
import "./Navbar.css";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();
    toast("Log Out Successful");
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-services"}>All Services</NavLink>
      </li>
      <li>
        <NavLink to={"/success-stories"}>Success Stories</NavLink>
      </li>
      <li>
        <NavLink to={"/events-and-workshops"}>Events & Workshops</NavLink>
      </li>
      <li>
        <NavLink to={"/my-profile"}>My Profile</NavLink>
      </li>
    </>
  );

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="navbar  py-4 md:py-6 px-0 ">
      <div className="navbar-start gap-2 items-center">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-base-300"
          >
            {links}
          </ul>
        </div>
        <h2 className="font-semibold text-2xl hidden md:inline-flex">
          Career Compass
        </h2>
        <div className="w-10 h-10 hidden md:inline-flex">
          <img
            className="w-full h-full object-cover rounded-full"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-center md:hidden ">
        <div className="w-10 h-10">
          <img
            className="w-full h-full object-cover rounded-full"
            src={logo}
            alt=""
          />
        </div>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex gap-2 items-center">
            {user?.photoURL ? (
              <div className="group relative w-10 h-10 rounded-full">
                <img
                  className="  w-full h-full object-cover rounded-full"
                  src={user.photoURL}
                  alt="User Profile"
                />
                <div className="absolute left-1/2 top-full mt-[5px] mb-2 w-max -translate-x-1/2 bg-color-secondary text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {user.displayName || "User name not available"}
                </div>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm text-gray-700"></span>
              </div>
            )}

            <Link
              onClick={handleSignOut}
              to={"/"}
              className="bg-color-primary py-2 px-3 rounded-lg font-bold text-base md:text-xl lg:text-2xl"
            >
              Log Out
            </Link>
          </div>
        ) : (
          <Link
            to={"/log-in"}
            className="bg-color-primary py-2 px-3 rounded-lg font-bold text-base md:text-xl lg:text-2xl"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
