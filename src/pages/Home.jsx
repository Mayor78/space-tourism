import React from 'react';
import Navbar from '../components/Navbar';
import mobileBg from '../assets/back-home-mobile.jpg';
import tabletBg from '../assets/background-home-tablet.jpg';
import desktopBg from '../assets/back.jpg';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Images for Different Screen Sizes */}
      <div className="block md:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${mobileBg})` }}></div>
      <div className="hidden md:block lg:hidden absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${tabletBg})` }}></div>
      <div className="hidden lg:block absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${desktopBg})` }}></div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <div className='top-0 sticky bg-opacity-50 backdrop-blur-lg'>
        <Navbar />
        </div>
       
        
        <div className="section">
          <div className="block md:block lg:flex justify-around sm:flex">
            <div>
              <div className="lg:text-3xl text-white sm:justify-start sm:mt-20 uppercase ml-2 mt-8 md:flex justify-center lg:block md:text-4xl md:ml-24 lg:ml-0 ">
                So, you want to travel to Space
              </div>
              <div className="uppercase text-balance text-white mt-2 mr-3 text-8xl sm:text-2xl md:text-9xl lg:text-9xl flex justify-center lg:justify-start">
                 space
               </div>

              <div className="text-white leading-7 mt-2 md:section md:ml-36 lg:ml-0">
                Let’s face it; if you want to go to space, you might as well
                <br />
                genuinely go to outer space and not hover kind of on the
                <br />
                edge of it. Well sit back, and relax because we’ll give you
                <br />
                a truly out of this world experience!
              </div>
            </div>
            <div>
              <div className="animate-shake text-3xl mt-9 sm:mt-32 bg-white md:rounded-full sm:rounded-full sm:py-20 sm:px-10 uppercase rounded-full py-20 px-10 mx-9 flex justify-center items-center">
                Explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
