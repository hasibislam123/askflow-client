import React from 'react';
import SectionIng from '../../../assets/bookingIcon.png'

const Section1 = () => {
  const cards = [
    { title: "Booking Pick & Drop", desc: "From personal packages to business shipments — we deliver on time, every time." },
    { title: "Cash On Delivery", desc: "From personal packages to business shipments — we deliver on time, every time." },
    { title: "Delivery Hub", desc: "From personal packages to business shipments — we deliver on time, every time." },
    { title: "Booking Pick & Drop", desc: "From personal packages to business shipments — we deliver on time, every time." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid justify-center gap-12">
      <h1 className="text-4xl font-extrabold  text-secondary ">How it Works</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="h-[262px] w-full max-w-[262px] bg-white p-6 rounded-3xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="h-16 w-16 mb-4 flex justify-center items-center">
              <img className="h-16 w-16" src={SectionIng} alt={card.title} />
            </div>
            <h1 className="mb-2 font-bold text-[20px]">{card.title}</h1>
            <p className="text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
