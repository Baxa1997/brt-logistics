import HFSelectField from "@/components/HFSelectField";
import HFTextField from "@/components/HFTextField";
import React from "react";
import {Control} from "react-hook-form";

type Props = {
  control: Control<any>;
};

const selectMiles = [
  {
    label: "800 miles/daily +",
    value: "800",
  },
  {
    label: "1000 miles/daily",
    value: "1000",
  },
];

function CompanyDriverForm({control}: Props) {
  return (
    <>
      <HFTextField
        title="Full Name"
        control={control}
        required={true}
        name="fullName"
        placeholder="Enter full name"
      />

      <HFTextField
        title="Your phone number"
        control={control}
        required={true}
        name="yourPhoneNumber"
        placeholder="Enter phone number"
      />

      <HFTextField
        title="Your email address"
        control={control}
        required={true}
        name="yourEmailAddress"
        placeholder="Enter email address"
      />

      <HFTextField
        title="How many years you have experience as truck driver ?"
        control={control}
        required={true}
        name="yearsOfExperience"
      />

      <HFSelectField
        title="Daily miles that you can do"
        control={control}
        name="dailyMiles"
        required={true}
        options={selectMiles}
      />

      <HFTextField
        title="How many weeks you can stay out on the road ?"
        control={control}
        required={true}
        name="weeksAvailable"
      />

      <HFTextField
        title="Name of the company that you worked before ?"
        control={control}
        required={true}
        name="pastCompany"
      />

      <HFTextField
        title="Accidents in last 3 years"
        control={control}
        name="accidents"
      />

      <HFTextField
        title="Violations in last 3 years"
        control={control}
        name="violations"
      />

      <HFTextField
        title="Ready to start in (please show date)"
        control={control}
        required={true}
        name="startDate"
      />
    </>
  );
}

export default CompanyDriverForm;
