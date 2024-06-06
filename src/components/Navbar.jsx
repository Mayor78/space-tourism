import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import close from "../assets/icon-close.svg";
import ham from "../assets/hambugger.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const width = {
    width: "60vw",
  };

  return (
    <div>
      {/* Mobile View */}
      <div className="md:flex lg:hidden sm:hidden flex justify-between py-6 px-5 ">
        <div>
          <img src={logo} alt="Logo" className="pr-3" />
        </div>
        <motion.div
          className="z-10"
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={ham}
            alt="Hamburger Menu"
            className="text-1xl mt-3"
            onClick={() => setNav(true)}
          />
          <div className={nav ? "block w-5 " : "hidden"}>
            <div
              className=" fixed h-[100] w-[70%] top-0
           right-0  bg-gray-400  text-white flex 
           flex-col justify-center items-center 
           shadow-lg gap-8 py-8  opacity-95 "
            >
              <div className="ml-56">
                <img
                  src={close}
                  alt="Close Menu"
                  onClick={() => setNav(false)}
                  className=" flex top-0 "
                />
              </div>

              <NavLink to={"/"} onClick={() => setNav(false)}>
                <div className="flex gap-1 hover:underline">
                  00<span>HOME</span>
                </div>
              </NavLink>
              <NavLink to={"/destination"} onClick={() => setNav(false)}>
                <div className="hover:underline">
                  01 <span>DESTINATION</span>
                </div>
              </NavLink>
              <Link to={"/crew"} onClick={() => setNav(false)}>
                <div className="hover:underline">
                  02 <span>CREW</span>
                </div>
              </Link>
              <Link to={"/technology"} onClick={() => setNav(false)}>
                <div className="hover:underline">
                  03 <span>TECHNOLOGY</span>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:hidden lg:flex sm:flex sticky top-0 z-10 bg-opacity-50 backdrop-blur-lg">
        <div className="3xl mt-5 px-5">
          <img src={logo} alt="Logo" />
        </div>

        <div className="3xl text-black mt-10 ml-6 w-96 z-10">
          <hr />
          <span className="hidden">fghj</span>
        </div>

        <div className="min-w-96  mt-5 bg-opacity-15" style={width}>
          <div className="flex gap-2 mt-2 px-40 text-white py-1">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "border-b-4" : "")}
            >
              <div className="flex gap-1">
                00<span>HOME</span>
              </div>
            </NavLink>
            <NavLink
              to={"/destination"}
              className={({ isActive }) => (isActive ? "border-b-4" : "")}
            >
              <div>
                01 <span>DESTINATION</span>
              </div>
            </NavLink>
            <NavLink
              to={"/crew"}
              className={({ isActive }) => (isActive ? "border-b-4" : "")}
            >
              <div>
                02 <span>CREW</span>
              </div>
            </NavLink>
            <NavLink
              to={"/technology"}
              className={({ isActive }) => (isActive ? "border-b-4" : "")}
            >
              <div>
                03 <span>TECHNOLOGY</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
