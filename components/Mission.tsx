import React from "react";

function Mission() {
  return (
    <div className="w-full py-10 px-4 sm:py-16 sm:px-8 relative bg-gray-50">
      <div className="max-w-[1140px] mx-auto bg-white border rounded-lg shadow-lg px-6 py-8 sm:px-12 sm:py-12">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <div className="w-[100px] h-[4px] bg-orange-400 mx-auto mb-6"></div>

        {/* Paragraph */}
        <p className="text-sm sm:text-base lg:text-lg text-justify text-gray-700 leading-relaxed max-w-[900px] mx-auto">
          At BRT Logistics, our mission is to be the dedicated Driver Agents who
          tirelessly advocate for the best interests of truck drivers. We
          believe that every driver deserves a partner who understands their
          unique needs and works to secure job opportunities that align with
          their lifestyle. Our commitment is to provide personalized support and
          guidance, ensuring that our drivers achieve the career satisfaction
          and work-life balance they deserve.
        </p>
      </div>
    </div>
  );
}

export default Mission;
