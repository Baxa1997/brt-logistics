"use client";

import {Button} from "@/components/ui/button";
import React, {useEffect, useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import {Input} from "@/components/ui/input";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateEditForm from "./CreateEditForm";
import {Table} from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import TitleIcon from "@mui/icons-material/Title";

interface ColumnLabel {
  label: string;
  key: keyof Data;
}

const columns: readonly ColumnLabel[] = [
  {label: "Job Title", key: "jobTitle"},
  {label: "Broker Name", key: "brokerName"},
  {label: "Way Type", key: "wayType"},
  {label: "Loads Type", key: "loadsType"},
  {label: "Pick Up", key: "pickUp"},
  {label: "Delivery", key: "deliveryAddress"},
  {label: "Miles", key: "miles"},
  {label: "Rate", key: "rate"},
  {label: "Duration Of Contract", key: "durationOfContract"},
  {label: "Loads Per Week", key: "loadsPerWeek"},
  {label: "Transport", key: "transport"},
];

interface Data {
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

function Dedicated() {
  const [rows, setRows] = useState<Data[]>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnGetSheetDataClick = async () => {
    const sheetName = "Dedicated Lanes";
    const res = await fetch(`/api/sheets?sheetName=${sheetName}`);
    const json = await res.json();
    setRows(json?.data || []);
  };

  useEffect(() => {
    handleOnGetSheetDataClick();
  }, []);

  return (
    <>
      <div className="py-2 px-4 h-[50px] flex justify-between items-center border-b border-[#E0E0E0]">
        <h2 className="text-xl">Dedicated Lanes</h2>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleOpen}
            className="bg-white text-black hover:bg-white border border-[#E0E0E0]">
            <AddIcon style={{width: "20px", height: "20px"}} />
          </Button>

          <Input placeholder="Search" className="border border-[#E0E0E0]" />
        </div>
      </div>
      <StickyHeadTable rows={rows || []} />
      <CreateEditForm
        open={open}
        jobType="dedicated"
        handleClose={handleClose}
        refetch={handleOnGetSheetDataClick}
      />
    </>
  );
}

function StickyHeadTable({rows}: {rows: Data[]}) {
  return (
    <TableContainer className="h-[calc(100vh-50px)]">
      <Table stickyHeader aria-label="sticky table">
        <TableHead className="h-[36px]">
          <TableRow>
            <TableCell
              sx={{
                width: "70px",
                height: "40px",
                padding: "0",
                fontWeight: "700",
                borderRight: "1px solid #E0E0E0",
                textAlign: "center",
              }}>
              <p className="w-[50px]">№</p>
            </TableCell>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                sx={{
                  minWidth: "240px",
                  height: "40px",
                  padding: "5px",
                  fontWeight: "700",
                  textAlign: "center",
                  borderRight: "1px solid #E0E0E0",
                }}>
                {column.label}
              </TableCell>
            ))}
            <TableCell
              sx={{borderRight: "1px solid #E0E0E0"}}
              width={70}></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow hover key={index}>
              <TableCell
                sx={{
                  width: "80px",
                  textAlign: "center",
                  padding: "5px",
                  borderRight: "1px solid #E0E0E0",
                }}>
                {index + 1}
              </TableCell>

              {columns.map((column, colIndex) => (
                <TableCell
                  key={colIndex}
                  sx={{
                    padding: "5px 10px 0 10px",
                    borderRight: "1px solid #E0E0E0",
                    ...(column.key === "loadsType"
                      ? {fontStyle: "italic"}
                      : {}),
                    ...(["loadsPerWeek", "transport"].includes(column.key)
                      ? {
                          color: "#1976d2",
                          fontWeight: 500,
                        }
                      : {}),
                  }}>
                  {column.key === "jobTitle" && <TitleIcon sx={{mr: 0.5}} />}
                  {column.key === "rate" && (
                    <PaymentsIcon sx={{fontSize: 18, mr: 0.5}} />
                  )}
                  {(column.key === "loadsPerWeek" ||
                    column.key === "transport") &&
                    "🚚 "}
                  {row[column.key]}
                </TableCell>
              ))}

              <TableCell
                sx={{
                  padding: "5px",
                  borderRight: "1px solid #E0E0E0",
                }}>
                <Button className="bg-transparent border w-[40px] h-[30px] border-red-500 hover:bg-transparent">
                  <DeleteOutlineIcon
                    style={{width: "20px", height: "20px"}}
                    className="text-red-500"
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Dedicated;
