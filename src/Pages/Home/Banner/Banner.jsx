import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import { FaArrowRight } from 'react-icons/fa';
const Banner = () => {
   return (

      <Carousel
         autoPlay={true}
         infiniteLoop={true}
         showIndicators={true}
         className='mt-4'
      >
         <div className=''>
            <img src={banner1} className="w-full" />

            {/* Buttons bottom center */}
            <div className="absolute bottom-4 left-69 top-100 transform -translate-x-1/2 
                   flex items-center space-x-4">

               <button className="flex items-center justify-center px-6 py-3 bg-[#CAEB66] text-[#1F1F1F] font-semibold rounded-4xl shadow-md transition duration-400">
                  Track Your Parcel
               </button>

               <div className='bg-[#1F1F1F] h-11 w-11 rounded-4xl flex justify-center items-center'>
                  <FaArrowRight className="rotate-[300deg] h-5 w-5 text-[#CAEB66]" />
               </div>

               <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-[#1F1F1F] font-medium rounded-4xl hover:bg-[#CAEB66] transition duration-300">
                  <span>Be A Rider</span>
               </button>
            </div>
         </div>
         <div>
            <img src={banner2} className="w-full" />

            {/* Buttons bottom center */}
            <div className="absolute bottom-4 left-69 top-100 transform -translate-x-1/2 
                   flex items-center space-x-4">

               <button className="flex items-center justify-center px-6 py-3 bg-[#CAEB66] text-[#1F1F1F] font-semibold rounded-4xl shadow-md transition duration-400">
                  Track Your Parcel
               </button>

               <div className='bg-[#1F1F1F] h-11 w-11 rounded-4xl flex justify-center items-center'>
                  <FaArrowRight className="rotate-[300deg] h-5 w-5 text-[#CAEB66]" />
               </div>

               <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-[#1F1F1F] font-medium rounded-4xl hover:bg-[#CAEB66] transition duration-300">
                  <span>Be A Rider</span>
               </button>
            </div>
         </div>
         <div>
            <img src={banner3} className="w-full" />

            {/* Buttons bottom center */}
            <div className="absolute bottom-4 left-69 top-100 transform -translate-x-1/2 
                   flex items-center space-x-4">

               <button className="flex items-center justify-center px-6 py-3 bg-[#CAEB66] text-[#1F1F1F] font-semibold rounded-4xl shadow-md transition duration-400">
                  Track Your Parcel
               </button>

               <div className='bg-[#1F1F1F] h-11 w-11 rounded-4xl flex justify-center items-center'>
                  <FaArrowRight className="rotate-[300deg] h-5 w-5 text-[#CAEB66]" />
               </div>

               <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-[#1F1F1F] font-medium rounded-4xl hover:bg-[#CAEB66] transition duration-300">
                  <span>Be A Rider</span>
               </button>
            </div>
         </div>


      </Carousel>

   );
};

export default Banner;