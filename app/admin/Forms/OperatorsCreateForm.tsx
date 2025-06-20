"use client";

import HFTextField from "@/components/HFTextField";
import {Button, CircularProgress} from "@mui/material";
import React from "react";
import {Control} from "react-hook-form";

interface Props {
  control: Control<any>;
  loading: boolean;
}

function OperatorsCreateForm({control, loading}: Props) {
  return (
    <div className="w-[550px] min-h-10">
      <h2 className="font-semibold text-center text-[18px]">
        Post Operator job
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-4 rounded-[8px]">
        <HFTextField name="jobTitle" title="Job title" control={control} />
        <HFTextField
          name="dispatchFee"
          title="Dispatch Fee"
          control={control}
        />
        <HFTextField name="company" title="Company" control={control} />
        <HFTextField name="insurance" title="Insurance" control={control} />
        <HFTextField name="eLD" title="ELD" control={control} />
        <HFTextField name="iFTA" title="IFTA" control={control} />
        <HFTextField name="oFF" title="OFF" control={control} />
        <HFTextField name="loads" title="Loads" control={control} />
        <HFTextField
          name="platesProgram"
          title="Plates Program"
          control={control}
        />
        <HFTextField
          name="coverageArea"
          title="Coverage Area"
          control={control}
        />
        <HFTextField
          name="grossAverageSolo"
          title="Gross Average Solo"
          control={control}
        />
        <HFTextField
          name="grossAverageTeam"
          title="Gross Average Team"
          control={control}
        />
        <HFTextField name="payment" title="Payment" control={control} />
        <HFTextField name="provided" title="Provided" control={control} />

        <HFTextField
          name="requiredExperience"
          title="Required Experience"
          control={control}
        />
        <HFTextField
          name="companyAddress"
          title="Company Address"
          control={control}
        />
        <HFTextField
          name="companyYard"
          title="Company Yard"
          control={control}
        />
        <HFTextField
          name="availableLanes"
          title="Available Lanes"
          control={control}
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

export default OperatorsCreateForm;
