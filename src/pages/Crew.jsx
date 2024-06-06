import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import mobileBg from '../assets/crewimage/background-crew-mobile.jpg';
import tabletBg from '../assets/crewimage/background-crew-tablet.jpg';
import desktopBg from '../assets/crewimage/background-crew-desktop.jpg';
import Navbar from '../components/Navbar';
import Crews from '../components/Crews';
import { FaRegCircleDot } from "react-icons/fa6";
import { crews } from '../../data';

const Crew = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleDotClick = (index) => {
    setSelectedIndex(index);
  };

  const handleSwipe = (direction) => {
    if (direction === 'LEFT' && selectedIndex < crews.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (direction === 'RIGHT' && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="relative min-h-screen">
      <div className="block md:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${mobileBg})` }}></div>
      <div className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${tabletBg})` }}></div>
      <div className="hidden lg:block absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${desktopBg})` }}></div>

      <div className="top-0 sticky bg-opacity-50 backdrop-blur-lg z-10">
        <Navbar  />
      </div>
      <div className='section flex gap-3 relative'>
        <div className='text-slate-300'>02</div>
        <div className='uppercase text-white font-bold'>
          Meet Your Crew
        </div>
      </div>
      <div className='block md:flex-cols-2 sm:flex-col relative'{...swipeHandlers}>
        <div className='text-white uppercase'>
          <div className='flex justify-center ml-20 gap-5 mb-3'>
            {crews.map((crew, index) => (
              <div
                key={index}
                className={`cursor-pointer mr-4 ${selectedIndex === index ? 'text-white border-b-4' : 'text-gray-400'}`}
                onClick={() => handleDotClick(index)}
              >
                {/* {crew.name} */}
              </div>
            ))}
          </div>
          <div className='flex justify-center gap-1 text-gray-400'>
            {crews.map((_, index) => (
              <div key={index}>
                <FaRegCircleDot
                  className={`text-1xl cursor-pointer ${selectedIndex === index ? 'text-white' : 'text-gray-400'}`}
                  onClick={() => handleDotClick(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div {...swipeHandlers} className="overflow-hidden">
          {crews.slice(selectedIndex, selectedIndex + 1).map((crew) => (
            <Crews key={crew.name} {...crew} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crew;
