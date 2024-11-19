import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";

const Error = () => {
  return (
    <div className="min-h-screen py-10 flex flex-col gap-6 items-center justify-center">
      <div>
        <HiOutlineEmojiSad
          color="rgb(239,68,68)"
          size={100}
        ></HiOutlineEmojiSad>
      </div>
      <h1 className="text-5xl text-red-500">404</h1>
      <p className="text-2xl text-red-400">
        The page you are looking for dosen't Exist or an other error occured.
      </p>
    </div>
  );
};

export default Error;
