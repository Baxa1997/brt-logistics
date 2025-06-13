"use client";

import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import "react-phone-number-input/style.css";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import HFSelectField from "@/components/HFSelectField";
import HFTextField from "@/components/HFTextField";
import DedicatedLanesForm from "./DedicatedLanesForm";

interface ContactFormInputs {
  applyIngAs?: string;
  jobType?: string;
  fullName?: string;
  yourPhoneNumber?: string;
  yourEmailAddress?: string;
  yearsOfExperience?: string;
  dailyMiles?: string;
  weeksAvailable?: string;
  pastCompany?: string;
  accidents?: string;
  violations?: string;
  startDate?: string;
  truckModel?: string;
  plateProgram?: string;
  trailerExistance?: string;
  brokerName?: string;
  wayType?: string;
  loadsType?: string;
  pickUp?: string;
  deliveryAddress?: string;
  miles?: string;
  rate?: string;
  durationOfContract?: string;
  loadsPerWeek?: string;
  transport?: string;
}

interface QueryParams {
  jobTitle: string | null;
  jobType?: string | null;
}

const selectDriverType = [
  {
    label: "Apply as Company Driver",
    value: "Applied As Company Driver",
  },
  {
    label: "Apply as Owner Operator",
    value: "Applied As Owner Operator",
  },
];

const DedicatedLinesForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {handleSubmit, control, watch} = useForm<ContactFormInputs>();
  const router = useRouter();
  const [queryObject, setQueryObject] = useState<QueryParams | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = new URLSearchParams(window.location.search);

      setQueryObject({
        jobTitle: query.get("jobTitle"),
      });
    }
  }, []);

  const notify = () =>
    toast.success(
      "Thank you for reaching us, we will contact you as soon as possible!"
    );

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setLoading(true);
    try {
      const payload = {
        sheetName: "Dedicated Job Appliers",
        "Job Title": queryObject?.jobTitle,
        "Applying As": data.applyIngAs,
        "Full Name": data.fullName,
        "Your Phone Number": data.yourPhoneNumber,
        "Your Email Address": data.yourEmailAddress,
        "Years of Experience": data.yearsOfExperience,
        "Daily Miles": data.dailyMiles,
        "Trailer Existance": data.trailerExistance,
        "Weeks Available": data.weeksAvailable,
        "Past Company": data?.pastCompany,
        Accidents: data.accidents,
        Violations: data.violations,
        "Start Date": data.startDate,
        "Job Type": queryObject?.jobType,
      };
      const res = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        router.push("/");
        notify();
      } else {
      }
    } catch (err: any) {
      console.error("Submission error:", err);
    } finally {
    }
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
              onSubmit={handleSubmit(onSubmit)}
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
              {<DedicatedLanesForm control={control} />}

              <div className="col-span-2">
                <Button
                  type="submit"
                  className="w-full h-[50px] bg-[#0f766e] hover:bg-[#05322e] text-white font-bold text-[18px] py-3 px-4 rounded-lg"
                  disabled={loading}>
                  {loading ? "Submitting..." : "Apply"}
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
