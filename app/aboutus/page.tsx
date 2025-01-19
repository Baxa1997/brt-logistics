import ContactUsSection from "@/components/ContactUsSection";
import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="mx-auto">
      <section id="about-us" className="py-16 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-5xl font-extrabold mb-6 text-[#0f766e]">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              US Trucking Service aims to be the trusted partner for both
              drivers and carriers in the transportation industry. We connect
              qualified CDL Class A drivers with motor carriers and ensure
              drivers find the job that best matches their skills and goals.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aut
              facilis earum rerum dolore et alias quisquam in beatae id fugit
              distinctio quas quaerat voluptatum enim est quam placeat veritatis
              debitis amet, necessitatibus quasi! Quae eligendi id vero amet
              voluptas.
            </p>
          </div>
          <div className="md:w-1/2 h-[400px] w-full mt-8 md:mt-0 relative ">
            <Image
              layout="fill"
              src="/img/logisticsAbout.png"
              alt="About Us"
              className="object-cover rounded-lg shadow-lg "
            />
          </div>
        </div>
      </section>

      <section id="values" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold mb-6  text-[#0f766e] text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-gray-50 shadow-md rounded-lg text-center">
              <div className="text-3xl text-blue-600 mb-4">😊</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Happiness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We create solutions that bring happiness to everyone involved.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-md rounded-lg text-center">
              <div className="text-3xl text-blue-600 mb-4">🏅</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Striving for excellence in every detail.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-md rounded-lg text-center">
              <div className="text-3xl text-blue-600 mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Speed
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering fast and efficient solutions for your success.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-md rounded-lg text-center">
              <div className="text-3xl text-blue-600 mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Responsibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity and accountability in every step.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-md rounded-lg text-center">
              <div className="text-3xl text-blue-600 mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Goal-Oriented
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Achieving great goals together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-[#0f766e] px-5">
        <div className="container mx-auto ">
          <h2 className="text-5xl font-extrabold mb-6 text-white text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-12 place-items-center">
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Driver-Carrier Connection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly connecting drivers with carriers to streamline
                logistics operations.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Qualified CDL Drivers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Providing experienced CDL Class A drivers to motor carriers
                nationwide.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Job Matching
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Helping drivers find opportunities tailored to their skills and
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactUsSection />
    </div>
  );
};

export default AboutUs;
