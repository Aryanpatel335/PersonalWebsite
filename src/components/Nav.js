import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo_AP from "../resources/logo_AP.png";
// import resume from "../../resources/Resume_Aryan_Patel_02_23_2_0.pdf";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="flex justify-between items-center">
        {!nav ? (
          <>
            <img className="logo w-12 h-12 mr-5" src={logo_AP} alt="logo" />

            <h1 className="w-full text-3xl font-bold">aryan patel</h1>
          </>
        ) : null}
      </div>

      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#about" className="text-white no-underline hover:underline">
            about
          </a>
        </li>
        <li className="p-4">
          <a
            href="#experience"
            className="text-white no-underline hover:underline"
          >
            experience
          </a>
        </li>
        <li className="p-4">
          <a
            href="#projects"
            className="text-white no-underline hover:underline"
          >
            projects
          </a>
        </li>
        <li className="p-4">
          <a
            href="#contact"
            className="text-white no-underline hover:underline"
          >
            contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div className="flex items-center mt-5">
          <img
            className="logo ml-5 mx-auto w-10 h-10"
            src={logo_AP}
            alt="logo"
          />
          <h1 className="w-full text-3xl font-bold">aryan patel</h1>
        </div>

        <li className="p-4 border-b border-gray-600 mt-5">
          <a href="#about" className="text-white no-underline hover:underline">
            About
          </a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a
            href="#experience"
            className="text-white no-underline hover:underline"
          >
            Experience
          </a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a
            href="#projects"
            className="text-white no-underline hover:underline"
          >
            Projects
          </a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a
            href="#contact"
            className="text-white no-underline hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
