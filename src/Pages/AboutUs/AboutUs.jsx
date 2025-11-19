import React, { useState } from "react";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { key: "story", label: "Story" },
    { key: "mission", label: "Mission" },
    { key: "success", label: "Success" },
    { key: "team", label: "Team & Others" },
  ];

  const content = {
    story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.` ,
    mission: `Our mission is to simplify parcel delivery with cutting-edge logistics, transparency, and exceptional customer care.` ,
    success: `We take pride in our success, built on thousands of on-time deliveries and the trust of our customers.` ,
    team: `Behind every successful delivery is our dedicated team — skilled, passionate, and committed to excellence.` ,
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-teal-700">About Us</h1>
      <p className="text-gray-500 mt-2 max-w-xl">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
      </p>

      <div className="flex gap-6 border-b mt-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-3 text-lg font-medium transition-all ${
              activeTab === tab.key
                ? "text-teal-700 border-b-2 border-teal-700"
                : "text-gray-500 hover:text-teal-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 text-gray-700 leading-relaxed text-lg border-l-4 border-teal-700 pl-4">
        {content[activeTab]}
      </div>
    </div>
  );
}
