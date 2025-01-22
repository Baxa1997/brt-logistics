"use client";

import {useState} from "react";
import {Input} from "@/components/ui/input";

export default function PhoneInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (e: any) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    setPhoneNumber(value);
  };
  const formattedPhoneNumber = phoneNumber.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "($1) $2-$3"
  );
  return (
    <Input
      type="tel"
      id="phone"
      className="h-full w-full lg:w-1/4 p-3 rounded-md border bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-orange-400"
      name="phone"
      placeholder="(123) 456-7890"
      value={formattedPhoneNumber}
      onChange={handlePhoneNumberChange}
    />
  );
}
