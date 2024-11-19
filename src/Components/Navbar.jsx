import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.webp";
import "./Navbar.css";

const Navbar = () => {
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
        <Link className="bg-color-primary py-2 px-3 rounded-lg font-bold text-base md:text-xl lg:text-2xl">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
