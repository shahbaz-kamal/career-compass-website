import React from "react";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <div className="w-[90%]  mx-auto " data-aos="fade-right">
      <footer className="footer  text-base-content p-10  place-items-center md:place-items-start">
        <aside className="flex flex-col justify-center items-center md:block">
          <img
            className="w-16 h-16 rounded-3xl hover:scale-125 transition duration-200 ease-in-out mb-0 md:mb-3 "
            src={logo}
            alt=""
          />
          <p className="text-center md:text-start ">
            <span className="font-extrabold text-xl md:text-2xl">
              Career Compass
            </span>
            <br />
            <span className="text-lg md:text-xl">
              {" "}
              Providing reliable career guidance since 2015
            </span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-xl md:text-2xl">Services</h6>
          <a className="link link-hover text-base md:text-lg">Branding</a>
          <a className="link link-hover text-base md:text-lg">Design</a>
          <a className="link link-hover text-base md:text-lg">Marketing</a>
          <a className="link link-hover text-base md:text-lg">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl md:text-2xl">Company</h6>
          <a className="link link-hover text-base md:text-lg">About us</a>
          <a className="link link-hover text-base md:text-lg">Contact</a>
          <a className="link link-hover text-base md:text-lg">Jobs</a>
          <a className="link link-hover text-base md:text-lg">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl md:text-2xl">Legal</h6>
          <a className="link link-hover text-base md:text-lg">Terms of use</a>
          <a className="link link-hover text-base md:text-lg">Privacy policy</a>
          <a className="link link-hover text-base md:text-lg">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
