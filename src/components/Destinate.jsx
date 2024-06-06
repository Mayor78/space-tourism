import React from 'react'

const Destinate = ({name, image,description, distance,travel}) => {
  return (
    <div className='z-0'>

         <div className='block section sm:flex sm:justify-evenly justify-center mb-3'>
         <div className='w-[150px]  sm:w-[230px] h-20 mb-10 ml-32 sm:mr-32 '>
                 <img src={image}alt=""className='animate-shake hover:animate-rotate-on-hover' />
        </div>
            <div>
            <div className='text-white text-5xl mt-20 mb-4 font-light left-7 '>{name}</div>
            <div className='text-white text-wrap leading-7 break-words w-64 mb-4'>{description}</div>
              <div><h1><hr /></h1></div>
              <div className='flex gap-5'>
              <div className='text-white'> <span className='tex-sm font-thin'>AVG. DISTANCE</span> <br /> <span className='text-2xl'>{distance} </span></div>
             <div className='text-white'>EST TIME TRAVEL <br /> <span className='text-2xl'>{travel}</span></div>
              </div>
             
            </div>
         </div>
      
        
        
       
    </div>
  )
}

export default Destinate