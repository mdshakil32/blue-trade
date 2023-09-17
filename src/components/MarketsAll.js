import React, { useState } from "react";
import GreenArrow from "./SVG/GreenArrow";
import RedArrow from "./SVG/RedArrow";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import RightArrowSVG from "./SVG/RightArrowSVG";
import { allMarketData } from "../../utils/dummyData";
const MarketsAll = () => {
  const marketList = ["All", "Metaverse", "Gaming", "Defi", "NFT"];

  const [selectedMarket, setSelectedMarket] = useState("All");

  // ===== custom pagination =====

  const [marketData, setMarketData] = useState(allMarketData.slice(0, 10));
  const [currentPage, setCurrentPage] = useState(1);
  const offset = 10;
  const totalPages = Math.ceil(allMarketData.length / offset);

  const visiblePages = 3;

  // Calculate range of visible page numbers
  const rangeStart = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  const rangeEnd = Math.min(rangeStart + visiblePages - 1, totalPages);

  // Generate page numbers to display
  const pages = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    pages.push(i);
  }

  const handleMarketType = (name) => {
    setSelectedMarket(name);

    const shuffledData = [...marketData];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setMarketData(shuffledData);
    // handlePageClick(1);
  };

  // paginate button clicks
  const handlePageClick = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * offset;
    const endIndex = startIndex + offset;
    setMarketData(allMarketData.slice(startIndex, endIndex));
  };

  const router = useRouter();

  return (
    <div>
      <div className="bg-white dark:bg-[#1C1C25]  rounded-xl p-5 min-h-[300px] overflow-hidden">
        <div className="sm:flex items-center sm:space-x-4">
          <h1 className=" text-xl font-semibold">Markets</h1>

          <div className="flex items-center flex-wrap">
            {marketList.map((name, index) => (
              <button
                key={index}
                onClick={() => handleMarketType(name)}
                className={` ${
                  selectedMarket === name
                    ? "bg-[#F2F8FF]  dark:bg-[#131313] text-[#0060FF] "
                    : " bg-[#F8F8F9] dark:bg-[#131313]"
                } mr-1 my-1 text-xs font-semibold  px-2.5 py-1.5 rounded-lg  hover:bg-[#F2F8FF]  hover:text-[#0060FF] duration-200 select-none`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {marketData.map((item, index) => (
          <div
            key={index}
            className={`${
              index == marketData.length - 1
                ? ""
                : "border-b dark:border-[#ffffff0a]"
            } grid grid-cols-12 items-center py-4 gap-3`}
          >
            <div className="col-span-3">
              <p className="text-xs font-semibold">{item.name}</p>
            </div>
            <div className="col-span-3">
              <p className="text-xs font-semibold text-[#5E6E78]">
                {item.type}
              </p>
            </div>

            <div className="col-span-3 ">
              <p className={` text-xs font-medium text-right`}>{item.amount}</p>
            </div>

            <div className="col-span-3 flex justify-end">
              <p
                className={`${
                  item.isPositive
                    ? "bg-[#C7E4DB] dark:bg-[#26ab5f33] text-[#219653]"
                    : "bg-[#eb575733] text-[#EB5757]"
                } text-[10px] font-semibold w-[58px] py-1.5 rounded-full text-center`}
              >
                {item.percentage}
              </p>
            </div>
          </div>
        ))}

        {/* ========= pagination ==========  */}
        <div className="pagination flex items-center justify-center md:justify-between">
          <div className="flex items-center gap-2 my-3">
            <ul className="pagination flex items-center gap-2">
              <li
                className="rounded-lg w-10 h-10 flex items-center justify-center hover:bg-[#D5E6FB] dark:hover:bg-[#062141]  cursor-pointer"
                onClick={() =>
                  currentPage > 1 && handlePageClick(currentPage - 1)
                }
              >
                <div className="rotate-180">
                  <RightArrowSVG />
                </div>
              </li>
              {/*  before dots  */}
              {rangeStart >= 2 && (
                <>
                  <li
                    className="select-none rounded-lg w-10 h-10 flex items-center justify-center disabled cursor-pointer hover:bg-[#D5E6FB] dark:hover:bg-[#062141] "
                    onClick={() => handlePageClick(1)}
                  >
                    1
                  </li>
                  {currentPage > 4 && (
                    <li className="rounded-lg w-10 h-10 flex items-center justify-center select-none disabled">
                      ...
                    </li>
                  )}
                </>
              )}
              {/* Generate page buttons */}
              {pages.map((page) => (
                <li
                  key={page}
                  className={`select-none rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-[#D5E6FB] dark:hover:bg-[#062141]  ${
                    page === currentPage
                      ? " bg-[#D5E6FB] dark:bg-[#062141] text-[#0060FF] "
                      : "bg-transparent"
                  }`}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </li>
              ))}
              {/* after dots  */}
              {rangeEnd < totalPages && (
                <>
                  {totalPages - currentPage > 3 && (
                    <li className="rounded-lg w-10 h-10 flex items-center justify-center  disabled select-none">
                      ...
                    </li>
                  )}
                  <li
                    className="select-none rounded-lg w-10 h-10 flex items-center justify-center  cursor-pointer hover:bg-[#D5E6FB] dark:hover:bg-[#062141]"
                    onClick={() => handlePageClick(totalPages)}
                  >
                    {totalPages}
                  </li>
                </>
              )}

              <li
                className="select-none cursor-pointer rounded-lg w-10 h-10 flex items-center justify-center hover:bg-[#D5E6FB] dark:hover:bg-[#062141]"
                onClick={() =>
                  currentPage < totalPages && handlePageClick(currentPage + 1)
                }
              >
                <RightArrowSVG />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketsAll;
