import React, { useState } from "react";
import SearchSVG from "../SVG/SearchSVG";
import NotificationSVG from "../SVG/NotificationSVG";
import ThreeDotSVG from "../SVG/ThreeDotSVG";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useTheme } from "next-themes";

import Link from "next/link";
import NotificationDarkSVG from "../SVG/NotificationDarkSVG";
import DarkModeToggle from "react-dark-mode-toggle";
import ToggleButton from "../ToggleButton";
const Topbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [isClosed, setIsClosed] = useState(false);

  const closeDropdown = () => {
    setIsClosed(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <div className="bg-white dark:bg-[#1C1C25]  md:py-6 py-4 md:px-10 px-2">
      <div className="grid grid-cols-12">
        {/* ====== search section ==== */}
        <div className="md:col-span-6 col-span-9 pr-2">
          <div className="w-full max-w-[626px] relative  ">
            <input
              type="text"
              placeholder="Search"
              className="w-full sm:pl-10 sm:pr-10 pl-3 pr-8 sm:py-4 py-3 rounded-full border-[1.5px] border-[#c4cacd66] dark:border-[#c4cacd14] placeholder:text-[15px] outline-none bg-white dark:bg-[#1C1C25]"
            />

            <div className="absolute sm:top-5 top-4 sm:right-5 right-3 bg-white dark:bg-[#1C1C25]">
              <SearchSVG />
            </div>
          </div>
        </div>

        {/* ====== user section ==== */}
        <div className="md:col-span-6 col-span-3  flex items-center justify-end md:space-x-6 space-x-2 ">
          <div className="dark:hidden block">
            <NotificationSVG />
          </div>

          <div className="dark:block hidden">
            <NotificationDarkSVG />
          </div>

          <div className="relative" ref={ref}>
            <div
              onClick={() => setIsClosed(!isClosed)}
              className="cursor-pointer select-none flex items-center md:px-4 md:py-1.5 bg-[#F2F8FF] dark:bg-[#131313] rounded-xl "
            >
              {/* uer image  */}
              <div>
                <img
                  src="/user.svg"
                  alt=""
                  className="w-[45px] h-[45px] rounded-full"
                />
              </div>
              {/* user name  */}
              <div className="md:block hidden pl-2 pr-4">
                <h2 className="text-sm13 text-[#1F1F1F] dark:text-[#E0E0E0] font-semibold">
                  Andy Warhol
                </h2>
                <p className="text-xs text-[#5E6E78] font-medium">
                  andywarhol@mail.com
                </p>
              </div>
              <div className="md:block hidden">
                <button className="pl-2 py-1">
                  <ThreeDotSVG />
                </button>
              </div>
            </div>

            <div
              className={`${
                isClosed ? "h-fit " : "h-0"
              } absolute top-16 right-0 w-[200px] dark:bg-[#131313] bg-[#F2F8FF]  rounded-xl overflow-hidden dropShadow  z-[100]`}
            >
              <div className="p-5">
                <div className="mb-3  ">
                  <Link href="/profile">
                    <p className="hover:bg-white dark:hover:bg-[#1C1C25] w-full p-2 text-center rounded-md">
                      View Profile
                    </p>
                  </Link>
                </div>

                <div className="flex justify-start mt-4 relative select-none">
                  <ToggleButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
