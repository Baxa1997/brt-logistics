"use client";

import {Box, Dialog} from "@mui/material";
import React, {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import DriverCreateForm from "./Forms/DriverCreateForm";
import {toast} from "react-toastify";

type JobType = "driver" | "operator" | "dedicated";

interface DriverFormValues {
  payment: string;
  oTR: string;
  oFF: string;
  escrow: string;
  flightTickect: string;
  truck: string;
  loads: string;
  firtPayment: string;
  weeklyGuaranteedMiles: string;
  job?: string;
}

interface ManagerFormValues {
  department: string;
  experienceYears: number;
}

interface DeveloperFormValues {
  language: string;
  githubProfile: string;
}

type FormValuesMap = {
  driver: DriverFormValues;
  operator: ManagerFormValues;
  dedicated: DeveloperFormValues;
};

interface Props<T extends JobType> {
  jobType: T;
  open: boolean;
  handleClose: () => void;
  refetch: () => void;
}

function CreateEditForm<T extends JobType>({
  jobType,
  open,
  handleClose,
  refetch,
}: Props<T>) {
  const {control, handleSubmit} = useForm<FormValuesMap[T]>();
  const [loading, setLoading] = useState(false);

  const notify = (title: string) => toast.success(title);

  const onSubmit: SubmitHandler<FormValuesMap[T]> = async (data) => {
    setLoading(true);
    if (jobType === "driver") {
      const driverData = data as DriverFormValues;

      const mappedData = {
        Payment: driverData.payment,
        OTR: driverData.oTR,
        OFF: driverData.oFF,
        Escrow: driverData.escrow,
        "Flight Ticket": driverData.flightTickect,
        Truck: driverData.truck,
        Loads: driverData.loads,
        "First Payment": driverData.firtPayment,
        "Weekly Guaranteed Miles": driverData.weeklyGuaranteedMiles,
        Job: "driver",
      };

      try {
        const response = await fetch("/api/sheets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mappedData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          await refetch();
          handleClose();
          setLoading(false);
          notify("The Driver Job successfully created!");
        } else {
          console.error("Server error:", result.error, result);
        }
      } catch (error) {
        setLoading(false);
        console.error("Client error:", error);
      }
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        sx={{
          borderRadius: "12px",
          padding: "15px ",
        }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {jobType === "driver" && (
            <>
              <DriverCreateForm control={control} loading={loading} />
            </>
          )}
          {jobType === "operator" && (
            <>{/* Render manager-specific fields */}</>
          )}
          {jobType === "dedicated" && (
            <>{/* Render developer-specific fields */}</>
          )}
        </form>
      </Box>
    </Dialog>
  );
}

export default CreateEditForm;
