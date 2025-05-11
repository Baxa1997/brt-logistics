import React from "react";
import {Button} from "./ui/button";

function BlogSection() {
  return (
    <div className=" bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 lg:text-5xl mb-4">
          Our Blog
        </h2>
        <div className="w-[100px] h-[4px] bg-orange-400 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-justify ">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="p-6 flex flex-col justify-between w-2/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  10 Benefits of Using a Truck Driver Staffing Company
                </h3>
                <p className="text-gray-600 mb-4">
                  The trucking industry is essential for transporting goods
                  across the country...
                </p>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>Nick Kovgunov</span>
                <span>September 3, 2024</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="p-6 flex flex-col justify-between w-2/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Navigating the Challenges of Driver Recruitment
                </h3>
                <p className="text-gray-600 mb-4">
                  The logistics and transportation industry faces significant
                  challenges when it comes to...
                </p>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>Nick Kovgunov</span>
                <span>September 3, 2024</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="p-6 flex flex-col justify-between w-2/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Truck Driver Shortage
                </h3>
                <p className="text-gray-600 mb-4">
                  From Truck Driver Shortage to Driver Surplus: Navigating the
                  Changing Job Market...
                </p>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>Nick Kovgunov</span>
                <span>August 13, 2024</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="p-6 flex flex-col justify-between w-2/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Recruiting Truck Drivers
                </h3>
                <p className="text-gray-600 mb-4">
                  Strategies for Recruiting and Retaining Truck Drivers:
                  Navigating the Shortage...
                </p>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>Nick Kovgunov</span>
                <span>August 13, 2024</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="p-6 flex flex-col justify-between w-2/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  The Importance of Safety in Truck Driving
                </h3>
                <p className="text-gray-600 mb-4">
                  Best Practices for Drivers to Stay Safe on the Road...
                </p>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>Nick Kovgunov</span>
                <span>July 23, 2024</span>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div className="p-6 flex flex-col justify-between w-2/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Unlocking Opportunities: Nationwide Collaboration
                </h3>
                <p className="text-gray-600 mb-4">
                  Exploring the benefits of a unified approach in the trucking
                  industry...
                </p>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <span>Nick Kovgunov</span>
                <span>July 10, 2024</span>
              </div>
            </div>
          </div>
        </div>
        <Button className="mt-10 w-[160px] h-[40px] cursor-pointer bg-[#028177] hover:bg-[#014842]">
          View more
        </Button>
      </div>
    </div>
  );
}

export default BlogSection;
