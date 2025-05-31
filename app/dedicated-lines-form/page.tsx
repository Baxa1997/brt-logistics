"use client";

import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import "react-phone-number-input/style.css";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import CompanyDriverForm from "./CompanyDriverForm";
import HFSelectField from "@/components/HFSelectField";
import HFTextField from "@/components/HFTextField";
import OwnerOperatorForm from "./OwnerOperatorForm";
import LeaseDriverForm from "./LeaseDriverForm";

interface ContactFormInputs {
  applyIngAs?: string;
  brokerName?: string;
  jobType?: string;
  miles?: number;
  fullName?: string;
  previousCompany?: string;
  weeksOnRoad?: string;
  trailerType?: string;
  experience?: string;
  emailAddress?: string;
  phoneNumber?: string;
  violations?: string;
  downPayment?: string;
  leaseTo?: string;
}

type QueryParams = {
  jobTitle: string | null;
  schedule: string | null;
};

const selectDriverType = [
  {
    label: "Apply as Company Driver",
    value: "companyDriver",
  },
  {
    label: "Apply as Owner Operator",
    value: "companyOperator",
  },
  {
    label: "Apply as Lease Driver",
    value: "companyLease",
  },
];

const DedicatedLinesForm: React.FC = () => {
  const {handleSubmit, control, watch} = useForm<ContactFormInputs>();
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
      <section className="min-h-screen flex justify-center bg-[#F9FAFB] relative p-3">
        <div className="absolute inset-0 opacity-50 z-0"></div>
        <div className="container minH-[100vh] mx-auto md:px-6 px-0 z-10 relative">
          <h1 className="text-3xl font-extrabold text-[#034e48] text-center mt-3">
            Applying for a Job:
          </h1>

          <div className="text-center bg-gray-50 rounded-xl p-4 ">
            <h4 className="text-2xl font-semibold text-[#036760] mb-2">
              {queryObject?.jobTitle}
            </h4>
          </div>

          <div className="rounded-lg md:p-8 p-2 mx-auto">
            <form
              onSubmit={handleSubmit(submit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1 col-span-2">
                <HFSelectField
                  title="Applying as"
                  name="applyIngAs"
                  control={control}
                  options={selectDriverType}
                  required={true}
                />
              </div>

              <div className="md:col-span-1 col-span-2">
                <HFTextField
                  defaultValue={"Dedicated Lines"}
                  title="Job Type"
                  name="jobType"
                  control={control}
                  disabled={true}
                />
              </div>

              {watch("applyIngAs") === "companyDriver" && (
                <CompanyDriverForm control={control} />
              )}

              {watch("applyIngAs") === "companyOperator" && (
                <OwnerOperatorForm control={control} />
              )}

              {watch("applyIngAs") === "companyLease" && (
                <LeaseDriverForm control={control} />
              )}

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

export default DedicatedLinesForm;
