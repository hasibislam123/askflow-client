import React from 'react';
import location_merchant from '../../../assets/location-merchant.png'
import be_a_merchant_bg from '../../../assets/be-a-merchant-bg.png'

const Section4 = () => {
   return (
      <div className="bg-secondary relative overflow-hidden rounded-4xl">

         <img
            className="w-full h-[50%] absolute -top object-cover"
            
            src={be_a_merchant_bg}
            alt=""
         />

         
         <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-10 py-10 lg:py-20 gap-10">

            
            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
               <h1 className="text-[32px] md:text-[40px] font-extrabold text-white leading-tight">
                  Merchant and Customer Satisfaction is Our First Priority
               </h1>

               <p className="text-[#DADADA] text-[16px] md:text-[18px]">
                  We offer the lowest delivery charge with the highest value along with 100% safety of your product.
                  Pathao courier delivers your parcels in every corner of Bangladesh right on time.
               </p>

               <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6">
                  <button className="px-6 py-3 bg-[#CAEB66] text-[#1F1F1F] font-semibold rounded-4xl shadow-md transition duration-300 w-full sm:w-auto">
                     Track Your Parcel
                  </button>

                  <button className="px-6 py-3 border text-white border-gray-300  font-medium rounded-4xl hover:bg-[#CAEB66] transition duration-300 w-full sm:w-auto">
                     Be A Rider
                  </button>
               </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
               <img
                  className="w-[230px] md:w-[320px] lg:w-[420px] z-20 relative"
                  src={location_merchant}
                  alt=""
               />
            </div>

         </div>
      </div>
   );
};

export default Section4;