"use client";

import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import {Input} from "@/components/ui/input";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateEditForm from "./CreateEditForm";

interface ColumnLabel {
  label: string;
}

const columns: readonly ColumnLabel[] = [
  {
    label: "Payment",
  },
  {
    label: "OTR",
  },
  {
    label: "OFF",
  },

  {
    label: "Escrow",
  },
  {
    label: "Flight Ticket",
  },
  {
    label: "Truck",
  },
  {
    label: "Loads",
  },
  {
    label: "First Payment",
  },

  {
    label: "Weekly Guaranteed Miles",
  },
];

interface Data {
  payment?: string;
  oTR?: string;
  oFF?: string;
  escrow?: string;
  flightTickect?: string;
  truck?: string;
  loads?: string;
  firtPayment?: string;
  weeklyGuaranteedMiles?: string;
  job?: string;
}

function Drivers() {
  const [rows, setRows] = useState<Data[]>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnGetSheetDataClick = async () => {
    const res = await fetch("/api/sheets");
    const json = await res.json();
    setRows(json?.data || []);
  };

  useEffect(() => {
    handleOnGetSheetDataClick();
  }, []);

  return (
    <>
      <div className="py-2 px-4 h-[50px] flex justify-between items-center border-b border-[#E0E0E0]">
        <h2 className="text-xl">Drivers</h2>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleOpen}
            className="bg-white text-black hover:bg-white border border-[black]">
            <AddIcon style={{width: "20px", height: "20px"}} />
          </Button>

          <Input placeholder="Search" className="border border-[black]" />
        </div>
      </div>
      <StickyHeadTable rows={rows || []} />
      <CreateEditForm
        open={open}
        jobType="driver"
        handleClose={handleClose}
        refetch={handleOnGetSheetDataClick}
      />
    </>
  );
}

function StickyHeadTable({rows}: {rows: Data[]}) {
  return (
    <>
      <TableContainer className="h-[calc(100vh-50px)]">
        <Table stickyHeader aria-label="sticky table">
          <TableHead className="h-[36px]">
            <TableRow>
              <TableCell
                sx={{padding: "6px 12px", fontWeight: "700"}}
                width={40}>
                №
              </TableCell>
              {columns.map((column, index) => (
                <TableCell
                  sx={{padding: "6px 12px", fontWeight: "700"}}
                  key={index}>
                  {column.label}
                </TableCell>
              ))}
              <TableCell width={70}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell sx={{padding: "6px 12px"}}>{index + 1}</TableCell>
                  <TableCell sx={{padding: "6px 12px"}}>
                    {row?.payment}
                  </TableCell>
                  <TableCell sx={{padding: "6px 12px"}}>{row?.oTR}</TableCell>
                  <TableCell sx={{padding: "6px 12px"}}>{row?.oFF}</TableCell>
                  <TableCell sx={{padding: "6px 12px"}}>
                    {row?.escrow}
                  </TableCell>

                  <TableCell sx={{padding: "6px 12px"}}>
                    {row?.flightTickect}
                  </TableCell>
                  <TableCell sx={{padding: "6px 12px"}}>{row?.truck}</TableCell>
                  <TableCell sx={{padding: "6px 12px"}}>{row?.loads}</TableCell>
                  <TableCell sx={{padding: "6px 12px"}}>
                    {row?.firtPayment}
                  </TableCell>

                  <TableCell sx={{padding: "6px 12px"}}>
                    {row?.weeklyGuaranteedMiles}
                  </TableCell>

                  <TableCell sx={{padding: "6px 12px"}}>
                    <Button className="bg-transparent border w-[40px] h-[30px] border-red-500 hover:bg-transparent">
                      <DeleteOutlineIcon
                        style={{width: "20px", height: "20px"}}
                        className="text-red-500"
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Drivers;
