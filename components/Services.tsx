import React from "react";

function Services() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 text-center md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 lg:text-5xl mb-2">
          Our Services
        </h2>
        <div className="w-[100px] h-[4px] bg-orange-400 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-700 hover:text-white transition cursor-pointer ">
            <div className="w-12 h-12 mx-auto bg-teal-100 flex items-center justify-center rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zm7 7h-4m0 0H5a2 2 0 00-2 2v1a1 1 0 001 1h16a1 1 0 001-1v-1a2 2 0 00-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold  mb-4">Direct Recruiting</h3>
            <p className="">
              We handle the candidate sourcing and screening process, ensuring
              that Carriers receive exclusively interested and pre-qualified
              drivers.
            </p>
          </div>

          {/* Job Board */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-700 hover:text-white transition cursor-pointer">
            <div className="w-12 h-12 mx-auto bg-teal-100 flex items-center justify-center rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16h8M8 12h8M8 8h8m-6 12h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Job Board</h3>
            <p>
              Advertise your company and your job offers on our platform.
              Increase your visibility among the thousands of truck drivers.
            </p>
          </div>

          {/* Driver Job Placement */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-700 hover:text-white transition cursor-pointer">
            <div className="w-12 h-12 mx-auto bg-teal-100 flex items-center justify-center rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 7h6m0 0v6m0-6l-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold  mb-4">
              Driver Job Placement
            </h3>
            <p className="">
              Are you a driver seeking employment? We guarantee to place you in
              the best-suited company in the shortest time possible.
            </p>
          </div>

          {/* Recruiting ATS Platform */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-700 hover:text-white transition cursor-pointer">
            <div className="w-12 h-12 mx-auto bg-teal-100 flex items-center justify-center rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20l-5.447-2.724A2 2 0 013 15.382V6.618a2 2 0 01.553-1.894L9 2m6 0l5.447 2.724A2 2 0 0121 6.618v8.764a2 2 0 01-.553 1.894L15 20m-6 0v-6m6 6v-6m-6 0H3m6 0h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold  mb-4">
              Recruiting ATS Platform
            </h3>
            <p className="">
              A modern platform to streamline your recruitment process, designed
              for efficiency and scalability.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-700 hover:text-white transition cursor-pointer">
            <div className="w-12 h-12 mx-auto bg-teal-100 flex items-center justify-center rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-teal-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h11m-5 6h5m-2-3h3m-3-6a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold  mb-4">Referral Program</h3>
            <p className="">
              Earn rewards for recommending qualified drivers. Help connect
              talent with opportunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
