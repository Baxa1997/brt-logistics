"use client";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PlaceIcon from "@mui/icons-material/Place";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

type JonPositionsProps = {
  title: string;
  rate: string;
  location: string;
  transport: string;
  jobTitle: string;
  company: string;
};

const JobsPage: React.FC = () => {
  return (
    <div className="flex bg-gray-50">
      <div className="h-full overflow-auto w-full pt-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-5xl mb-6">
            We’re looking for the best
          </h2>
          <div className="w-[100px] h-[4px] bg-orange-400 mx-auto mb-10" />
        </div>

        <div className="px-12 w-full flex justify-center">
          <div className="lg:w-[80%]">
            <JonPositions
              title="CDL DRIVERS"
              rate="$3500-3500"
              location="Hawaii"
              transport="Truck"
              jobTitle="Truck Driver (Dry Van) - Local Construction Material Transport Truck Driver (Dry Van) - Local Construction Material Transport"
              company="Honolulu Builders LLC"
            />

            {/* <JonPositionsNew
              title="CDL DRIVERS"
              rate="3500-3500 Flat Rate"
              location="Hawaii"
              transport="Truck"
              jobTitle="Truck Driver (Dry Van) - Local Construction Material Transport"
              company="Honolulu Builders LLC"
            /> */}
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
}) => {
  return (
    <div className="p-6 border rounded-[16px] border-[##EAECF0] mb-6 w-ful flex shadow-sm">
      <div className="border-r-[2px] w-[70%]">
        <h3 className="lg:text-[26px] font-semibold text-[#036760] mb-4">
          {title}
        </h3>

        <div>
          <p className="flex items-center gap-2 mb-2 lg:text-[20px]">
            <AttachMoneyIcon style={{color: "#036760"}} /> {rate} Flat Rate
          </p>
          <p className="flex items-center gap-2 mb-2 lg:text-[22px]">
            <PlaceIcon style={{color: "#036760"}} /> {location}
          </p>
          <p className="flex items-center gap-2 lg:text-[22px]">
            <LocalShippingIcon style={{color: "#036760"}} /> {transport}
          </p>

          <p className="mt-10  gap-2 font-[400] lg:text-[20px] max-w-[600px]">
            <span className="w-[100px] font-[600]">Job title:</span>{" "}
            <span className="text-[18px]">{jobTitle}</span>
          </p>
        </div>
      </div>

      <div className=" h-[270px] w-[30%] px-6 flex flex-col justify-between">
        <h3 className="text-[18px] text-[#030A21] font-bold">{company}</h3>
        <button className="h-[45px] w-full bg-[#036760] rounded-sm text-[18px] text-white font-bold">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobsPage;
