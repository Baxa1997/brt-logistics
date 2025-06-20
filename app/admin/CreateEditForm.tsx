"use client";

import {Box, Dialog} from "@mui/material";
import React, {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import DriverCreateForm from "./Forms/DriverCreateForm";
import {toast} from "react-toastify";
import OperatorsCreateForm from "./Forms/OperatorsCreateForm";
import DedicatedCreateForm from "./Forms/DedicatedCreateForm";

type JobType = "driver" | "operator" | "dedicated";

interface DriverFormValues {
  jobTitle: string;
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

interface OperatorFormValues {
  sheetName?: string;
  jobTitle?: string;
  iFTA?: string;
  dispatchFee?: string;
  insurance?: string;
  eLD?: string;
  oFF?: string;
  loads?: string;
  platesProgram?: string;
  coverageArea?: string;
  grossAverageSolo?: string;
  grossAverageTeam?: string;
  payment?: string;
  provided?: string;
  requiredExperience?: string;
  companyAddress?: string;
  companyYard?: string;
  availableLanes?: string;
  company?: string;
  job?: string;
}

interface DedicatedFormValues {
  jobTitle: string;
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
  job?: string;
}

type FormValuesMap = {
  driver: DriverFormValues;
  operator: OperatorFormValues;
  dedicated: DedicatedFormValues;
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

  function getMappedData(jobType: string, data: any): Record<string, any> {
    switch (jobType) {
      case "driver":
        const d = data as DriverFormValues;
        return {
          sheetName: "Drivers",
          "Job Title": d?.jobTitle,
          Payment: d.payment,
          OTR: d.oTR,
          OFF: d.oFF,
          Escrow: d.escrow,
          "Flight Ticket": d.flightTickect,
          Truck: d.truck,
          Loads: d.loads,
          "First Payment": d.firtPayment,
          "Weekly Guaranteed Miles": d.weeklyGuaranteedMiles,
          Job: "driver",
        };

      case "operator":
        const o = data as OperatorFormValues;
        return {
          sheetName: "Operators",
          "Job Title": o.jobTitle,
          "Dispatch Fee": o.dispatchFee,
          Insurance: o.insurance,
          ELD: o.eLD,
          IFTA: o.iFTA,
          OFF: o.oFF,
          Loads: o.loads,
          "Plates Program": o.platesProgram,
          "Coverage Area": o.coverageArea,
          "Gross Average Solo": o.grossAverageSolo,
          "Gross Average Team": o.grossAverageTeam,
          Payment: o.payment,
          Provided: o.provided,
          "Required Experience": o.requiredExperience,
          "Company Address": o.companyAddress,
          "Company Yard": o.companyYard,
          "Available Lanes": o.availableLanes,
          Job: "Operator",
          Company: o.company,
        };
      case "dedicated":
        const s = data as DedicatedFormValues;
        return {
          sheetName: "Dedicated Lanes",
          "Job Title": s?.jobTitle,
          "Broker Name": s.brokerName,
          "Way Type": s.wayType,
          "Pick Up": s.pickUp,
          "Delivery Address": s.deliveryAddress,
          Miles: s.miles,
          Rate: s.rate,
          "Duration Of Contract": s.durationOfContract,
          "Loads Per Week": s.loadsPerWeek,
          Transport: s.transport,
          Job: "Dedicated Lines",
          "Loads Type": s.loadsType,
        };

      default:
        throw new Error("Unsupported job type");
    }
  }

  const onSubmit: SubmitHandler<FormValuesMap[T]> = async (data) => {
    setLoading(true);

    try {
      const mappedData = getMappedData(jobType, data);

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
        notify(`The ${jobType} job successfully created!`);
      } else {
        console.error("Server error:", result.error, result);
      }
    } catch (error) {
      console.error("Client error:", error);
    } finally {
      setLoading(false);
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
            <>
              <OperatorsCreateForm control={control} loading={loading} />
            </>
          )}
          {jobType === "dedicated" && (
            <>
              <DedicatedCreateForm control={control} loading={loading} />
            </>
          )}
        </form>
      </Box>
    </Dialog>
  );
}

export default CreateEditForm;
