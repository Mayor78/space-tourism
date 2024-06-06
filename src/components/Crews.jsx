import React from 'react'

const Crews = ({name, image, role, bio}) => {
  return (
    <div className='z-0'>
        <div className='section sm:block md:flex lg:flex justify-around items-center'>
            <div>
            <div className='text-gray-500 font-normal text-3xl mb-6'>{role}</div>
        <div className='text-white font-light text-5xl mb-7'>{name}</div>
        <div className='text-white leading-7  break-words sm:w-32 md:w-64 lg:w-72 '>{bio}</div>

            </div>
        
        <div className='mb-3'>
            <img src={image} alt="" className=' sm:w-[280px] sm:h-[300px] md:w-[330] md:h[350] lg:h-[400] lg:w-[350]'/>
        </div>
        </div>
       
    </div>
  )
}

export default Crews