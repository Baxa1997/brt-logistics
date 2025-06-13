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
  {label: "Daily Miles", key: "dailyMiles"},
  {label: "Weeks Available", key: "weeksAvailable"},
  {label: "Past Company", key: "pastCompany"},
  {label: "Accidents", key: "accidents"},
  {label: "Violations", key: "violations"},
  {label: "Start Date", key: "startDate"},
];

interface Data {
  jobTitle: string;
  fullName?: string;
  applyingAs?: string;
  yourPhoneNumber?: string;
  yourEmailAddress?: string;
  yearsOfExperience?: string;
  dailyMiles?: string;
  weeksAvailable?: string;
  pastCompany?: string;
  accidents?: string;
  violations?: string;
  startDate?: string;
}

function DedicatedJobAppliers() {
  const [rows, setRows] = useState<Data[]>();

  const handleOnGetSheetDataClick = async () => {
    const sheetName = "Dedicated Job Appliers";
    const res = await fetch(`/api/sheets?sheetName=${sheetName}`);
    const json = await res.json();
    setRows(json?.data || []);
  };

  const deleteRow = async (index: number) => {
    await fetch("/api/sheets", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sheetName: "Dedicated Job Appliers",
        rowIndex: index,
      }),
    })
      .then(() => handleOnGetSheetDataClick())
      .catch((err) => console.log("eerrrrrrrrrrr", err));
  };

  useEffect(() => {
    handleOnGetSheetDataClick();
  }, []);

  return (
    <>
      <div className="py-2 px-4 h-[50px] flex justify-between items-center border-b border-[#E0E0E0]">
        <h2 className="text-xl">Dedicated Lanes Job Appliers</h2>
      </div>
      <StickyHeadTable rows={rows || []} deleteRow={deleteRow} />
    </>
  );
}

function StickyHeadTable({
  rows,
  deleteRow,
}: {
  rows: Data[];
  deleteRow: (index: number) => void;
}) {
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
                <Button
                  onClick={() => deleteRow(index + 2)}
                  className="bg-transparent border w-[40px] h-[30px] border-red-500 hover:bg-transparent">
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

export default DedicatedJobAppliers;
