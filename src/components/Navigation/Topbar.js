import React, { useState } from "react";
import SearchSVG from "../SVG/SearchSVG";
import NotificationSVG from "../SVG/NotificationSVG";
import ThreeDotSVG from "../SVG/ThreeDotSVG";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useTheme } from "next-themes";
import DarkModeButton from "../DarkModeButton";
import Link from "next/link";
import NotificationDarkSVG from "../SVG/NotificationDarkSVG";

const Topbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [isClosed, setIsClosed] = useState(false);
  const closeDropdown = () => {
    setIsClosed(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  return (
    <div className="bg-white dark:bg-[#1C1C25]  py-6 px-10">
      <div className="grid grid-cols-2">
        {/* ====== search section ==== */}
        <div data-aos="fade-right" data-aos-delay="300">
          <div className="w-full max-w-[626px] relative  ">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-10 py-4 rounded-full border-[1.5px] border-[#c4cacd66] dark:border-[#c4cacd14] placeholder:text-[15px] outline-none bg-white dark:bg-[#1C1C25]"
            />

            <div className="absolute top-5 right-5">
              <SearchSVG />
            </div>
          </div>
        </div>

        {/* ====== user section ==== */}
        <div
          data-aos="fade-left"
          data-aos-delay="700"
          className="flex items-center justify-end space-x-6 "
        >
          <div className="dark:hidden block">
            <NotificationSVG />
          </div>
          <div className="dark:block hidden">
            <NotificationDarkSVG />
          </div>
          <div className="relative" ref={ref}>
            <div
              onClick={() => setIsClosed(!isClosed)}
              className="cursor-pointer select-none flex items-center px-4 py-1.5 bg-[#F2F8FF] dark:bg-[#131313] rounded-xl "
            >
              <div>
                <img src="/user.svg" alt="" className="w-[45px] h-[45px]" />
              </div>
              <div className="pl-2 pr-4">
                <h2 className="text-sm13 text-[#1F1F1F] dark:text-[#E0E0E0] font-semibold">
                  Andy Warhol
                </h2>
                <p className="text-xs text-[#5E6E78] font-medium">
                  andywarhol@mail.com
                </p>
              </div>
              <div>
                <button className="pl-2 py-1">
                  <ThreeDotSVG />
                </button>
              </div>
            </div>

            <div
              className={`${
                isClosed ? "h-fit " : "h-0"
              } absolute top-16 left-0 w-full dark:bg-[#131313] bg-[#F2F8FF]  rounded-xl overflow-hidden shadow-2xl z-[100]`}
            >
              <div className="p-5">
                <div>
                  <Link href="/">
                    <button className="mb-3 hover:bg-white dark:hover:bg-[#1C1C25] w-full p-2 text-left rounded-md">
                      View Profile
                    </button>
                  </Link>
                </div>
                <DarkModeButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
