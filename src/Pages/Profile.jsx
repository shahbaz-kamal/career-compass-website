import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdEmail } from "react-icons/md";
import UpdateProfileForm from "../Components/UpdateProfileForm";
import SectionTitle from "../Components/SectionTitle";

const Profile = () => {
  const { user, setWantToUpdateProfile, wantToUpdateProfile } =
    useContext(AuthContext);
  console.log(wantToUpdateProfile);
  const handleUpdateProfile = () => {
    setWantToUpdateProfile(!wantToUpdateProfile);
    console.log(wantToUpdateProfile);
  };

  return (
    <div>
      <header>
        <SectionTitle sectionTitle={"My profile Information"}></SectionTitle>
      </header>
      <div
        data-aos="fade-up"
        className="flex items-center justify-center mb-6 md:mb-14 "
      >
        {wantToUpdateProfile ? (
          <div className="card bg-base-200 w-96  shadow-xl  ">
            <figure className="px-10 pt-10 w-[100%]  ">
              <img
                src={user.photoURL}
                alt="Shoes"
                className="rounded-xl w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{user.displayName}</h2>
              <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                <MdEmail></MdEmail>
                <p>{user.email}</p>
              </div>
            </div>
            <UpdateProfileForm></UpdateProfileForm>
          </div>
        ) : (
          <div className="card bg-base-200 w-96  shadow-xl  ">
            <figure className="px-10 pt-10 w-[100%]  ">
              <img
                src={user.photoURL}
                alt="Shoes"
                className="rounded-xl w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{user.displayName}</h2>
              <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                <MdEmail></MdEmail>
                <p>{user.email}</p>
              </div>
              {!wantToUpdateProfile ? (
                <div className="card-actions">
                  <button
                    onClick={handleUpdateProfile}
                    className="py-2 px-4 bg-color-secondary rounded-lg hover:scale-110 transition duration-200"
                  >
                    Update Profile
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
