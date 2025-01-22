"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {Input} from "./ui/input";
import Link from "next/link";

function Feedback() {
  return (
    <div className="bg-slate-800 text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        <div className="bg-orange-400 w-40 h-40 flex items-center justify-center rounded-full lg:mr-12 mb-8 lg:mb-0">
          <div className="w-16 h-16 border-4 border-teal-700 rounded-full flex items-center justify-center">
            <span className="text-teal-700 text-4xl font-bold">?</span>
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
            Have questions? Feel free to reach out to us
          </h2>
          <div className="w-[100px] h-[2px] bg-orange-400 mx-auto lg:mx-0 mb-6"></div>

          <form className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  className="h-full w-full lg:w-1/4 p-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-orange-400"
                />

                <Select>
                  <SelectTrigger className="h-full w-full lg:w-1/4 p-3 rounded-md border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-orange-400">
                    <SelectValue placeholder="Driver" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="driver">Driver</SelectItem>
                    <SelectItem value="carrier">Carrier</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  type="email"
                  placeholder="Email"
                  className="h-full w-full lg:w-1/4 p-3 rounded-md border bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-orange-400"
                />

                {/* <PhoneInput
                // onChange={(e) => console.log("eeeeeeeeee", e)}
                /> */}

                <button
                  type="submit"
                  className="w-full lg:w-1/6 p-3 rounded-md bg-orange-400 text-white font-semibold hover:bg-orange-500 transition">
                  Submit
                </button>
              </div>

              <div className="flex items-start lg:w-full mt-4">
                <input
                  type="checkbox"
                  id="smsConsent"
                  className="mr-2 w-4 h-4 focus:ring focus:ring-orange-400"
                  required
                />
                <label htmlFor="smsConsent" className="text-sm">
                  By providing your phone number, you consent to receive SMS
                  messages from BRT Logistics, including hiring updates and
                  promotional messages. Message and data rates may apply. Reply
                  STOP to unsubscribe. Read our
                  <Link
                    target="_blank"
                    href="/privacy-policy"
                    className="text-orange-400 underline ml-1">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
