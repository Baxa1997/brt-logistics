import Image from "next/image";
import React from "react";
import {Button} from "./ui/button";
import DirectionsIcon from "@mui/icons-material/Directions";
import Link from "next/link";

function Banner() {
  return (
    <div className="flex h-[calc(100vh-95px)] relative bg-blue-500 w-full">
      <div className="flex-full min-w-0 relative">
        <Image
          alt="banner photo"
          src={"/img/truck2.jpg"}
          width={1920}
          height={1080}
          className="absolute w-full h-full object-cover"
        />
      </div>

      <div className="hidden md:inline absolute mt-0 top-0 lg:pt-60 h-full w-full bg-transparent bg-gradient-to-r from-gray-800/90 to-transparent lg:px-16">
        <h2 className="w-[200px] lg:text-6xl lg:w-[700px] md:w-[250px] text-white font-bold">
          WE CONNECT <span className="text-[#F3A95A]">DRIVERS</span> FOR SUCCESS
        </h2>
        <div className="lg:mt-20 w-[500px] flex items-center justify-between flex-wrap">
          <Button className="hover:bg-[#049e8e] lg:w-[48%] lg:h-[65px] bg-[#35bcaf] lg:text-[20px] text-[16px]">
            I am a Driver
          </Button>
          <Button className="hover:bg-[#ffffffd7]  lg:w-[48%] lg:h-[65px] bg-white lg:text-[20px] text-black  shake text-[16px]">
            <DirectionsIcon style={{width: "24px", height: "24px"}} />
            <Link href={"/dedicated-lines"}> Dedicated Lanes</Link>
          </Button>

          <Button className="hover:bg-white hover:text-black mt-5 w-full lg:h-[65px] lg:text-[20px] text-[16px] bg-transparent border-[2px]">
            Search Jobs
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
