"use client";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FlagIcon from "@mui/icons-material/Flag";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PlaceIcon from "@mui/icons-material/Place";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import Link from "next/link";
import {useEffect, useState} from "react";

type JonPositionsProps = {
  key: number;
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
};

const DedicatedLines: React.FC = () => {
  const [rows, setRows] = useState<JonPositionsProps[]>();

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
    <div className="flex bg-gray-50">
      <div className="h-full overflow-auto w-full pt-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-5xl mb-6">
            Dedicated lines
          </h2>
          <div className="w-[100px] h-[4px] bg-orange-400 mx-auto mb-10" />
        </div>

        <div className="md:px-12 px-5 w-full flex justify-center">
          <div className="lg:w-[80%]">
            {rows?.map((el, index) => (
              <JonPositions
                key={index}
                jobTitle={el?.jobTitle}
                brokerName={el?.brokerName}
                wayType={el?.wayType}
                loadsType={el?.loadsType}
                pickUp={el?.pickUp}
                deliveryAddress={el?.deliveryAddress}
                miles={el?.miles}
                rate={el?.rate}
                durationOfContract={el?.durationOfContract}
                loadsPerWeek={el?.loadsPerWeek}
                transport={el?.transport}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const JonPositions: React.FC<JonPositionsProps> = ({
  key,
  jobTitle,
  brokerName,
  wayType,
  loadsType,
  pickUp,
  deliveryAddress,
  miles,
  rate,
  durationOfContract,
  loadsPerWeek,
  transport,
}) => {
  return (
    <div
      key={key}
      className="md:p-6 p-4 border rounded-[16px] border-[#EAECF0] mb-6 w-full flex flex-col md:flex-row shadow-sm bg-white">
      <div className="md:border-r-[1px] border-r-0 md:pr-6 pr-0 md:w-[70%] w-[100%]">
        <h3 className="text-[20px] lg:text-[26px] font-semibold text-[#036760] md:mb-4 mb-1">
          {jobTitle}
        </h3>

        <div className="md:hidden flex items-center gap-3 mb-4 ">
          <h3 className="md:text-[18px] text-[16px] text-[#030A21] font-bold ">
            {brokerName}
          </h3>
          <p className="text-sm text-gray-500">Dedicated Line Position</p>
        </div>

        <div className="space-y-1 text-[15px] lg:text-[20px] text-gray-700">
          <p className="flex items-center gap-2">
            <PlaceIcon style={{color: "#036760"}} />
            <span className="md:text-[18px] text-[16px] font-bold">
              {" "}
              Route:
            </span>{" "}
            {`${pickUp} - ${deliveryAddress}`}
          </p>

          <p className="flex items-center gap-2">
            <AddRoadIcon style={{color: "#036760"}} />
            <span className="md:text-[18px] text-[16px] font-bold">
              {" "}
              Trip Type:
            </span>{" "}
            {wayType}
          </p>

          <p className="flex items-center gap-2">
            <LocalShippingIcon style={{color: "#036760"}} />
            <span className="md:text-[18px] text-[16px] font-bold">
              Freight Load:
            </span>{" "}
            {loadsType}
          </p>
          <p className="flex items-center gap-2">
            <LocalShippingIcon style={{color: "#036760"}} />
            <span className="md:text-[18px] text-[16px] font-bold">
              Trailer Type:
            </span>{" "}
            {transport}
          </p>
          <p className="flex items-center gap-2">
            <AttachMoneyIcon style={{color: "#036760"}} />
            <span className="md:text-[18px] text-[16px] font-bold">Rate:</span>
            {rate}
          </p>

          <p className="flex items-center gap-2">
            <FlagIcon style={{color: "#036760"}} />{" "}
            <span className="md:text-[18px] text-[16px] font-bold">Miles:</span>
            <span className="text-gray-600">{miles}</span>
          </p>
          <p className="flex items-center gap-2">
            <HomeWorkIcon style={{color: "#036760"}} />{" "}
            <span className="md:text-[18px] text-[16px] font-bold">
              Contract duration:
            </span>{" "}
            <span className="text-gray-600">{durationOfContract}</span>
          </p>
          <p className="flex items-center gap-2">
            <TrackChangesIcon style={{color: "#036760"}} />{" "}
            <span className="md:text-[18px] text-[16px] font-bold">
              Loads per week:
            </span>{" "}
            <span className="ml-2 text-gray-600">{loadsPerWeek}</span>
          </p>
        </div>
      </div>

      <div className="md:w-[30%] w-full px-6 flex flex-col justify-between">
        <div className="md:block hidden">
          <h3 className="text-[18px] text-[#030A21] font-bold mb-4">
            {brokerName}
          </h3>
          <p className="text-sm text-gray-500">Dedicated Line Position</p>
        </div>
        <Link
          href={{
            pathname: "/dedicated-lines-form",
            query: {jobTitle: jobTitle, jobType: "Dedicated Lanes"},
          }}>
          <button className="h-[45px] w-full bg-[#036760] hover:bg-[#02544f] transition rounded-sm text-[18px] text-white font-bold mt-4">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DedicatedLines;
