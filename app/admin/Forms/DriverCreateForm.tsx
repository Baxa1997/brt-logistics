"use client";

import HFTextField from "@/components/HFTextField";
import {Button, CircularProgress} from "@mui/material";
import React from "react";
import {Control} from "react-hook-form";

interface Props {
  control: Control<any>;
  loading: boolean;
}

function DriverCreateForm({control, loading}: Props) {
  return (
    <div className="w-[550px] min-h-10">
      <h2 className="font-semibold text-center text-[18px]">Post Driver job</h2>
      <div className="grid grid-cols-2 gap-6 mt-4 rounded-[8px]">
        <HFTextField name="payment" title="Payment" control={control} />
        <HFTextField name="oTR" title="OTR" control={control} />
        <HFTextField name="oFF" title="OFF" control={control} />
        <HFTextField name="escrow" title="Escrow" control={control} />
        <HFTextField
          name="flightTickect"
          title="Flight Ticket"
          control={control}
        />
        <HFTextField name="truck" title="Truck" control={control} />
        <HFTextField name="loads" title="Loads" control={control} />
        <HFTextField
          name="firtPayment"
          title="First Payment"
          control={control}
        />
        <HFTextField
          name="weeklyGuaranteedMiles"
          title="Weekly Miles"
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

export default DriverCreateForm;
