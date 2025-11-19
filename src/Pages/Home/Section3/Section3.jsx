import React from 'react';
import live_tracking from '../../../assets/live-tracking.png';
import safe_delivery from '../../../assets/safe-delivery.png';


const Section3 = () => {
   return (
      <div className="grid grid-cols-1 gap-6">

         <div className="flex flex-col md:flex-row bg-white p-5 rounded-3xl items-center md:items-start gap-6">
            <img className="w-32 md:w-40" src={live_tracking} alt="" />

            <div className=" divider divider-horizontal"></div>

            <div className="text-center md:text-left">
               <h1 className="text-3xl font-bold mb-6">Live Parcel Tracking</h1>
               <p>
                  Stay updated in real-time with our live parcel tracking feature.
                  From pick-up to delivery, monitor your shipment's journey and get
                  instant status updates for complete peace of mind.
               </p>
            </div>
         </div>

         <div className="flex flex-col md:flex-row bg-white p-5 rounded-3xl items-center md:items-start gap-6">
            <img className="w-32 md:w-40" src={safe_delivery} alt="" />

            <div className=" divider divider-horizontal"></div>

            <div className="text-center md:text-left">
               <h1 className="text-3xl font-bold mb-6">100% Safe Delivery</h1>
               <p>
                  We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
               </p>
            </div>
         </div>

         <div className="flex flex-col md:flex-row bg-white p-5 rounded-3xl items-center md:items-start gap-6">
            <img className="w-32 md:w-40" src={safe_delivery} alt="" />

            <div className=" divider divider-horizontal"></div>

            <div className="text-center md:text-left">
               <h1 className="text-3xl font-bold mb-6">24/7 Call Center Support</h1>
               <p>
                  Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
               </p>
            </div>
         </div>

      </div>
   );
};

export default Section3;
