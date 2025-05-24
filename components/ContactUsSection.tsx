import React from "react";
import Link from "next/link";
import {AlarmClock, Mail, MapPin, Phone} from "lucide-react";

function ContactUsSection() {
  return (
    <section id="contacts" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-[58%] w-full bg-white p-8 rounded-lg shadow-md mx-auto">
          <h3 className="text-2xl font-bold text-[#0f766e] mb-6">
            Get In Touch With Us Now!
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col sm:col-span-1 col-span-2">
              <span className="text-xl font-bold text-gray-700 mb-2">
                Phone Number
              </span>
              <div className="flex items-center gap-2">
                <Phone />
                <Link href={"tel:+13472638089"} className="text-gray-600">
                  +1 (347) 263-8089
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone />
                <Link href={"tel:+13472638165"} className="text-gray-600">
                  +1 (347) 263-8165
                </Link>
              </div>
            </div>
            <div className="flex flex-col sm:col-span-1 col-span-2">
              <span className="text-xl font-bold text-gray-700 mb-2">
                Email
              </span>
              <div className="flex items-center gap-2">
                <Mail />
                <Link href="mailto:sam.hr@brtlog.com" className="text-gray-600">
                  sam.hr@brtlog.com
                </Link>
              </div>
            </div>
            <div className="flex flex-col sm:col-span-1 col-span-2">
              <span className="text-xl font-bold text-gray-700 mb-2">
                Location
              </span>
              <div className="flex items-center gap-2">
                <MapPin />
                <p className="text-gray-600 ">
                  10 Shore Blvd Brooklyn NY 11235
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:col-span-1 col-span-2">
              <span className="text-xl font-bold text-gray-700 mb-2">
                Working Hours
              </span>
              <div className="flex gap-2 items-center">
                <AlarmClock />
                <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
