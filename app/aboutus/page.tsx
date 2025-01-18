import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
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
          <div className="md:w-1/2 h-[400px] mt-8 md:mt-0 relative ">
            <Image
              layout="fill"
              src="/img/logisticsAbout.png"
              alt="About Us"
              className="object-cover rounded-lg shadow-lg "
            />
          </div>
        </div>
      </section>

      <section id="partners" className="py-16 bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <img
            src="/images/partner1.png"
            alt="Partner 1"
            className="h-16 mx-auto"
          />
          <img
            src="/images/partner2.png"
            alt="Partner 2"
            className="h-16 mx-auto"
          />
          <img
            src="/images/partner3.png"
            alt="Partner 3"
            className="h-16 mx-auto"
          />
          <img
            src="/images/partner4.png"
            alt="Partner 4"
            className="h-16 mx-auto"
          />
        </div>
      </section>

      <section id="values" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold mb-6  text-[#0f766e] text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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

      <section id="contacts" className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#0f766e] mb-6">
              Get In Touch With Us Now!
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col ">
                <span className="text-xl font-bold text-gray-700">
                  Phone Number
                </span>
                <p className="text-gray-600">+1 (347) 263-8089</p>
                <p className="text-gray-600">+1 (347) 263-8165</p>
              </div>
              <div className="flex flex-col ">
                <span className="text-xl font-bold text-gray-700">Email</span>
                <p className="text-gray-600">info@ustruckingservice.co</p>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-700">
                  Location
                </span>
                <p className="text-gray-600">New York, NY</p>
              </div>
              <div className="flex flex-col ">
                <span className="text-xl font-bold text-gray-700">
                  Working Hours
                </span>
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#0f766e] mb-6">
              Contact Us
            </h3>
            <form>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <Input
                  type="email"
                  placeholder="Email ID"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                />
              </div>
              <textarea
                placeholder="Message"
                className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                rows="4"></textarea>
              <Button
                type="submit"
                className="bg-[#0f766e] text-white font-bold py-2 px-4 rounded-lg w-full h-[50px] hover:bg-[#0d635d]">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
