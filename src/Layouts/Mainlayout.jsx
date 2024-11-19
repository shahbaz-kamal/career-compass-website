import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Mainlayout = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
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
