import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {Input} from "./ui/input";

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
              type="tel"
              placeholder="Phone number"
              className="h-full w-full lg:w-1/4 p-3 rounded-md border bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="w-full lg:w-1/6 p-3 rounded-md bg-orange-400 text-white font-semibold hover:bg-orange-500 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
