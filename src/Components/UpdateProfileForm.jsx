import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateProfileForm = () => {
  const {
    user,
    manageProfileUser,
    setWantToUpdateProfile,
    wantToUpdateProfile,
  } = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    manageProfileUser(name, photo)
      .then((result) => {
        toast("Update Process Successful");
      })
      .catch((errrr) => {
        console.log(errrr.message);
        toast(`${errrr.message}`);
      });
    setWantToUpdateProfile(!wantToUpdateProfile);
  };
  return (
    <div className="pt-0 mt-0">
      <form onSubmit={handleUpdateProfile} className="card-body mt-0 pt-0">
        <div className="form-control relative">
          <label className="label">
            <span className="text-base md:text-xl">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="text-base md:text-xl">Photo URL</span>
          </label>
          <input
            name="photo"
            type="text"
            placeholder="Enter your Photo URL"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="py-2 px-4 bg-color-secondary rounded-lg hover:scale-110 transition duration-200">
            Update Your Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
