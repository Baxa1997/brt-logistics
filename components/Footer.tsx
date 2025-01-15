import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6">
        {/* Logo and Description */}
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

        {/* For Drivers */}
        <div className="max-w-[220px]">
          <h3 className="text-lg font-bold mb-4">For Drivers</h3>
          <ul className="space-y-2">
            <li>
              <a href="/jobs" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="/apply-driver" className="hover:underline">
                Apply as Driver
              </a>
            </li>
          </ul>
        </div>

        {/* For Carriers */}
        <div className="max-w-[220px]">
          <h3 className="text-lg font-bold mb-4">For Carriers</h3>
          <ul className="space-y-2">
            <li>
              <a href="/apply-carrier" className="hover:underline">
                Apply as Carrier
              </a>
            </li>
          </ul>
        </div>

        {/* Other Sections */}
        <div>
          <h3 className="text-lg font-bold mb-4">US Trucking Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        {/* Other Sections */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contacts</h3>
          <ul className="space-y-2">
            <li>
              <a href="tel:+1(347)2638089" className="ml-2">
                +1 (347) 263-8089
              </a>
            </li>
            <li>
              <a href="tel:+1(347)2638165" className="ml-2">
                +1 (347) 263-8165
              </a>
            </li>
            <li>
              <a href="mailto:info@ustruckingservice.co" className="ml-2">
                info@ustruckingservice.co
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-teal-600 mt-8 pt-4 text-center">
        <p className="text-sm">
          Copyright © 2023 US Trucking Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
