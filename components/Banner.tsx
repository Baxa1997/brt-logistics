"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {Button} from "./ui/button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import {motion} from "framer-motion";

export default function Banner() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <Image
        src="/img/truck2.jpg"
        alt="Hero Background"
        fill
        priority
        className="absolute object-cover w-full h-full"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10" />

      <motion.div
        viewport={{once: false}}
        initial={{scale: 0}}
        animate={{scale: 1}}
        className="relative z-20 flex flex-col justify-center items-center lg:items-start h-full px-4 sm:px-10 lg:px-24 py-20 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mb-10">
          WE CONNECT <span className="text-[#FB923C]">DRIVERS</span> FOR SUCCESS
        </h1>

        <div className="w-full max-w-xl flex flex-col sm:flex-row sm:gap-4 space-y-4 sm:space-y-0 mb-5">
          <Link href="/jobs" className="w-full sm:w-1/2">
            <Button className="w-full h-[54px] gap-2 bg-[#35bcaf] hover:bg-[#049e8e] text-white text-base">
              <Person2Icon style={{width: "24px", height: "24px"}} /> I am
              Driver
            </Button>
          </Link>

          <Link href="/dedicated-lines" className="w-full sm:w-1/2">
            <Button className="w-full h-[54px] gap-2 bg-white text-black hover:bg-gray-100 text-base">
              <LocationOnIcon style={{width: "24px", height: "24px"}} />{" "}
              Dedicated Lanes {""}
            </Button>
          </Link>
        </div>

        <div className="w-full max-w-xl">
          <Link href="/jobs">
            <Button
              className={`
                w-full h-[54px] gap-2 border border-white text-white bg-transparent text-base 
                hover:bg-white hover:text-black transition-colors duration-200
              `}>
              <SearchIcon style={{width: "24px", height: "24px"}} /> Search Jobs
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
