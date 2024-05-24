"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = (e: any) => {
    setNav(!nav);
  };
  return (
    <section className="max-w-[1440px] font-regularSans relative ">
      <nav
        className={`flex md:px-16 px-8 py-4  flex-row justify-between items-center md:bg-white md:w-auto md:static z-10 ${
          nav ? " w-full fixed bg-white" : "bg-white"
        }`}
      >
        <div className={`font-extrabold z-50 md:hidden`}>
          <Link href={"/"}>
            <Image
              src="/Logo.png"
              width={120}
              height={24}
              alt="logo"
              className={`${nav ? "md:invert-0 invert" : ""}`}
            />
          </Link>
        </div>

        {!nav ? (
          <button
            onClick={(e) => toggleNav(e)}
            className={`md:hidden block rounded-[42px] px-4 py-2 text-sm ${"bg-black text-white outline outline-1"}`}
          >
            {<MenuIcon className="text-[35px]" />}
          </button>
        ) : (
          <p
            onClick={(e) => toggleNav(e)}
            className={`md:hidden block px-4 py-2 ${"bg-black text-white"}`}
          >
            <CloseIcon className="text-[35px]" />
          </p>
        )}
      </nav>
      <nav
        className={`flex md:px-16 px-8 py-4  flex-row justify-between items-center md:bg-white md:w-auto md:static z-20 ${
          nav
            ? " bg-black w-full fixed flex translate-x-[0px] transition-all duration-500 ease-in-out"
            : "md:translate-x-0 -translate-x-[1000px] transition-all duration-500 ease-in-out"
        }`}
      >
        <div className={`font-extrabold z-50`}>
          <Link href={"/"}>
            <Image
              src="/Logo.png"
              width={120}
              height={24}
              alt="logo"
              className={`${nav ? "md:invert-0 invert" : ""}`}
            />
          </Link>
        </div>
        <ul
          className={` md:text-[16px] text-[48px] font-bold md:font-normal md:h-auto h-screen text-white md:text-black bg-black md:bg-white fixed md:px-0 px-8 md:static flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-12 gap-8 top-16 md:pt-0 pt-10 left-0 md:w-auto w-full z-40`}
        >
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Events</li>

          <li className="cursor-pointer md:block hidden">
            <Button content="Login" bgcolor="bg-white" />
          </li>
          <li className="cursor-pointer md:block hidden">
            <Button content="Sign Up" bgcolor="bg-black" />
          </li>
          <div className="justify-start items-center w-full mt-16 flex-row-reverse md:hidden flex">
            <li className="cursor-pointer md:hidden block">
              <Button content="Login" bgcolor="bg-white" size="big" />
            </li>
            <li className="cursor-pointer md:hidden block">
              <Button content="Sign Up" bgcolor="bg-black" size="big" />
            </li>
          </div>
        </ul>
        {nav && (
          <p
            onClick={(e) => toggleNav(e)}
            className={`md:hidden block px-4 py-2 ${"bg-black text-white"}`}
          >
            <CloseIcon className="text-[35px]" />
          </p>
        )}
      </nav>
    </section>
  );
};

export default Header;
