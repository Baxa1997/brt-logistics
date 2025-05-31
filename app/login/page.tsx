"use client";

import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import "react-phone-number-input/style.css";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import HFSelectField from "@/components/HFSelectField";
import HFTextField from "@/components/HFTextField";
import CompanyDriverForm from "../dedicated-lines-form/CompanyDriverForm";
import OwnerOperatorForm from "../dedicated-lines-form/OwnerOperatorForm";
import LeaseDriverForm from "../dedicated-lines-form/LeaseDriverForm";

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
  jobType?: string | null;
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

const JobsForm: React.FC = () => {
  const {handleSubmit, control, watch, setValue} = useForm<ContactFormInputs>();
  const router = useRouter();
  const [queryObject, setQueryObject] = useState<QueryParams | undefined>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = new URLSearchParams(window.location.search);

      setQueryObject({
        jobTitle: query.get("jobTitle"),
        jobType: query.get("jobType"),
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

  useEffect(() => {
    if (queryObject?.jobType === "drivers") {
      setValue("applyIngAs", "companyDriver");
      setValue("jobType", "Driver");
    } else if (queryObject?.jobType === "operators") {
      setValue("applyIngAs", "companyOperator");
      setValue("jobType", "Operator");
    }
  }, [queryObject, watch("applyIngAs")]);

  return (
    <>
      <section className="h-[calc(100vh-341px)] flex py-6 px-10 justify-center bg-[#F9FAFB] relative">
        <div className="absolute inset-0 opacity-50 z-0"></div>
        <div className="container z-10 relative">
          <h1 className="text-3xl font-extrabold text-[#034e48] text-center mt-3">
            Admin Panel
          </h1>

          <div className="w-[700px] rounded-lg mx-auto mt-10">
            <form onSubmit={handleSubmit(submit)} className="">
              <div className="">
                <HFTextField
                  title="Login"
                  name="login"
                  control={control}
                  required={true}
                />
              </div>

              <div className="mt-4">
                <HFTextField
                  title="Password"
                  name="password"
                  control={control}
                  required={true}
                />
              </div>

              <div className="mt-10">
                <Button
                  type="submit"
                  className="w-full h-[50px] bg-[#0f766e] hover:bg-[#05322e] text-white font-bold text-[18px] py-3 px-4 rounded-lg focus:outline-none focus:ring focus:ring-green-500">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobsForm;
