import Image from "next/image";
import React from "react";
import {Button} from "./ui/button";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";

function Banner() {
  return (
    <div className="flex lg:h-[calc(100vh)] md:h-[calc(100vh-240px)] h-[calc(100vh-100px)] relative bg-blue-500 w-full">
      <div className="flex-full min-w-0 relative">
        <Image
          alt="banner photo"
          src={"/img/truck2.jpg"}
          width={1920}
          height={1080}
          className="absolute w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-gray-800/85 to-transparent px-6 sm:px-12 pt-40 md:pt-44 lg:pt-60">
        <h2 className="text-white font-bold text-[24px] sm:text-[32px] md:text-5xl lg:text-6xl max-w-[90%] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[700px] text-center sm:text-left mx-auto sm:mx-0">
          WE CONNECT <span className="text-[#FB923C]">DRIVERS</span> FOR SUCCESS
        </h2>

        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:justify-start sm:gap-4 items-center max-w-full sm:max-w-[500px] mx-auto sm:mx-0">
          <Link
            href="jobs"
            className="hover:bg-[#049e8e] flex items-center justify-center gap-2 rounded-[6px] bg-[#35bcaf] text-white text-[16px] lg:text-[18px] h-[56px] w-full sm:w-[242px] mb-4 sm:mb-0">
            <Person2Icon style={{width: "24px", height: "24px"}} />I am Driver
          </Link>

          <Link
            href="/dedicated-lines"
            className="hover:bg-[#ffffffd7] flex items-center justify-center gap-2 rounded-[6px] bg-white text-black text-[16px] lg:text-[18px] h-[56px] w-full sm:w-[242px] mb-4 sm:mb-0">
            <LocationOnIcon style={{width: "24px", height: "24px"}} />
            Dedicated Lanes
          </Link>

          <Link href="jobs" className="w-full">
            <Button className="w-full h-[56px] lg:text-[18px] text-[16px] bg-transparent border-2 text-white hover:bg-white hover:text-black">
              <SearchIcon style={{width: "26px", height: "26px"}} />
              Search Jobs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
