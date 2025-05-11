"use client";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PlaceIcon from "@mui/icons-material/Place";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import Link from "next/link";

type JonPositionsProps = {
  title: string;
  rate: string;
  location: string;
  transport: string;
  jobTitle: string;
  company: string;
  schedule: string;
  homeTime: string;
  experience: string;
};

const DedicatedLines: React.FC = () => {
  return (
    <div className="flex bg-gray-50">
      <div className="h-full overflow-auto w-full pt-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-5xl mb-6">
            Dedicated lines
          </h2>
          <div className="w-[100px] h-[4px] bg-orange-400 mx-auto mb-10" />
        </div>

        <div className="px-12 w-full flex justify-center">
          <div className="lg:w-[80%]">
            <JonPositions
              title="Dedicated Route – Dallas to Memphis"
              rate="$300/day"
              location="Dallas, TX → Memphis, TN"
              transport="Freightliner Sleeper (Automatic)"
              jobTitle="CDL-A Dedicated Driver"
              company="SpeedLogix Transport"
              schedule="Monday – Friday, 6AM Start"
              homeTime="Home Daily"
              experience="2+ Years CDL Class A"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const JonPositions: React.FC<JonPositionsProps> = ({
  title,
  rate,
  location,
  transport,
  jobTitle,
  company,
  schedule,
  homeTime,
  experience,
}) => {
  return (
    <div className="p-6 border rounded-[16px] border-[#EAECF0] mb-6 w-full flex shadow-sm bg-white">
      <div className="border-r-[1px] pr-6 w-[70%]">
        <h3 className="text-[24px] lg:text-[26px] font-semibold text-[#036760] mb-4">
          {title}
        </h3>

        <div className="space-y-3 text-[18px] lg:text-[20px] text-gray-700">
          <p className="flex items-center gap-2">
            <AttachMoneyIcon style={{color: "#036760"}} />
            {rate} Flat Rate
          </p>
          <p className="flex items-center gap-2">
            <PlaceIcon style={{color: "#036760"}} />
            Route: {location}
          </p>
          <p className="flex items-center gap-2">
            <LocalShippingIcon style={{color: "#036760"}} />
            Equipment: {transport}
          </p>
          <p className="flex items-center gap-2">
            <AccessTimeIcon style={{color: "#036760"}} /> Schedule:{" "}
            <span className="ml-2 text-gray-600">{schedule}</span>
          </p>
          <p className="flex items-center gap-2">
            <HomeWorkIcon style={{color: "#036760"}} /> Home Time:{" "}
            <span className="ml-2 text-gray-600">{homeTime}</span>
          </p>
          <p className="flex items-center gap-2">
            <TrackChangesIcon style={{color: "#036760"}} /> Experience Required:{" "}
            <span className="ml-2 text-gray-600">{experience}</span>
          </p>

          <div className="mt-6 text-gray-800">
            <p className="font-semibold">Job Title:</p>
            <p className="text-gray-600">{jobTitle}</p>
          </div>
        </div>
      </div>

      <div className="w-[30%] px-6 flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] text-[#030A21] font-bold mb-4">
            {company}
          </h3>
          <p className="text-sm text-gray-500">Dedicated Line Position</p>
        </div>
        <Link href={"dedicated-lines-form"}>
          <button className="h-[45px] w-full bg-[#036760] hover:bg-[#02544f] transition rounded-sm text-[18px] text-white font-bold mt-4">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DedicatedLines;
