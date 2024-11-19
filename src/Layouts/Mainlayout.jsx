import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Components/Footer";

const Mainlayout = () => {
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <header className="w-[90%]  mx-auto">
        <Navbar></Navbar>
      </header>

      <main className="w-[90%]  mx-auto">
        <Outlet></Outlet>
      </main>

      <footer className="bg-base-200">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Mainlayout;
