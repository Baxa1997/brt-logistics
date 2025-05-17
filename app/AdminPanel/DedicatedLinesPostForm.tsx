"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import "react-phone-number-input/style.css";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import HFTextField from "@/components/HFTextField";
import HFSelectField from "@/components/HFSelectField";

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

type QueryParams = {
  jobTitle: string | null;
  schedule: string | null;
};

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

const DedicatedLinesPostForm: React.FC = () => {
  const {handleSubmit, control} = useForm<ContactFormInputs>();
  const router = useRouter();
  const [queryObject, setQueryObject] = useState<QueryParams | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = new URLSearchParams(window.location.search);

      setQueryObject({
        jobTitle: query.get("jobTitle"),
        schedule: query.get("schedule"),
      });
    }
  }, []);

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
      router.push("/");
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

          <div className="text-center bg-gray-50 rounded-xl p-4 ">
            <h4 className="text-2xl font-semibold text-[#036760] mb-2">
              {queryObject?.jobTitle}
            </h4>
            <p className="text-gray-600 text-base flex justify-center items-center gap-2">
              🗓️ <span>{queryObject?.schedule}</span>
            </p>
          </div>

          <div className="rounded-lg p-8  mx-auto">
            <form
              onSubmit={handleSubmit(submit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HFTextField
                control={control}
                name="brokerName"
                title="Broker Name"
                required={true}
                placeholder="Enter broker name"
              />

              <HFSelectField
                control={control}
                name="tripType"
                options={selectOption}
                title="One Way or Round Trip"
              />

              <HFSelectField
                control={control}
                name="loadType"
                options={selectLoadOption}
                title="Live Load or Drop and Hook"
              />

              <HFTextField
                control={control}
                name="pickupAddress"
                title="Pick Up address"
                placeholder="Pick up address"
              />

              <HFTextField
                control={control}
                name="deliveryAddress"
                title="Delivery address"
                placeholder="Delivery address"
              />

              <HFTextField
                control={control}
                name="miles"
                title="Miles"
                placeholder="Enter miles"
              />

              <HFTextField
                control={control}
                name="rate"
                title="Rate"
                placeholder="Enter rate"
              />

              <HFTextField
                control={control}
                name="contractDuration"
                title="Duration of contract"
                placeholder="Contract duration"
              />

              <HFTextField
                control={control}
                name="loadsPerWeek"
                title="Loads per week "
                placeholder="Loads per week"
              />

              <HFSelectField
                title="Equipment Types"
                control={control}
                name="loadType"
                options={selectEquipmentOption}
              />

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

export default DedicatedLinesPostForm;
