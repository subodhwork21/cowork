"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = (e: any) => {
    setNav(!nav);
  };
  return (
    <section className="max-w-[1440px] font-regularSans relative ">
      <nav
        className={`flex md:px-16 px-8 py-4  flex-row justify-between items-center md:bg-white md:w-auto md:static z-20`}
      >
        <div className={`font-extrabold z-10`}>
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
          className={` md:text-[16px] text-[48px] hidden md:flex font-bold md:font-normal md:h-auto h-screen text-white md:text-black bg-black md:bg-white fixed md:px-0 px-8 md:static  md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-12 gap-8 top-16 md:pt-0 pt-10 left-0 md:w-auto w-full z-40`}
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
        {!nav ? (
          <button
            onClick={(e) => toggleNav(e)}
            className={`md:hidden block rounded-[42px] px-4 py-2 text-sm ${"bg-black text-white outline outline-1"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        ) : !nav ? (
          <p
            onClick={(e) => toggleNav(e)}
            className={`md:hidden block px-4 py-2 ${"bg-black text-white"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </p>
        ) : (
          ""
        )}
      </nav>

      {/* for mobile screen */}
      {
        <Transition
          show={nav}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <nav
            className={`flex w-full md:px-16 px-8 py-4 fixed top-0 z-50 left-0  flex-row justify-between items-center md:bg-white md:w-auto md:static md:hidden ${
              nav
                ? " bg-black w-full fixed flex translate-x-[0px] transition-all duration-500 ease-in-out"
                : "md:translate-x-0 -translate-x-[1000px] transition-all duration-500 ease-in-out"
            }`}
          >
            <div className={`font-extrabold z-50 relative top-3`}>
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
              className={` md:text-[16px] text-[48px] font-bold md:font-normal md:h-auto h-screen text-white md:text-black bg-black md:bg-white fixed md:px-0 px-8 md:static flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-12 gap-8 top-14 md:pt-0 pt-10 left-0 md:w-auto w-full z-40 `}
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
            {!nav ? (
              <button
                onClick={(e) => toggleNav(e)}
                className={`md:hidden block rounded-[42px] px-4 py-2 text-sm ${"bg-black text-white outline outline-1"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            ) : (
              <p
                onClick={(e) => toggleNav(e)}
                className={`absolute top-4 right-9 md:hidden block px-4 py-2 ${"bg-black text-white"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </p>
            )}
          </nav>
        </Transition>
      }
    </section>
  );
};

export default Header;
