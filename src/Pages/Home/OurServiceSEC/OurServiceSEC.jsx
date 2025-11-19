import React, { useState } from 'react';
import OSSI from '../../../assets/service.png'

const OurServiceSEC = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Express & Standard Delivery",
      description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
    },
    {
      title: "Nationwide Delivery",
      description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
    },
    {
      title: "Fulfillment Solution",
      description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
    },
    {
      title: "Cash on Home Delivery",
      description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description: "Customized corporate services which includes warehouse and inventory management support."
    },
    {
      title: "Parcel Return",
      description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
    },
  ];

  return (
    <div className="bg-[#03373D] py-16 px-4 sm:px-6 md:px-10 grid gap-12 mt-20 rounded-4xl">
      <div className="max-w-3xl mx-auto text-center text-white">
        <h1 className="text-4xl font-extrabold mb-4">Our Services</h1>
        <p className="text-[#DADADA] text-[16px] font-medium">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-[300px] w-full max-w-[380px] p-6 rounded-3xl grid place-items-center text-center cursor-pointer transition-colors duration-300
              ${activeIndex === index ? "bg-[#CAEB66]" : "bg-white"}
            `}
          >
            <div className="h-20 w-20 rounded-full bg-gradient-to-b from-[#EEEDFC] to-[#EEEDFC]/0 flex justify-center items-center mb-5">
              <img className="h-10 w-10" src={OSSI} alt="Service" />
            </div>
            <div>
              <h1 className="mb-5 font-bold text-[20px] text-[#1F1F1F]">
                {service.title}
              </h1>
              <p className={activeIndex === index ? "text-[#1F1F1F]" : "text-[#333]"}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServiceSEC;
