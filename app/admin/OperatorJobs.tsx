"use client";

import {Button} from "@/components/ui/button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {Table} from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {useEffect, useState} from "react";

interface ColumnLabel {
  label: string;
  key: keyof Data;
}

const columns: readonly ColumnLabel[] = [
  {label: "Job Title", key: "jobTitle"},
  {label: "Applying As", key: "applyingAs"},
  {label: "Full Name", key: "fullName"},
  {label: "Your Phone Number", key: "yourPhoneNumber"},
  {label: "Your Email Address", key: "yourEmailAddress"},
  {label: "Years Of Experience", key: "yearsOfExperience"},
  {label: "Weeks Available", key: "weeksAvailable"},

  {label: "Truck Model", key: "truckModel"},
  {label: "Plate Status", key: "plateProgram"},

  {label: "Trailer Existance", key: "trailerExistance"},
  {label: "Accidents", key: "accidents"},
  {label: "Violations", key: "violations"},
  {label: "Start Date", key: "startDate"},
];

interface Data {
  jobTitle: string;
  fullName?: string;
  applyingAs?: string;
  yearsOfExperience?: string;
  yourPhoneNumber?: string;
  yourEmailAddress?: string;
  truckModel?: string;
  plateProgram?: string;
  weeksAvailable?: string;
  trailerExistance?: string;
  accidents?: string;
  violations?: string;
  startDate?: string;
}

function OperatorJobAppliers() {
  const [rows, setRows] = useState<Data[]>();

  const handleOnGetSheetDataClick = async () => {
    const sheetName = "Operator Job Appliers";
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
        <h2 className="text-xl">Operator Job Appliers</h2>
      </div>
      <StickyHeadTable rows={rows || []} />
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
                  }}>
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

export default OperatorJobAppliers;
