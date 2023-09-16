import React, { useEffect, useState } from "react";
import ThreeDotButton from "./SVG/ThreeDotButton";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Convert = () => {
  const [selectedCurrency1, setSelectedCurrency1] = useState("USDT");
  const [Currency1, setCurrency1] = useState(100);

  const [selectedCurrency2, setSelectedCurrency2] = useState("BTC");
  const [Currency2, setCurrency2] = useState(0.004);

  const handleCurrency1Change = (newValue) => {};

  return (
    <div>
      <div className="bg-white dark:bg-[#1C1C25]  rounded-xl p-5 min-h-[300px]">
        <div className="flex items-start justify-between mb-3">
          <h1 className=" text-xl font-semibold">Convert</h1>
          <button className="hover:shadow-lg duration-200 rounded-[6px] w-fit ">
            <ThreeDotButton />
          </button>
        </div>

        {/* ====== input field 1 ==== */}
        <div className="bg-[#F9F9FA] dark:bg-[#121212] flex items-center p-2 rounded-lg">
          <input
            value={Currency1}
            onChange={(e) => setCurrency1(e.target.value)}
            type="number"
            placeholder="Enter amount"
            className="text-xs text-[#626D7D] font-semibold outline-none bg-transparent w-full pl-2 py-1 pr-1"
          />

          <select
            onChange={(e) => setSelectedCurrency1(e.target.value)}
            value={selectedCurrency1}
            className=" bg-[#c7e4db] dark:bg-[#23493D] text-[#219653] text-[10px] font-semibold py-2 pl-2 rounded-md w-[70px]"
          >
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
            <option value="BUSD">BUSD</option>
            <option value="TUSD">TUSD</option>
            <option value="OUSD">OUSD</option>
          </select>
        </div>

        {/* ====== input field 2  ==== */}
        <div className="bg-[#F9F9FA] dark:bg-[#121212] flex items-center p-2 rounded-lg mt-5">
          <input
            value={Currency2}
            onChange={(e) => setCurrency2(e.target.value)}
            type="number"
            placeholder="Enter amount"
            className="text-xs text-[#626D7D] font-semibold outline-none bg-transparent w-full pl-2 py-1 pr-1"
          />

          <select
            onChange={(e) => setSelectedCurrency2(e.target.value)}
            value={selectedCurrency2}
            className=" bg-[#FCF4DB] dark:bg-[#3C2E05] text-[#FF7C04] text-[10px] font-semibold py-2 pl-2 rounded-md w-[80px]"
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="SOL">SOL</option>
          </select>
        </div>

        <div className="mt-5  max-w-[300px] mx-auto">
          <div className="animated-btn-2">
            <p>
              Convert Now
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </p>
          </div>
        </div>

        <p className=" text-[#626D7D] text-[8px] mt-4">
          The ultimate price and output is determined by the amount of tokens in
          the pool at the time of your swap.
        </p>
      </div>
    </div>
  );
};

export default Convert;
