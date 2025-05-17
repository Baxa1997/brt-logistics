import HFSelectField from "@/components/HFSelectField";
import HFTextField from "@/components/HFTextField";
import React from "react";
import {Control} from "react-hook-form";

type Props = {
  control: Control<any>;
};

const selectLeaseTo = [
  {
    label: "Lease to rent",
    value: "leaseRent",
  },
  {
    label: "Lease to own",
    value: "leaseOwn",
  },
];

const selectDownPayment = [
  {
    label: "Less than $5k",
    value: "less",
  },
  {
    label: "More than $5k",
    value: "more",
  },
];

function LeaseDriverForm({control}: Props) {
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
        name="phoneNumber"
        placeholder="Enter phone number"
      />

      <HFTextField
        title="Your email address"
        control={control}
        required={true}
        name="emailAddress"
        placeholder="Enter email address"
      />

      <HFSelectField
        title="Lease to ...."
        control={control}
        name="leaseTo"
        required={true}
        options={selectLeaseTo}
      />

      <HFSelectField
        title="How much is your down payment amount ?"
        control={control}
        name="downPayment"
        required={true}
        options={selectDownPayment}
      />

      <HFTextField
        title="How many years you have experience as truck driver ?"
        control={control}
        name="experience"
        required={true}
      />

      <HFTextField
        title="How soon you can start working  (date)"
        control={control}
        required={true}
        name="startDate"
      />
    </>
  );
}

export default LeaseDriverForm;
