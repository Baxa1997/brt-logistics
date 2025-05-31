"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Phone, Menu} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {useState} from "react";

function NavLink({href, label}: {href: string; label: string}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isHome = pathname === "/";

  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        prefetch={true}
        className={`inline-flex h-9 items-center justify-center px-4 py-2 rounded-md transition-colors text-[16px] lg:text-[20px] font-medium ${
          isHome
            ? "text-white hover:text-[#FB923C]"
            : "text-black hover:text-blue-600"
        } ${isActive ? "underline underline-offset-4" : ""}`}>
        {label}
      </Link>
    </NavigationMenuLink>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`${
        isHome
          ? "absolute bg-transparent text-white"
          : "relative bg-white text-black shadow-md"
      } z-50 w-full flex items-center justify-between px-6 md:px-6 h-[80px] transition-colors duration-300`}>
      <Link href="/" prefetch={false}>
        <Image
          alt="logo"
          src={isHome ? "/img/newLogo5.svg" : "/img/newLogoBlack.svg"}
          width={200}
          height={35}
          className="hidden md:block mr-[25px]"
        />
        <Image
          alt="logo"
          src={isHome ? "/img/newLogo5.svg" : "/img/newLogoBlack.svg"}
          width={200}
          height={35}
          className="block md:hidden ml-[-20px]"
        />
      </Link>

      <nav className="hidden lg:flex">
        <NavigationMenu aria-label="Main Navigation">
          <NavigationMenuList>
            <NavLink href="/aboutus" label="About Us" />
            <NavLink href="/jobs" label="Jobs" />
            <NavLink href="/contact" label="Contact Us" />
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="ml-auto hidden lg:flex gap-2">
        <Button
          variant="outline"
          className={`w-[110px] h-[45px] border ${
            isHome
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"
          } text-[18px] lg:text-[20px] bg-transparent`}>
          Log in
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden mr-3">
            <Menu className="h-6 w-6 text-black" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white flex flex-col">
          <div className="grid gap-4 text-black text-[20px] font-normal">
            <Link href="/" prefetch={false} onClick={() => setOpen(false)}>
              <Image
                alt="logo"
                src={"/img/newLogoBlack.svg"}
                width={200}
                height={35}
                className="block  ml-[-20px]"
              />
            </Link>
            <Link
              href="/aboutus"
              prefetch={true}
              onClick={() => setOpen(false)}>
              About Us
            </Link>
            <Link href="/jobs" prefetch={true} onClick={() => setOpen(false)}>
              Jobs
            </Link>
            <Link
              href="/contact"
              prefetch={true}
              onClick={() => setOpen(false)}>
              Contact Us
            </Link>
            <Link href="#" prefetch={true}>
              Admin
            </Link>
          </div>

          <div className="mt-auto text-lg">
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6" />
              <Link href="tel:+13472638089">+1 (347) 263-8089</Link>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Phone className="w-6 h-6" />
              <Link href="tel:+13472638165">+1 (347) 263-8165</Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div
        className={`hidden lg:flex flex-col gap-1 ml-6  text-[18px] font-bold ${
          isHome ? "text-white" : "text-black"
        }`}>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <Link href="tel:+13472638089">+1 (347) 263-8089</Link>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <Link href="tel:+13472638165">+1 (347) 263-8165</Link>
        </div>
      </div>
    </header>
  );
}
