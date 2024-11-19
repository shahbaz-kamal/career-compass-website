import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div className="w-[90%]  mx-auto">
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer></footer>
    </div>
  );
};

export default Mainlayout;
