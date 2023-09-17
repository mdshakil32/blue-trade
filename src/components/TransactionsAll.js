import React, { useState } from "react";
import GreenArrow from "./SVG/GreenArrow";
import RedArrow from "./SVG/RedArrow";
import ThreeDotButton from "./SVG/ThreeDotButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { allTransactionsData } from "../../utils/dummyData";
import RightArrowSVG from "./SVG/RightArrowSVG";

const TransactionsAll = () => {
  const [transactionsData, setTransactionsData] = useState(
    allTransactionsData.slice(0, 10)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const offset = 10;
  const totalPages = Math.ceil(allTransactionsData.length / offset);

  const visiblePages = 3;

  // Calculate range of visible page numbers
  const rangeStart = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
  const rangeEnd = Math.min(rangeStart + visiblePages - 1, totalPages);

  // Generate page numbers to display
  const pages = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    pages.push(i);
  }

  // paginate button clicks
  const handlePageClick = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * offset;
    const endIndex = startIndex + offset;
    setTransactionsData(allTransactionsData.slice(startIndex, endIndex));
  };

  const router = useRouter();
  return (
    <div>
      <div className="bg-white dark:bg-[#1C1C25]  rounded-xl px-5 pt-5 min-h-[300px]">
        <div className="flex items-start justify-between">
          <h1 className=" text-xl font-semibold">Transactions</h1>
          {router.pathname !== "/transactions" && (
            <Link href="/transactions">
              <button className="hover:dropShadow hover:bg-[#6b64fc] hover:text-white hover:border-[#6b64fc] duration-200 rounded-[6px] w-fit text-[10px] font-semibold px-2.5 py-1.5 border border-[#999999] text-[#999999] ">
                View All
              </button>
            </Link>
          )}
        </div>

        {transactionsData.map((item, index) => (
          <div
            key={index}
            className={`${
              index == transactionsData.length - 1 ? "" : "border-b"
            } grid grid-cols-12 items-center py-4 gap-3 dark:border-[#ffffff0a]`}
          >
            <div className="col-span-1">
              {item.isUp ? <GreenArrow /> : <RedArrow />}
            </div>
            <div className="col-span-3">
              <p className="text-xs font-semibold ">{item.type}</p>
            </div>
            <div className="col-span-3 ">
              <p
                className={` ${
                  item.isUp ? "text-[#219653]" : " text-[#EB5757]"
                } text-xs font-semibold text-right`}
              >
                {item.amount}
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-xs font-medium text-center">{item.time}</p>
            </div>
            <div className="col-span-2 flex justify-end">
              <p
                className={`${
                  item.status === "done"
                    ? "bg-[#C7E4DB] dark:bg-[#26ab5f33] text-[#219653]"
                    : "bg-[#fcf4db] dark:bg-[#f4d06433] text-[#F2994A]"
                } text-[10px] font-semibold w-[58px] py-1.5   rounded-lg text-center`}
              >
                {item.status}
              </p>
            </div>
          </div>
        ))}

        {/* ======== [agination ========] */}
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

export default TransactionsAll;
