import {Sheet, SheetTrigger, SheetContent} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import {Phone} from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-[75px] justify-between w-full shrink-0 items-center px-4 md:px-6 z-50 overflow-hidden">
      <Link
        href="/"
        className="ml-[-20px] block md:hidden cursor-pointer"
        prefetch={false}>
        <Image
          alt="logo"
          width={130}
          height={30}
          src={"/img/brtLogo1.png"}
          objectFit="cover"
        />
      </Link>
      <Link href="/" className="mr-6 hidden md:block " prefetch={false}>
        <Image
          alt="logo"
          width={170}
          height={35}
          src={"/img/brtLogo1.png"}
          objectFit="cover"
        />
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/aboutus"
              className="cursor-pointer group inline-flex h-9 hover:text-[#026860] w-max items-center justify-center rounded-md bg-white px-4 py-2 lg:text-[20px] text-[18px] font-medium transition-colors hover:bg-gray-100  focus:bg-[#0f766e] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={true}>
              Admin
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/aboutus"
              className="cursor-pointer group inline-flex h-9 hover:text-[#026860] w-max items-center justify-center rounded-md bg-white px-4 py-2 lg:text-[20px] text-[18px] font-medium transition-colors hover:bg-gray-100  focus:bg-[#0f766e] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={true}>
              About Us
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/jobs"
              className="cursor-pointer group inline-flex h-9 hover:text-[#026860] w-max items-center justify-center rounded-md bg-white px-4 py-2 lg:text-[20px] text-[18px] font-medium transition-colors hover:bg-gray-100  focus:bg-[#0f766e] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={true}>
              Jobs
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="cursor-pointer group inline-flex h-9 hover:text-[#026860] w-max items-center justify-center rounded-md bg-white px-4 py-2 lg:text-[20px] text-[18px] font-medium transition-colors hover:bg-gray-100  focus:bg-[#0f766e] focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={true}>
              Contact Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto gap-2 hidden lg:flex">
        <Button
          variant="outline"
          className="w-[110px] h-[45px] lg:text-[20px] text-[18px] border-[1px] text-[#036760] border-[#036760] hover:bg-[#026860] hover:text-white">
          Driver
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden mr-3">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-[20px] font-semibold"
              prefetch={true}>
              Admin
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-[20px] font-semibold"
              prefetch={true}>
              About Us
            </Link>
            <Link
              href="/jobs"
              className="flex w-full items-center py-2 text-[20px] font-semibold"
              prefetch={true}>
              Jobs
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-[20px]  font-semibold"
              prefetch={true}>
              Contact Us
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden lg:block ml-6">
        <div className="flex">
          <Phone style={{color: "#036760"}} />
          <Link
            href="tel:+1(347)2638089"
            className="ml-2 lg:text-[18px] font-bold">
            +1 (347) 263-8089
          </Link>
        </div>
        <div className="flex">
          <Phone style={{color: "#036760"}} />
          <Link
            href="tel:+1(347)2638165"
            className="ml-2 lg:text-[18px] font-bold">
            +1 (347) 263-8165
          </Link>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
