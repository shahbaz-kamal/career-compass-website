import React, { useContext, useState } from "react";
import SectionTitle from "../Components/SectionTitle";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { user, handleResetPasswordUser } = useContext(AuthContext);

  const location = useLocation();
  //   console.log(location.state.email);
  const handleReset = (e) => {
    e.preventDefault();
    const confirmEmail = e.target.confirmEmail.value;
    console.log(confirmEmail);
    if (!confirmEmail) {
      return toast.error("Please provide an email address");
    }
    if (location?.state?.email) {
      if (location?.state?.email != confirmEmail) {
        return toast("Email dosen't match");
      }
    }

    handleResetPasswordUser(confirmEmail)
      .then(() => {
        window.open("https://mail.google.com/", "_blank");
        toast.success("Password reset email send");
      })
      .catch((err) => toast("err.message"));
  };
  return (
    <div className="flex items-center  flex-col min-h-screen pb-10 ">
      <header>
        <SectionTitle sectionTitle={"Reset Your Password"}></SectionTitle>
      </header>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        className="bg-base-200 rounded-lg w-full md:w-[50%] lg:w-[40%] shadow-lg"
      >
        <form onSubmit={handleReset} className="card-body mt-0 pt-0">
          {location?.state?.email ? (
            <div className="form-control">
              <label className="label">
                <span className="text-base md:text-xl">Email</span>
              </label>
              <input
                value={location?.state?.email}
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
          ) : (
            ""
          )}
          <div className="form-control">
            <label className="label">
              <span className="text-base md:text-xl">Confirm Your Email</span>
            </label>
            <input
              name="confirmEmail"
              type="email"
              placeholder="Confirm your email "
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="bg-color-primary font-bold text-black rounded-md py-3 px-4 hover:bg-color-secondary hover:border-color-secondary transition duration-300">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
