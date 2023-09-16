import React from "react";
import GreenArrow from "./SVG/GreenArrow";
import RedArrow from "./SVG/RedArrow";
import ThreeDotButton from "./SVG/ThreeDotButton";

const History = () => {
  const historyData = [
    {
      type: "Deposit",
      time: "11.23AM",
      amount: "+$23,224",
      status: "pending",
      isUp: true,
    },
    {
      type: "SANDUSDT",
      time: "11.23AM",
      amount: "-$724",
      status: "done",
      isUp: false,
    },
    {
      type: "DOGEUSDT",
      time: "11.23AM",
      amount: "+$3524",
      status: "done",
      isUp: true,
    },
    {
      type: "FTMUSDT",
      time: "11.23AM",
      amount: "-$524",
      status: "done",
      isUp: false,
    },
  ];
  return (
    <div>
      <div className="bg-white dark:bg-[#1C1C25]  rounded-xl px-5 pt-5 min-h-[300px]">
        <div className="flex items-start justify-between">
          <h1 className=" text-xl font-semibold">History</h1>
          <button className="hover:dropShadow hover:bg-[#6b64fc] hover:text-white hover:border-[#6b64fc] duration-200 rounded-[6px] w-fit text-[10px] font-semibold px-2.5 py-1.5 border border-[#999999] text-[#999999] ">
            View All
          </button>
        </div>

        {historyData.map((item, index) => (
          <div
            key={index}
            className={`${
              index == historyData.length - 1 ? "" : "border-b"
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
      </div>
    </div>
  );
};

export default History;
