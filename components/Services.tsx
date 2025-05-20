import React from "react";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";

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
              <SettingsAccessibilityIcon />
            </div>
            <h3 className="text-xl font-semibold  mb-4">Direct Recruiting</h3>
            <p className="">
              We handle the candidate sourcing and screening process, ensuring
              that Carriers receive exclusively interested and pre-qualified
              drivers.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-700 hover:text-white transition cursor-pointer">
            <div className="w-12 h-12 mx-auto bg-teal-100 flex items-center justify-center rounded-full mb-4">
              <DeveloperBoardIcon />
            </div>
            <h3 className="text-xl font-semibold mb-4">Job Board</h3>
            <p>
              Advertise your company and your job offers on our platform.
              Increase your visibility among the thousands of truck drivers.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-700 hover:text-white transition cursor-pointer">
            <div className="w-12 h-12 mx-auto bg-teal-100 flex items-center justify-center rounded-full mb-4">
              <LocalShippingIcon />
            </div>
            <h3 className="text-xl font-semibold  mb-4">
              Driver Job Placement
            </h3>
            <p className="">
              Are you a driver seeking employment? We guarantee to place you in
              the best-suited company in the shortest time possible.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-teal-700 hover:text-white transition cursor-pointer">
            <div className="w-12 h-12 mx-auto bg-teal-100 flex items-center justify-center rounded-full mb-4">
              <IntegrationInstructionsIcon />
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
              <DatasetLinkedIcon />
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
