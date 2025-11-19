import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';

const faqData = [
   {
      id: 1,
      question: "How does this posture corrector work?",
      answer: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
      isOpen: true,
   },
   {
      id: 2,
      question: "Is it suitable for all ages and body types?",
      answer: "Yes, our Posture Pro is designed to be highly adjustable and suitable for most body types and ages, from teenagers to adults. Please check the sizing guide for the best fit.",
      isOpen: false,
   },
   {
      id: 3,
      question: "Does it really help with back pain and posture improvement?",
      answer: "Clinical studies and user testimonials confirm that consistent use of a posture corrector can significantly reduce back pain and improve spinal alignment over time. Results vary based on usage consistency.",
      isOpen: false,
   },
   {
      id: 4,
      question: "Does it have smart features like vibration alerts?",
      answer: "The Posture Pro model features an optional smart sensor that detects when you are slouching and provides gentle vibration alerts to remind you to correct your posture.",
      isOpen: false,
   },
   {
      id: 5,
      question: "How will I be notified when the product is back in stock?",
      answer: "You can sign up for our email notification list on the product page. We will send you an alert as soon as the item is available for purchase.",
      isOpen: false,
   },
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
   const activeStyle = 'border-[#81d4cb] bg-[#e0f7f5] text-[#26a69a]';
   const defaultStyle = 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50';

   return (
      <div className={`mb-4 rounded-xl border p-4 transition-all duration-300 cursor-pointer ${isOpen ? activeStyle : defaultStyle}`} onClick={toggleOpen}>

         <div className="flex justify-between items-center font-semibold">
            <p className="text-base md:text-lg">{question}</p>
            {isOpen ? <FaChevronUp className="text-sm transition-transform duration-300" /> : <FaChevronDown className="text-sm transition-transform duration-300" />}
         </div>

         {isOpen && (
            <div className={`mt-4 pt-3 border-t-2 border-opacity-30 ${isOpen ? 'border-[#b2dfdb]' : 'border-transparent'}`}>
               <p className={`text-sm md:text-base font-normal ${isOpen ? 'text-[#37474f]' : 'text-gray-600'}`}>
                  {answer}
               </p>
            </div>
         )}
      </div>
   );
};

const Section5 = () => {
   const [faqs, setFaqs] = useState(faqData);

   const toggleFAQ = (id) => {
      setFaqs(faqs.map(item => ({
         ...item,
         isOpen: item.id === id ? !item.isOpen : false,
      })));
   };

   return (
      <div className=" py-16 md:py-24  ">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F1F1F] mb-4">
                  Frequently Asked Question (FAQ)
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                  Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
               </p>
            </div>

            <div className="space-y-4">
               {faqs.map(faq => (
                  <FAQItem
                     key={faq.id}
                     question={faq.question}
                     answer={faq.answer}
                     isOpen={faq.isOpen}
                     toggleOpen={() => toggleFAQ(faq.id)}
                  />
               ))}
            </div>

            <div className="flex justify-center mt-12">
               <button className="flex items-center space-x-3 px-6 py-3 bg-[#CAEB66] text-[#1F1F1F] font-semibold rounded-lg shadow-lg  transition duration-300">
                  <span>See More FAQ's</span>
                  <div className='flex items-center justify-center h-8 w-8 bg-[#1F1F1F] rounded-full text-[#CAEB66]'>
                     <FaArrowRight  className="text-sm rotate-[300deg]" />
                  </div>
               </button>
            </div>

         </div>
      </div>
   );
};

export default Section5;