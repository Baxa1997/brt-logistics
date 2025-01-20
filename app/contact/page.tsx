import ContactUsSection from "@/components/ContactUsSection";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-[#034e48] relative p-6">
        <div className="absolute inset-0  opacity-50 z-0"></div>
        <div className="container mx-auto px-6 z-10 relative">
          <h1 className="text-5xl font-extrabold text-white text-center mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white text-center mb-8">
            Want to get in touch? We’re more than happy to help.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-medium mb-2">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-medium mb-2">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 font-medium mb-2">
                  Company Name
                </label>
                <Input
                  id="companyName"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Company Name"
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-medium mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="usDot"
                  className="block text-gray-700 font-medium mb-2">
                  US DOT
                </label>
                <Input
                  id="usDot"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="US DOT"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="needs"
                  className="block text-gray-700 font-medium mb-2">
                  Describe your hiring needs:
                </label>
                <Textarea
                  id="needs"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Describe your hiring needs"></Textarea>
              </div>
              <div className="col-span-2 flex items-center text-[12px]">
                <Input
                  type="checkbox"
                  id="privacyPolicy"
                  className="mr-2 w-4 h-4 focus:ring focus:ring-green-500"
                  required
                />
                <label htmlFor="privacyPolicy" className="text-gray-700">
                  By selecting this box, you consent to receive SMS messages and
                  agree to our
                  <Link
                    target="_blank"
                    href="/privacy-policy"
                    className="text-blue-600 underline ml-1">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
              <div className="col-span-2">
                <Button
                  type="submit"
                  className="w-full h-[50px] bg-[#0f766e] hover:bg-[#05322e] text-white font-bold text-[18px] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-green-500">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ContactUsSection />
    </>
  );
};

export default Contact;
