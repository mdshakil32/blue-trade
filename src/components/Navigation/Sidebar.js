import React from "react";
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

const Sidebar = ({ setIsOpen, isOpen }) => {
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`${
        isOpen ? "w-[307px]" : "w-[307px]"
      } bg-white dark:bg-[#1C1C25]  h-full fixed top-0 left-0 duration-300 border-r border-[#c0c5cb5e] dark:border-[#c4cacd14] p-[40px]`}
    >
      {/* <button onClick={toggle}>Toggle</button> */}
      <Link href="/">
        <div className="dark:hidden block">
          <MainLogo />
        </div>
        <div className="dark:block hidden ">
          <MainLogoDarkSVG />
        </div>
      </Link>

      <Link href="/">
        <button
          data-aos="zoom-out"
          data-aos-delay="100"
          className="mt-8 group flex items-center w-full py-2.5 px-6 space-x-3  hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg "
        >
          <DashboardSVG className=" " />

          <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
            Dashboard
          </p>
        </button>
      </Link>
      <Link href="/market" className="">
        <button
          data-aos="zoom-out"
          data-aos-delay="200"
          className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3  hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg "
        >
          <MarketSVG />
          <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
            {" "}
            Markets
          </p>
        </button>
      </Link>
      <Link href="/">
        <button
          data-aos="zoom-out"
          data-aos-delay="300"
          className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg "
        >
          <TransactionSVG />
          <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
            {" "}
            Transactions
          </p>
        </button>
      </Link>
      <Link href="/">
        <button
          data-aos="zoom-out"
          data-aos-delay="400"
          className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg "
        >
          <ProfileSVG />
          <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
            {" "}
            Profile
          </p>
        </button>
      </Link>
      <Link href="/">
        <button
          data-aos="zoom-out"
          data-aos-delay="500"
          className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg "
        >
          <SettingsSVG />
          <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
            {" "}
            Settings
          </p>
        </button>
      </Link>
      <div className="w-full h-[1.5px] bg-[#e8eaecc7] dark:bg-[#ffffff0a] my-8"></div>
      <Link href="/">
        <button
          data-aos="zoom-out"
          data-aos-delay="600"
          className="group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg "
        >
          <HelpSVG />
          <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
            {" "}
            Help
          </p>
        </button>
      </Link>
      <button
        data-aos="zoom-out"
        data-aos-delay="700"
        className="mt-4 group flex items-center w-full py-2.5 px-6 space-x-3 hover:bg-[#D5E6FB] dark:hover:bg-[#062141] rounded-lg "
      >
        <LogoutSVG />
        <p className="group-hover:text-[#0060FF] text-black dark:text-white text-lg font-medium">
          {" "}
          Logout
        </p>
      </button>
    </div>
  );
};

export default Sidebar;
