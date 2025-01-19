import {LetterText, Mail, Phone, ReceiptText, ShieldCheck} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-teal-700 text-white pt-10 pb-5">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6">
        <div>
          <Link
            href="#"
            className="ml-[-20px] block md:hidden"
            prefetch={false}>
            <Image
              alt="logo"
              width={130}
              height={30}
              src={"/img/brtLogo1.png"}
              objectFit="cover"
            />
          </Link>
          <p className="text-sm">
            US Trucking Service means to serve as a best friend for both drivers
            and carriers in the transportation industry. We provide qualified
            CDL Class A drivers for motor carriers and help drivers find the job
            that matches their criteria.
          </p>
        </div>

        <div className="max-w-[220px]">
          <h3 className="text-lg font-bold mb-4">For Drivers</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/jobs" className="hover:underline">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/apply-driver" className="hover:underline">
                Apply as Driver
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-w-[220px]">
          <h3 className="text-lg font-bold mb-4">For Carriers</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/apply-carrier" className="hover:underline">
                Apply as Carrier
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Policies</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ReceiptText />
              <Link href="/terms-conditions" className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck />
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <LetterText />
              <Link href="/cookie-policy" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contacts</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone />
              <Link href="tel:+1(347)2638089" className="ml-2">
                +1 (347) 263-8089
              </Link>
            </li>
            <li className="flex items-center">
              <Phone />
              <Link href="tel:+1(347)2638165" className="ml-2">
                +1 (347) 263-8165
              </Link>
            </li>
            <li className="flex items-center">
              <Mail />
              <Link href="mailto:info@ustruckingservice.co" className="ml-2">
                info@ustruckingservice.co
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-600 mt-8 pt-4 text-center">
        <p className="text-sm">
          Copyright © 2023 BRT Logistics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
