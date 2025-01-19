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
    <header className="flex h-[95px] justify-between w-full shrink-0 items-center px-4 md:px-6 z-50 overflow-hidden">
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
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-[16px] font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}>
              About Us
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}>
              Jobs
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}>
              Contact Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto gap-2 hidden lg:flex">
        <Button variant="outline" className="w-[90px] h-[45px] text-[18px]">
          Driver
        </Button>
        <Button variant="outline" className="w-[90px] h-[45px] text-[18px]">
          Carrier
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
              className="flex w-full items-center py-2 text-[16px] font-semibold"
              prefetch={false}>
              About Us
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-[16px] font-semibold"
              prefetch={false}>
              Jobs
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-[16px] font-semibold"
              prefetch={false}>
              Contact Us
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden lg:block ml-6">
        <div className="flex">
          <Phone />
          <a href="tel:+1(347)2638089" className="ml-2">
            +1 (347) 263-8089
          </a>
        </div>
        <div className="flex">
          <Phone />
          <a href="tel:+1(347)2638165" className="ml-2">
            +1 (347) 263-8165
          </a>
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
