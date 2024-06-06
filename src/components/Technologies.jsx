import React, { useState } from 'react';
import { technologies } from '../../data'; // Assuming you have the data array

const Technologies = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNumberClick = (index) => {
    setSelectedIndex(index);
  };

  const handleDotClick = (index) => {
    setSelectedIndex(index);
  };

  const { name, image, description } = technologies[selectedIndex];

  return (
    <div className='  sm:block md:flex lg:flex justify-around mt-5'>
      <div className='hidden sm:hidden md:block lg:block mt-20'>
        {technologies.map((_, index) => (
          <div key={index} className='flex items-center mb-4'>
            <div
              className={`cursor-pointer text-black font-bold rounded-full border border-solid px-4 py-2 ${selectedIndex === index ? 'bg-white text-black' : ''}`}
              onClick={() => handleNumberClick(index)}
            >
              {index + 1}
            </div>
            <div
              className={`sm:flex md:hidden lg:hidden cursor-pointer text-black font-bold rounded-full border border-solid w-8 h-8 flex items-center justify-center ml-2 ${selectedIndex === index ? 'bg-white text-black' : ''}`}
              onClick={() => handleDotClick(index)}
            >
              •
            </div>
          </div>
        ))}
      </div>
      <div className='sm:px-20 md:px-10 lg:px-10'>
        <div className=' text-white font-light mb-7 text-5xl '>{name}</div>
        <div className=' text-white text-wrap leading-10 break-words md:w-72 mb-4'>{description}</div>
      </div>
      <div className=''>
        <img src={image} alt='' className='sm:h-[250px] md:h-[350px] lg:h-[400px]' />
      </div>
    </div>
  );
};

export default Technologies;
