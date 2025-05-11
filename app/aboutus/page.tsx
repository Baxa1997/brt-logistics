import Feedback from "@/components/Feedback";
import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="mx-auto">
      <section id="about-us" className="py-16  bg-gray-50">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-5xl font-extrabold mb-6 text-[#0f766e]">
              About Us
            </h2>
            <div className="w-[100px] h-[4px] bg-orange-400  mb-10"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              BRT Logistics aims to be the trusted partner for both drivers and
              carriers in the transportation industry. We connect qualified CDL
              Class A drivers with motor carriers and ensure drivers find the
              job that best matches their skills and goals. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Ut aut facilis earum rerum
              dolore et alias quisquam in beatae id fugit distinctio quas
              quaerat voluptatum enim est quam placeat veritatis debitis amet,
              necessitatibus quasi! Quae eligendi id vero amet voluptas.
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

      {/* <section id="services" className="py-16 bg-white px-5">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-extrabold mb-6 text-[#0f766e] text-center">
            Our Services
          </h2>
          <div className="w-[100px] h-[4px] bg-orange-400 mx-auto mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-12 place-items-center">
            <div className="p-6 bg-white shadow-md border-[1px] rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Driver-Carrier Connection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly connecting drivers with carriers to streamline
                logistics operations.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md border-[1px] rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Qualified CDL Drivers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Providing experienced CDL Class A drivers to motor carriers
                nationwide.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md border-[1px] rounded-lg text-center">
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
      </section> */}

      <section
        id="values"
        className="py-20 bg-gradient-to-br from-white to-gray-100">
        <div className="container mx-auto px-12">
          <h2 className="text-5xl font-bold text-center text-[#0f766e]">
            What We Stand For
          </h2>
          <div className="w-[100px] h-[4px] bg-orange-400 mx-auto my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
            {[
              {
                icon: "😊",
                title: "Happiness",
                desc: "We create solutions that bring happiness to everyone involved.",
              },
              {
                icon: "🏅",
                title: "Quality",
                desc: "Striving for excellence in every detail.",
              },
              {
                icon: "⚡",
                title: "Speed",
                desc: "Delivering fast and efficient solutions for your success.",
              },
              {
                icon: "🔄",
                title: "Responsibility",
                desc: "Integrity and accountability in every step.",
              },
              {
                icon: "🎯",
                title: "Goal-Oriented",
                desc: "Achieving great goals together.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {val.title}
                </h3>
                <p className="text-gray-600 text-lg">{val.desc}</p>
                <div className="absolute top-2 right-4 text-sm text-gray-300 group-hover:text-orange-400">
                  #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Feedback />
    </div>
  );
};

export default AboutUs;
