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
import EventNoteIcon from "@mui/icons-material/EventNote";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TitleIcon from "@mui/icons-material/Title";

interface ColumnLabel {
  label: string;
  accessor: keyof Data;
  icon?: React.ReactNode;
}

const columns: readonly ColumnLabel[] = [
  {label: "Job Title", accessor: "jobTitle", icon: <TitleIcon />},
  {label: "Payment", accessor: "payment"},
  {label: "Dispatch Fee", accessor: "dispatchFee"},
  {label: "Insurance", accessor: "insurance"},
  {
    label: "ELD",
    accessor: "eLD",
    icon: <EventNoteIcon sx={{fontSize: 18, mr: 0.5}} />,
  },
  {label: "IFTA", accessor: "iFTA"},
  {label: "OFF", accessor: "oFF"},
  {
    label: "Loads",
    accessor: "loads",
    icon: <LocalShippingIcon sx={{fontSize: 18, mr: 0.5}} />,
  },
  {label: "Plate Program", accessor: "plateProgram"},
  {label: "Coverage Area", accessor: "coverageArea"},
  {label: "Gross Average (Solo)", accessor: "grossAverageSolo"},
  {label: "Gross Average (Team)", accessor: "grossAverageTeam"},
  {label: "Provided", accessor: "provided"},
  {label: "Required Experience", accessor: "requiredExperience"},
  {label: "Company Address", accessor: "companyAddress"},
  {label: "Company Yard", accessor: "companyYard"},
  {label: "Available Lanes", accessor: "availableLanes"},
];

interface Data {
  jobTitle: string;
  payment?: string;
  dispatchFee?: string;
  insurance?: string;
  eLD?: string;
  iFTA?: string;
  oFF?: string;
  loads?: string;
  plateProgram?: string;
  coverageArea?: string;
  grossAverageSolo?: string;
  grossAverageTeam?: string;
  provided?: string;
  requiredExperience?: string;
  companyAddress?: string;
  companyYard?: string;
  availableLanes?: string;
}

function Operators() {
  const [rows, setRows] = useState<Data[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnGetSheetDataClick = async () => {
    const sheetName = "Operators";
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
        <h2 className="text-xl">Operators</h2>

        <div className="flex items-center gap-4">
          <Button
            onClick={handleOpen}
            className="bg-white text-black hover:bg-white border border-[#E0E0E0]">
            <AddIcon style={{width: "20px", height: "20px"}} />
          </Button>

          <Input placeholder="Search" className="border border-[#E0E0E0]" />
        </div>
      </div>

      <StickyHeadTable rows={rows} />
      <CreateEditForm
        open={open}
        jobType="operator"
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
          <TableRow sx={{height: "40px"}}>
            <TableCell
              sx={{
                height: "36px",
                width: "70px",
                fontWeight: "700",
                textAlign: "center",
                borderRight: "1px solid #E0E0E0",
              }}>
              №
            </TableCell>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                sx={{
                  height: "40px",
                  minWidth: "240px",
                  fontWeight: "700",
                  textAlign: "center",
                  borderRight: "1px solid #E0E0E0",
                  padding: 0,
                }}>
                {column.label}
              </TableCell>
            ))}
            <TableCell sx={{borderRight: "1px solid #E0E0E0"}} width={70} />
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow hover key={rowIndex}>
              <TableCell
                sx={{
                  textAlign: "center",
                  borderRight: "1px solid #E0E0E0",
                }}>
                {rowIndex + 1}
              </TableCell>

              {columns.map(({accessor, icon}, colIndex) => (
                <TableCell
                  key={colIndex}
                  sx={{
                    padding: "0px 10px",
                    borderRight: "1px solid #E0E0E0",
                    verticalAlign: "middle",
                    color: [
                      "payment",
                      "grossAverageSolo",
                      "grossAverageTeam",
                      "provided",
                      "requiredExperience",
                      "companyAddress",
                      "companyYard",
                      "availableLanes",
                    ].includes(accessor)
                      ? "#1976d2"
                      : undefined,
                    fontWeight: [
                      "payment",
                      "grossAverageSolo",
                      "grossAverageTeam",
                      "provided",
                      "requiredExperience",
                      "companyAddress",
                      "companyYard",
                      "availableLanes",
                    ].includes(accessor)
                      ? 500
                      : undefined,
                    fontStyle: accessor === "eLD" ? "italic" : undefined,
                  }}>
                  <span className="flex items-center gap-1">
                    {icon}
                    {row[accessor]}
                  </span>
                </TableCell>
              ))}

              <TableCell
                sx={{padding: "5px", borderRight: "1px solid #E0E0E0"}}>
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

export default Operators;
