import Image from "next/image";
import React from "react";
import {Button} from "./ui/button";
import DirectionsIcon from "@mui/icons-material/Directions";
import Link from "next/link";

function Banner() {
  return (
    <div className="flex lg:h-[calc(100vh-95px)] md:h-[calc(100vh-240px)] h-[calc(100vh-250px)] relative bg-blue-500 w-full">
      <div className="flex-full min-w-0 relative">
        <Image
          alt="banner photo"
          src={"/img/truck2.jpg"}
          width={1920}
          height={1080}
          className="absolute w-full h-full object-cover"
        />
      </div>

      <div className=" md:inline absolute mt-0 top-0 pt-20 lg:pt-60 md:pt-44 h-full w-full bg-transparent bg-gradient-to-r from-gray-800/90 to-transparent px-8 md:px-12">
        <h2 className="text-center md:text-justify text-[36px] lg:text-6xl md:text-5xl max-w-[400px] lg:w-[700px] md:w-[550px]  text-white font-bold">
          WE CONNECT <span className="text-[#F3A95A]">DRIVERS</span> FOR SUCCESS
        </h2>
        <div className="mt-20 md:mt-14 md:w-[500px] max-w-[100%] flex items-center justify-between flex-wrap sm:justify-center md:gap-[20px]">
          <Link
            className="hover:bg-[#049e8e] flex justify-center items-center gap-2 rounded-[6px] w-[100%] md:w-[48%] h-[65px] md:h-[56px] bg-[#35bcaf] lg:text-[20px] text-[16px] text-white"
            href={"jobs"}>
            <DirectionsIcon style={{width: "24px", height: "24px"}} />I am
            Driver
          </Link>
          <Link
            className="hover:bg-[#ffffffd7] flex items-center gap-[10px] my-2  rounded-[6px] justify-center w-[100%] md:w-[48%] h-[65px] md:h-[56px] bg-white lg:text-[20px] text-black  shake text-[16px]"
            href={"/dedicated-lines"}>
            <DirectionsIcon style={{width: "24px", height: "24px"}} />
            Dedicated Lanes
          </Link>

          <Link href={"jobs"} className="w-full block">
            <Button className="hover:bg-white hover:text-black w-full h-[65px] md:h-[56px] lg:text-[20px] text-[16px] bg-transparent border-[2px]">
              Search Jobs
            </Button>
          </Link>
        </div>
      </div>

      {/* <div className=" md:inline absolute mt-0 top-0 md:pt-44 lg:pt-60 h-full w-full bg-transparent bg-gradient-to-r from-gray-800/90 to-transparent px-16 md:px-12">
        <h2 className="lg:text-6xl md:text-4xl text-[20px] w-[700px] md:w-[400px] text-white font-bold">
          WE CONNECT <span className="text-[#F3A95A]">DRIVERS</span> FOR SUCCESS
        </h2>
        <div className="mt-20 md:mt-14 w-[500px] flex items-center justify-between flex-wrap">
          <Link
            className="hover:bg-[#049e8e] flex justify-center items-center gap-2 rounded-[6px] w-[48%] h-[65px] md:h-[56px] bg-[#35bcaf] lg:text-[20px] text-[16px] text-white"
            href={"jobs"}>
            <DirectionsIcon style={{width: "24px", height: "24px"}} />I am
            Driver
          </Link>
          <Link
            className="hover:bg-[#ffffffd7] flex items-center gap-[10px] rounded-[6px] justify-center w-[48%] h-[65px] md:h-[56px] bg-white lg:text-[20px] text-black  shake text-[16px]"
            href={"/dedicated-lines"}>
            <DirectionsIcon style={{width: "24px", height: "24px"}} />
            Dedicated Lanes
          </Link>

          <Link href={"jobs"} className="w-full block">
            <Button className="hover:bg-white hover:text-black mt-5 w-full h-[65px] md:h-[56px] lg:text-[20px] text-[16px] bg-transparent border-[2px]">
              Search Jobs
            </Button>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Banner;
