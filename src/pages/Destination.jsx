import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { destinations } from "../../data";
import Destinate from "../components/Destinate";
import { FaRegCircleDot } from "react-icons/fa6";
import mobileBg from "../assets/background-destination-mobile.jpg";
import tabletBg from "../assets/background-destination-tablet.jpg";
import desktopBg from "../assets/background-destination-desktop.jpg";

const Destination = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDotClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${mobileBg})` }}
      ></div>
      <div
        className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${tabletBg})` }}
      ></div>
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${desktopBg})` }}
      ></div>

      <div className="top-0 sticky bg-opacity-50 backdrop-blur-lg z-10">
        <Navbar />
      </div>

      <div className="section flex gap-3 relative ">
        <div className="text-slate-300">01</div>
        <div className="uppercase text-white font-bold">
          Pick your destination
        </div>
      </div>

      <div className="block md:flex-cols-2 sm:flex-col relative ">
        <div className="text-white uppercase ">
          <div className="flex justify-center ml-20 gap-5 mb-3">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className={`cursor-pointer mr-4${
                  selectedIndex === index
                    ? "text-white border-b-4"
                    : "text-gray-400"
                }`}
                onClick={() => handleDotClick(index)}
              >
                {destination.name}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1 text-gray-400">
            {destinations.map((_, index) => (
              <FaRegCircleDot
                key={index}
                className={`text-1xl cursor-pointer ${
                  selectedIndex === index ? "text-white" : "text-gray-400"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>

        {destinations
          .slice(selectedIndex, selectedIndex + 1)
          .map((destination) => (
            <Destinate key={destination.name} {...destination} />
          ))}
      </div>
    </div>
  );
};

export default Destination;
