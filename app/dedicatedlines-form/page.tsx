"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import React from "react";
import {useForm, Controller} from "react-hook-form";
import "react-phone-number-input/style.css";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

interface ContactFormInputs {
  brokerName: string;
  loadType: string;
  pickupAddress: string;
  deliveryAddress: string;
  miles: number;
  rate: number;
  contractDuration: string;
  loadsPerWeek: string;
}

const selectOption = [
  {
    label: "One Way",
    value: "oneWay",
  },
  {
    label: "Round Trip",
    value: "roundTrip",
  },
];

const selectLoadOption = [
  {
    label: "Live Load",
    value: "liveLoad",
  },
  {
    label: "Drop and Hook",
    value: "dropHook",
  },
];

const selectEquipmentOption = [
  {
    label: "Dry Van",
    value: "dryVan",
  },
  {
    label: "Reefer",
    value: "reefer",
  },
  {
    label: "Flatbed",
    value: "flatbed",
  },
];

const DedicatedlinesForm: React.FC = () => {
  const {handleSubmit, control} = useForm<ContactFormInputs>();
  const router = useRouter();
  console.log("routerrouter", router);

  const notify = () =>
    toast.success(
      "Thank you for reaching us, we will contact you as soon as possible!"
    );

  const submit = async (data: ContactFormInputs) => {
    await fetch(
      "https://api.mockfly.dev/mocks/8b1082d3-e6c9-4a19-beec-e7eac4f3fb91/brtlog/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "12345-abcde-67890-fghij-12345",
        },
        body: JSON.stringify(data),
      }
    ).then(() => {
      notify();
    });
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-[#F9FAFB] relative p-3">
        <div className="absolute inset-0 opacity-50 z-0"></div>
        <div className="container mx-auto px-6 z-10 relative">
          <h1 className="text-3xl font-extrabold text-[#034e48] text-center mt-3">
            Applying for a Job:
          </h1>

          {/* <div className="text-center bg-gray-50 rounded-xl p-4 ">
            <h4 className="text-2xl font-semibold text-[#036760] mb-2">
              {JobTitle}
            </h4>
            <p className="text-gray-600 text-base flex justify-center items-center gap-2">
              🗓️ <span>{JobSchedule}</span>
            </p>
          </div> */}

          <div className="rounded-lg p-8  mx-auto">
            <form
              onSubmit={handleSubmit(submit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label
                  htmlFor="brokerName"
                  className="block text-gray-700 font-medium mb-2">
                  Broker Name <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="brokerName"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="brokerName"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="First Name"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="brokerName"
                  className="block text-gray-700 font-medium mb-2">
                  One Way or Round Trip <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="brokerName"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Select
                        onValueChange={(e) => {
                          onChange(e);
                        }}
                        required={true}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select trip type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Trip types</SelectLabel>
                            {selectOption?.map((item) => (
                              <SelectItem key={item?.value} value={item?.value}>
                                {item?.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="loadType"
                  className="block text-gray-700 font-medium mb-2">
                  Live Load or Drop and Hook{" "}
                  <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="loadType"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Select
                        onValueChange={(e) => {
                          onChange(e);
                        }}
                        required={true}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select load type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Trip types</SelectLabel>
                            {selectLoadOption?.map((item) => (
                              <SelectItem key={item?.value} value={item?.value}>
                                {item?.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="pickupAddress"
                  className="block text-gray-700 font-medium mb-2">
                  Pick Up address <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="pickupAddress"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="pickupAddress"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Pick up address"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="deliveryAddress"
                  className="block text-gray-700 font-medium mb-2">
                  Delivery address <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="deliveryAddress"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="deliveryAddress"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Delivery address"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="miles"
                  className="block text-gray-700 font-medium mb-2">
                  Miles <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="miles"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="miles"
                        type="number"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Miles"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="miles"
                  className="block text-gray-700 font-medium mb-2">
                  Rate <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="rate"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="rate"
                        type="number"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Rate"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="miles"
                  className="block text-gray-700 font-medium mb-2">
                  Duration of contract <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="contractDuration"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="contractDuration"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Contract duration"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="loadsPerWeek"
                  className="block text-gray-700 font-medium mb-2">
                  Loads per week <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="loadsPerWeek"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Input
                        onChange={(e) => onChange(e.target.value)}
                        id="loadsPerWeek"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-green-500"
                        placeholder="Loads per week"
                        required
                      />
                    );
                  }}
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="loadType"
                  className="block text-gray-700 font-medium mb-2">
                  Equipment Types <span className="text-red-400">*</span>
                </label>
                <Controller
                  name="loadType"
                  control={control}
                  render={({field: {onChange}}) => {
                    return (
                      <Select
                        onValueChange={(e) => {
                          onChange(e);
                        }}
                        required={true}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select equipment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel> Equipment types</SelectLabel>
                            {selectEquipmentOption?.map((item) => (
                              <SelectItem key={item?.value} value={item?.value}>
                                {item?.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    );
                  }}
                />
              </div>

              <div className="col-span-2  text-[12px]">
                <Input
                  type="checkbox"
                  id="privacyPolicy"
                  className="mr-2 w-4 h-4 focus:ring focus:ring-green-500"
                />
                <label
                  htmlFor="privacyPolicy"
                  className="text-gray-700 h-[20px]">
                  <p className="text-[12px] font-bold cursor-pointer">
                    By checking this box, I consent to receive SMS messages from
                    BRT Logistics related to Conversational messages at the
                    phone number provided above. The SMS frequency may vary.
                    Data rates may apply. For assistance reply HELP. Reply STOP
                    to opt out of receiving text messages. Please review our
                    <Link
                      target="_blank"
                      className="text-blue-600 underline ml-1"
                      href="/privacy-policy">
                      Privacy Policy and Terms & Conditions{" "}
                    </Link>
                    and{" "}
                    <Link
                      target="_blank"
                      href="/terms-conditions"
                      className="text-blue-600 underline ml-1">
                      Terms and Conditions
                    </Link>{" "}
                    By selecting this box, you consent to and agree with our
                    requirements.
                  </p>
                </label>
              </div>

              <div className="col-span-2">
                <Button
                  type="submit"
                  className="w-full h-[50px] bg-[#0f766e] hover:bg-[#05322e] text-white font-bold text-[18px] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-green-500">
                  Apply
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default DedicatedlinesForm;
