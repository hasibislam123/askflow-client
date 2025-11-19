import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
   const {  userName ,review: tastimonial, user_photoURL} = review;
   return (
      <div className="bg-white rounded-2xl  p-6 max-w-md mx-auto">
         <div className="text-4xl text-[#A9C8CC] mb-4">
            <FaQuoteLeft />
         </div>
         <p className="text-gray-700 mb-6">
            {tastimonial}
         </p>
         <hr className="border-dashed border-t-2 border-gray-300 mb-4" />
         <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-teal-900">
               <img className=' rounded-4xl' src={user_photoURL} alt="" />
            </div>
            <div>
               <h3 className="font-bold text-gray-900">{userName }</h3>
               <p className="text-gray-500 text-sm">Senior Product Designer</p>
            </div>
         </div>
      </div>
   );
};

export default ReviewCard;