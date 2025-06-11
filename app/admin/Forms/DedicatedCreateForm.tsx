"use client";

import HFSelectField from "@/components/HFSelectField";
import HFTextField from "@/components/HFTextField";
import {Button, CircularProgress} from "@mui/material";
import React from "react";
import {Control} from "react-hook-form";

interface Props {
  control: Control<any>;
  loading: boolean;
}

const selectOption = [
  {
    label: "One Way",
    value: "One Way",
  },
  {
    label: "Round Trip",
    value: "Round Trip",
  },
];

const selectLoadOption = [
  {
    label: "Live Load",
    value: "Live Load",
  },
  {
    label: "Drop and Hook",
    value: "Drop and Hook",
  },
];

const selectEquipmentOption = [
  {
    label: "Dry Van",
    value: "Dry Van",
  },
  {
    label: "Reefer",
    value: "Reefer",
  },
  {
    label: "Flatbed",
    value: "Flatbed",
  },
];

function DedicatedCreateForm({control, loading}: Props) {
  return (
    <div className="w-[550px] min-h-10">
      <h2 className="font-semibold text-center text-[18px]">Post Driver job</h2>
      <div className="grid grid-cols-2 gap-6 mt-4 rounded-[8px]">
        <HFTextField name="jobTitle" title="Job title" control={control} />
        <HFTextField name="brokerName" title="Broker Name" control={control} />
        <HFSelectField
          title="Way Type"
          control={control}
          name="wayType"
          options={selectOption}
        />

        <HFSelectField
          title="Loads Type"
          control={control}
          name="loadsType"
          options={selectLoadOption}
        />
        <HFTextField name="pickUp" title="Pick Up address" control={control} />
        <HFTextField
          name="deliveryAddress"
          title="Delivery address"
          control={control}
        />
        <HFTextField name="miles" title="Miles" control={control} />
        <HFTextField name="rate" title="Rate" control={control} />
        <HFTextField
          name="durationOfContract"
          title="Duration Of Contract"
          control={control}
        />
        <HFTextField
          name="loadsPerWeek"
          title="Loads Per Week"
          control={control}
        />

        <HFSelectField
          title="Transport"
          control={control}
          name="transport"
          options={selectEquipmentOption}
        />
      </div>

      <Button
        type="submit"
        loading={loading}
        disabled={loading}
        variant="outlined"
        className="mt-6 w-full h-[45px]"
        sx={{background: "black", color: "white", marginTop: "15px"}}>
        {loading ? (
          <CircularProgress size={30} sx={{color: "white"}} />
        ) : (
          "Create"
        )}
      </Button>
    </div>
  );
}

export default DedicatedCreateForm;
