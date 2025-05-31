"use client";
import {Button} from "@/components/ui/button";
import AddIcon from "@mui/icons-material/Add";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import AreaChartIcon from "@mui/icons-material/AreaChart";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BusinessIcon from "@mui/icons-material/Business";
import CellTowerIcon from "@mui/icons-material/CellTower";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FlagIcon from "@mui/icons-material/Flag";
import FlightIcon from "@mui/icons-material/Flight";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import Link from "next/link";
import {useState} from "react";

type JonPositionsProps = {
  type: "drivers" | "operators" | "leaseDrivers";

  rate?: string;
  location?: string;
  transport?: string;
  jobTitle?: string;
  company: string;
  otr?: string;
  off?: string;
  escrow?: string;
  flightTicket?: string;
  truck?: string;
  loads?: string;
  firstPayment?: string;
  weeklyMiles?: string;
  dispatchFee?: string;
  insurance?: string;
  eld?: string;
  ifta?: string;
  plateProgram?: string;
  coverageArea?: string;
  grossSolo?: string;
  grossTeam?: string;
  payment?: string;
  provided?: string;
  requiredExp?: string;
  address?: string;
  yard?: string;
  availableLanes?: string;
  activeBtn?: string;
};

const jobTypes = [
  {
    label: "Drivers",
    value: "drivers",
  },
  {
    label: "Operators",
    value: "operators",
  },
  {
    label: "Lease Drivers",
    value: "leaseDrivers",
  },
];

const JobsPage: React.FC = () => {
  const [activeBtn, setActiveBtn] = useState<string>("drivers");

  return (
    <div className="flex bg-white pt-20">
      <div className="h-full overflow-auto w-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-5xl mb-6">
            We’re looking for the best
          </h2>
          <div className="w-[100px] h-[4px] bg-orange-400 mx-auto mb-10" />
        </div>

        <div className="container mx-auto">
          <div className="md:w-[330px] w-[300px] mx-auto border border-[#EAECF0] rounded-[8px] h-[54px] mb-3 bg-[#F9FAFB] p-[6px] flex items-center justify-between gap-[6px]">
            {jobTypes?.map((job) => (
              <Button
                key={job?.value}
                onClick={() => setActiveBtn(job.value)}
                className={`md:w-[120px] w-[80px] hover:bg-[#F9FAFB] text-black ${
                  job.value === activeBtn
                    ? "bg-white hover:bg-white shadow-md"
                    : "bg-[#F9FAFB] shadow-none"
                } h-[40px]  rounded-[6px] md:text-[14px] flex items-center justify-center text-[12px] font-semibold`}>
                {job.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="md:px-12 px-5 w-full flex justify-center">
          <div className="md:w-[80%] w-[100%]">
            {activeBtn === "drivers" && (
              <JonPositions
                activeBtn={activeBtn}
                type="drivers"
                company="ABC Logistics"
                payment="$1500/week"
                otr="Yes"
                off="Weekends"
                escrow="$500"
                flightTicket="Provided"
                truck="New Freightliner"
                loads="Dry Van"
                firstPayment="End of first week"
                weeklyMiles="2500"
                jobTitle="Company Driver - Regional"
              />
            )}

            {activeBtn === "operators" && (
              <JonPositions
                activeBtn={activeBtn}
                type="operators"
                company="ABC Logistics"
                dispatchFee="12%"
                insurance="Required or offered"
                eld="Provided"
                ifta="Handled by company"
                otr="Yes"
                off="Flexible"
                loads="Dry Van"
                plateProgram="Available"
                coverageArea="East Coast"
                grossSolo="$6000-$8000"
                grossTeam="$0"
                payment="Weekly"
                provided="Trailer, ELD"
                requiredExp="2 years"
                address="123 Main St, Dallas TX"
                yard="Dallas Terminal"
                availableLanes="TX to FL, TX to GA"
                jobTitle="Owner Operator - Regional Freight"
              />
            )}
            {activeBtn === "leaseDrivers" && (
              <div className="h-[250px] flex items-center justify-center">
                No jobs available yet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const JonPositions: React.FC<JonPositionsProps> = (props) => {
  const {
    type,
    jobTitle,
    company,
    otr,
    off,
    escrow,
    flightTicket,
    truck,
    loads,
    firstPayment,
    weeklyMiles,
    dispatchFee,
    insurance,
    eld,
    ifta,
    plateProgram,
    coverageArea,
    grossSolo,
    grossTeam,
    payment,
    provided,
    requiredExp,
    address,
    yard,
    availableLanes,
    activeBtn,
  } = props;

  return (
    <div className="p-6 border rounded-[16px] border-[#EAECF0] mb-6 flex shadow-sm md:flex-row flex-col w-full">
      <div className="md:border-r-[2px] border-r-0 md:w-[70%] w-[100%] md:pr-6 pr-0">
        <h3 className="text-[18px] text-[#030A21] font-bold md:block">
          {company}
        </h3>
        <h3 className="lg:text-[26px] font-semibold text-[#036760] mb-4">
          {jobTitle}
        </h3>

        {type === "drivers" && (
          <>
            {payment && (
              <p className="flex items-center gap-2 mb-1">
                <PaymentIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold"> Payment:</span>{" "}
                {payment}
              </p>
            )}
            {otr && (
              <p className="flex items-center gap-2 mb-1">
                <AddRoadIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold"> OTR:</span> {otr}
              </p>
            )}
            {off && (
              <p className="flex items-center gap-2 mb-1">
                <EventRepeatIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold"> OFF:</span> {off}
              </p>
            )}
            {escrow && (
              <p className="flex items-center gap-2 mb-1">
                <DataThresholdingIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold"> Escrow:</span> {escrow}
              </p>
            )}
            {flightTicket && (
              <p className="flex items-center gap-2 mb-1">
                <FlightIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Flight Ticket:
                </span>{" "}
                {flightTicket}
              </p>
            )}
            {truck && (
              <p className="flex items-center gap-2 mb-1">
                <LocalShippingIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">Truck:</span> {truck}
              </p>
            )}
            {loads && (
              <p className="flex items-center gap-2 mb-1">
                <AutorenewIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">Loads:</span> {loads}
              </p>
            )}
            {firstPayment && (
              <p className="flex items-center gap-2 mb-1">
                <AttachMoneyIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">1st Payment:</span>{" "}
                {firstPayment}
              </p>
            )}
            {weeklyMiles && (
              <p className="flex items-center gap-2 mb-1">
                <FlagIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Weekly Guaranteed Miles:
                </span>{" "}
                {weeklyMiles}
              </p>
            )}
          </>
        )}

        {type === "operators" && (
          <>
            {dispatchFee && (
              <p className="flex items-center gap-2 mb-1">
                <PaymentIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Dispatch Fee:
                </span>{" "}
                {dispatchFee}
              </p>
            )}

            {insurance && (
              <p className="flex items-center gap-2 mb-1">
                <AddIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">Insurance:</span>{" "}
                {insurance}
              </p>
            )}
            {eld && (
              <p className="flex items-center gap-2 mb-1">
                <AddIcCallIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">ELD:</span> {eld}
              </p>
            )}
            {ifta && (
              <p className="flex items-center gap-2 mb-1">
                <AttachEmailIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">IFTA:</span> {ifta}
              </p>
            )}
            {otr && (
              <p className="flex items-center gap-2 mb-1">
                <CellTowerIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">OTR:</span> {otr}
              </p>
            )}
            {off && (
              <p className="flex items-center gap-2 mb-1">
                <EventRepeatIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">OFF:</span> {off}
              </p>
            )}
            {loads && (
              <p className="flex items-center gap-2 mb-1">
                <AutorenewIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">Loads</span> {loads}
              </p>
            )}
            {plateProgram && (
              <p className="flex items-center gap-2 mb-1">
                <FastfoodIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Plate Program:
                </span>{" "}
                {plateProgram}
              </p>
            )}
            {coverageArea && (
              <p className="flex items-center gap-2 mb-1">
                <AreaChartIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Coverage Area
                </span>{" "}
                {coverageArea}
              </p>
            )}
            {grossSolo && (
              <p className="flex items-center gap-2 mb-1">
                <AreaChartIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Gross Avg Solo (Weekly):
                </span>{" "}
                {grossSolo}
              </p>
            )}
            {grossTeam && (
              <p className="flex items-center gap-2 mb-1">
                <AreaChartIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Gross Avg Team (Weekly):
                </span>{" "}
                {grossTeam}
              </p>
            )}
            {payment && (
              <p className="flex items-center gap-2 mb-1">
                <PaymentIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">Payment:</span>{" "}
                {payment}
              </p>
            )}
            {provided && (
              <p className="flex items-center gap-2 mb-1">
                <AreaChartIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">Provided:</span>{" "}
                {provided}
              </p>
            )}
            {requiredExp && (
              <p className="flex items-center gap-2 mb-1">
                <AreaChartIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Required Experience:
                </span>{" "}
                {requiredExp}
              </p>
            )}
            {address && (
              <p className="flex items-center gap-2 mb-1">
                <BusinessIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Company Address:
                </span>{" "}
                {address}
              </p>
            )}
            {yard && (
              <p className="flex items-center gap-2 mb-1">
                <BusinessIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Company Yard:
                </span>{" "}
                {yard}
              </p>
            )}
            {availableLanes && (
              <p className="flex items-center gap-2 mb-1">
                <ListAltIcon style={{color: "#036760"}} />
                <span className="text-[16px] font-bold">
                  Available Lanes:
                </span>{" "}
                {availableLanes}
              </p>
            )}
          </>
        )}
      </div>

      <div className="minH-[270px] md:w-[30%] w-[100%]  px-6 flex flex-col justify-between">
        <h3 className="text-[18px] text-[#030A21] font-bold hidden md:block">
          {company}
        </h3>
        <Link
          href={{
            pathname: "/jobs-form",
            query: {jobTitle: jobTitle, jobType: activeBtn},
          }}>
          <button className="h-[45px] mt-4 md:mt-0 w-full bg-[#036760] rounded-sm text-[18px] text-white font-bold">
            Apply now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobsPage;
