"use client";

import React, {useEffect, useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";

import HFSelectField from "@/components/HFSelectField";
import HFTextField from "@/components/HFTextField";
import CompanyDriverForm from "../dedicated-lines-form/CompanyDriverForm";
import OwnerOperatorForm from "../dedicated-lines-form/OwnerOperatorForm";
import LeaseDriverForm from "../dedicated-lines-form/LeaseDriverForm";
import {Button} from "@/components/ui/button";

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
  platesProgram?: string;
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

const JobsForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [queryObject, setQueryObject] = useState<QueryParams>();
  const router = useRouter();

  const {control, handleSubmit, watch, setValue} = useForm<ContactFormInputs>();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setQueryObject({
      jobTitle: query.get("jobTitle"),
      jobType: query.get("jobType"),
    });
  }, []);

  useEffect(() => {
    if (queryObject?.jobType === "Drivers") {
      setValue("applyIngAs", "Applied As Company Driver");
      setValue("jobType", "Driver");
    } else if (queryObject?.jobType === "Operators") {
      setValue("applyIngAs", "Applied As Owner Operator");
      setValue("jobType", "Operator");
    }
  }, [queryObject, watch("applyIngAs")]);

  const notifySuccess = () =>
    toast.success("Thank you for applying. We'll contact you soon!");
  const notifyError = (msg: string) =>
    toast.error(msg || "Something went wrong. Please try again.");

  const getMappedData = (data: ContactFormInputs) => {
    switch (queryObject?.jobType) {
      case "Drivers":
        return {
          sheetName: "Driver Job Appliers",
          "Job Title": queryObject?.jobTitle,
          "Applying As": data.applyIngAs,
          "Full Name": data.fullName,
          "Your Phone Number": data.yourPhoneNumber,
          "Your Email Address": data.yourEmailAddress,
          "Years of Experience": data.yearsOfExperience,
          "Daily Miles": data.dailyMiles,
          "Weeks Available": data.weeksAvailable,
          "Past Company": data.pastCompany,
          Accidents: data.accidents,
          Violations: data.violations,
          "Start Date": data.startDate,
          "Job Type": queryObject?.jobType,
        };

      case "Operators":
        return {
          sheetName: "Operator Job Appliers",
          "Job Title": queryObject?.jobTitle,
          "Applying As": data.applyIngAs,
          "Full Name": data.fullName,
          "Your Phone Number": data.yourPhoneNumber,
          "Your Email Address": data.yourEmailAddress,
          "Years of Experience": data.yearsOfExperience,
          "Truck Model": data.truckModel,
          "Weeks Available": data.weeksAvailable,
          "Plates Program": data.platesProgram,
          "Trailer Existance": data.trailerExistance,
          Accidents: data.accidents,
          Violations: data.violations,
          "Start Date": data.startDate,
          "Job Type": queryObject?.jobType,
        };

      case "Dedicated Lanes":
        return {
          sheetName: "Dedicated Job Appliers",
          "Job Title": queryObject?.jobTitle,
          "Applying As": data.applyIngAs,
          "Full Name": data.fullName,
          "Your Phone Number": data.yourPhoneNumber,
          "Your Email Address": data.yourEmailAddress,
          "Years of Experience": data.yearsOfExperience,
          "Daily Miles": data.dailyMiles,
          "Weeks Available": data.weeksAvailable,
          "Past Company": data.pastCompany,
          Accidents: data.accidents,
          Violations: data.violations,
          "Start Date": data.startDate,
          "Job Type": queryObject?.jobType,
        };

      default:
        throw new Error("Unsupported job title: " + queryObject?.jobTitle);
    }
  };

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setLoading(true);
    try {
      const payload = getMappedData(data);
      const res = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        notifySuccess();
        router.push("/");
      } else {
        notifyError(result?.error || "Server returned an error.");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      notifyError(err?.message || "Unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex justify-center bg-[#F9FAFB] p-3">
      <div className="container mx-auto md:px-6 px-0 z-10">
        <h1 className="text-3xl font-extrabold text-[#034e48] text-center mt-3">
          Applying for a Job:
        </h1>

        <div className="text-center bg-gray-50 rounded-xl p-4">
          <h4 className="text-2xl font-semibold text-[#036760] mb-2">
            {queryObject?.jobTitle}
          </h4>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg md:p-8 p-2">
          <HFSelectField
            title="Applying as"
            name="applyIngAs"
            control={control}
            options={selectDriverType}
            required
          />

          <HFTextField
            title="Job Type"
            name="jobType"
            control={control}
            disabled
          />

          {watch("applyIngAs") === "Applied As Company Driver" && (
            <CompanyDriverForm control={control} />
          )}

          {watch("applyIngAs") === "Applied As Owner Operator" && (
            <OwnerOperatorForm control={control} />
          )}

          {watch("applyIngAs") === "companyLease" && (
            <LeaseDriverForm control={control} />
          )}

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
    </section>
  );
};

export default JobsForm;
