"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="absolute w-full py-[2.5rem] px-[2rem] lg:py-[3rem] md:px-[6rem]">
      <div className="flex justify-between 2xl:max-w-[1650px] 2xl:m-auto">
        <Link href={"/"} className="font-normal">
          LOGO
        </Link>
        <nav className="hidden lg:flex gap-[4rem]">
          <Link
            href={"/"}
            className={`${pathname === "/" && "text-[#FFC107]"}`}
          >
            HOME
          </Link>
          <Link
            href={""}
            className={`${pathname === "/about" && "text-[#FFC107]"}`}
          >
            ABOUT US
          </Link>
          <Link
            href={"/properties"}
            className={`${pathname === "/properties" && "text-[#FFC107]"}`}
          >
            PROPERTIES
          </Link>
          <Link
            href={""}
            className={`${pathname === "/contact" && "text-[#FFC107]"}`}
          >
            CONTACT
          </Link>
        </nav>
        <RxHamburgerMenu size={25} className="lg:hidden" />
      </div>
    </header>
  );
};

export default Header;
