import React, { useState } from "react";
import MainLogo from "../SVG/MainLogo";
import Link from "next/link";
import DashboardSVG from "../SVG/DashboardSVG";
import MarketSVG from "../SVG/MarketSVG";
import TransactionSVG from "../SVG/TransactionSVG";
import ProfileSVG from "../SVG/ProfileSVG";
import SettingsSVG from "../SVG/SettingsSVG";
import HelpSVG from "../SVG/HelpSVG";
import LogoutSVG from "../SVG/LogoutSVG";
import DarkModeButton from "../DarkModeButton";
import MainLogoDarkSVG from "../SVG/MainLogoDarkSVG";

import { useDetectClickOutside } from "react-detect-click-outside";
import Hamburger from "../SVG/Hamburger";

const Sidebar = ({ setIsOpen, isOpen }) => {
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
    console.log("hlk");
  };

  const sidebarRef = useDetectClickOutside({ onTriggered: closeSidebar });

  return (
    <div
      ref={sidebarRef}
      className={`${
        isOpen
          ? "md:w-[307px] w-[280px] h-full bg-white dark:bg-[#1C1C25]"
          : "xl:w-[307px] xl:h-full w-[70px] h-[70px] xl:mt-0 md:mt-28 mt-[70px] rounded-r-xl bg-white dark:bg-[#1C1C25] hamburger-dropShadow"
      }  fixed top-0 left-0 duration-300 border-r border-[#c0c5cb5e] dark:border-[#c4cacd14]  z-[100] overflow-hidden`}
    >
      <div className={`${isOpen ? "pl-6 " : ""} xl:hidden block`}>
        <button onClick={() => setIsOpen(!isOpen)} className="select-none">
          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </button>
      </div>

      <div
        data-aos="zoom-out"
        data-aos-delay="100"
        className="md:px-[40px] px-[30px] pb-[40px] xl:pt-[40px] h-full w-full overflow-y-auto "
      >
        <Link href="/">
          <div className="dark:hidden block">
            <MainLogo />
          </div>
          <div className="dark:block hidden ">
            <MainLogoDarkSVG />
          </div>
        </Link>

        <Link href="/">
          <button className="mt-8 group flex items-center w-full py-2.5 px-6 space-x-3  hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg ">
            <DashboardSVG className=" " />

            <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
              Dashboard
            </p>
          </button>
        </Link>
        <Link href="/market" className="">
          <button className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3  hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg ">
            <MarketSVG />
            <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
              Markets
            </p>
          </button>
        </Link>
        <Link href="/">
          <button className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg ">
            <TransactionSVG />
            <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
              Transactions
            </p>
          </button>
        </Link>
        <Link href="/profile">
          <button className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg ">
            <ProfileSVG />
            <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
              Profile
            </p>
          </button>
        </Link>
        <Link href="/">
          <button className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg ">
            <SettingsSVG />
            <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
              Settings
            </p>
          </button>
        </Link>
        <div className="w-full h-[1.5px] bg-[#e8eaecc7] dark:bg-[#ffffff0a] my-8"></div>
        <Link href="/">
          <button className="group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg ">
            <HelpSVG />
            <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
              Help
            </p>
          </button>
        </Link>
        <button className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg ">
          <LogoutSVG />
          <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
            Logout
          </p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
