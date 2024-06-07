import React from 'react'

const Technologies = ({name,image,description}) => {
  return (
    <div>
        <div className=' sm:block md:flex lg:flex justify-around mt-5'>
            <div className='hidden sm:hidden md:block lg:block mt-20 '>
                <div className='text-white font-bold rounded-full border border-solid px-4 py-2 gap-3 mb-4 '>1</div>
                <div className='text-white font-bold rounded-full border border-solid px-4 py-2 mb-4 '>2</div>
                <div className='text-white font-bold rounded-full border border-solid px-4 py-2 mb '>3</div>
            </div>
            <div>
                
                <div className='text-white font-light mb-7 text-7xl'>{name}</div>
                <div className='text-white text-wrap leading-10 break-words md:w-72 mb-4'>{description}</div>
            </div>
            <div>
                <img src={image} alt='' className='sm:h-[250px] md:h-[350px] lg:h-[400px]'/>
                </div>
    
             
        </div>
    </div>
  )
}

export default Technologies