import HFSelectField from "@/components/HFSelectField";
import HFTextField from "@/components/HFTextField";
import React from "react";
import {Control} from "react-hook-form";

type Props = {
  control: Control<any>;
};

const selectPlateProgram = [
  {
    label: "I have my own plate",
    value: "ownPlate",
  },
  {
    label: "I need plate program",
    value: "needPlate",
  },
];

const selectTrailerStatus = [
  {
    label: "Yes",
    value: "true",
  },
  {
    label: "No",
    value: "false",
  },
];

function OwnerOperatorForm({control}: Props) {
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

      <HFTextField
        title="How many weeks you can stay out on the road ?"
        control={control}
        required={true}
        name="weeksOnRoad"
      />

      <HFTextField
        title="What is your truck year and model ?"
        control={control}
        required={true}
        name="truckYearModal"
      />

      <HFSelectField
        title="Do you have own plate or you need plate program ?"
        control={control}
        name="plateProgram"
        required={true}
        options={selectPlateProgram}
      />

      <HFSelectField
        title="Do you have own trailer ?"
        control={control}
        name="miles"
        required={true}
        options={selectTrailerStatus}
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
        title="How soon you can start in (date)"
        control={control}
        required={true}
        name="startDate"
      />
    </>
  );
}

export default OwnerOperatorForm;
