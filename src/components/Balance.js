import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import dynamic from "next/dynamic";

import BalanceSVG from "@/components/SVG/BalanceSVG";
import EyeSVG from "@/components/SVG/EyeSVG";
import BitcoinSVG from "@/components/SVG/BitcoinSVG";
import EthereumSVG from "@/components/SVG/EthereumSVG";
import SolanaSVG from "@/components/SVG/SolanaSVG";
import DarkModeButton from "./DarkModeButton";

const inter = Inter({ subsets: ["latin"] });

const BitcoinLineChart = dynamic(() => import("./Charts/BitcoinLineChart"), {
  ssr: false,
});
const EthereumLineChart = dynamic(() => import("./Charts/EthereumLineChart"), {
  ssr: false,
});
const SolanaLineChart = dynamic(() => import("./Charts/SolanaLineChart"), {
  ssr: false,
});

const Balance = () => {
  return (
    <div className="z-[10]">
      <div className="grid 2xl:grid-cols-4 grid-cols-2 gap-6">
        {/* ====== column 1 ===== */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-white dark:bg-[#1C1C25]  rounded-xl p-5"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BalanceSVG />
              <p className=" font-semibold">Estimated Balance</p>
            </div>
            <EyeSVG />
          </div>

          <div className="my-5">
            <h1 className="text-3xl font-semibold">$123,987</h1>
          </div>

          <div className="grid grid-cols-3 items-center">
            <div>
              <p className=" text-[#626D7D] text-sm13 font-medium">
                Monthly Profit
              </p>
            </div>
            <div>
              <p className=" text-[#219653] text-sm13 font-semibold text-center">
                +$2560.78
              </p>
            </div>

            <div className="flex justify-end">
              <p className="w-fit text-[#219653] text-[11px] font-semibold bg-[#21965333] rounded-full text-center py-1 px-2">
                +14.67%
              </p>
            </div>
          </div>
        </div>

        {/* ====== column 2===== */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="bg-white dark:bg-[#1C1C25]  rounded-xl p-5 "
        >
          <div className="relative overflow-hidden">
            <div className="flex items-center space-x-2">
              <div className="">
                <BitcoinSVG />
              </div>
              <div>
                <p className="  font-semibold">BTCUSDT</p>
                <p className=" text-[#626D7D] font-medium text-sm13">Bitcoin</p>
              </div>
            </div>

            <div className=" grid grid-cols-2 items-center relative my-5">
              <h1 className="text-xl font-semibold col-span-1">$123,987</h1>
            </div>

            <div className="grid grid-cols-3 items-center">
              <div>
                <p className=" text-[#626D7D] text-sm13 font-medium">
                  PNL Daily
                </p>
              </div>
              <div>
                <p className=" text-[#EB5757] text-sm13 font-semibold text-center">
                  -$16.78
                </p>
              </div>

              <div className="flex justify-end">
                <p className="w-fit text-[#219653] text-[11px] font-semibold bg-[#21965333] rounded-full text-center py-1 px-2">
                  +14.67%
                </p>
              </div>
            </div>

            <div className="w-[150px] absolute 2xl:top-7 top-4 right-0 ">
              <BitcoinLineChart />
            </div>
          </div>
        </div>

        {/* ====== column 3 ===== */}
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="bg-white dark:bg-[#1C1C25]  rounded-xl p-5 "
        >
          <div className="relative overflow-hidden">
            <div className="flex items-center space-x-2">
              <div className="">
                <EthereumSVG />
              </div>
              <div>
                <p className="  font-semibold">ETHUSDT</p>
                <p className=" text-[#626D7D] font-medium text-sm13">
                  Ethereum
                </p>
              </div>
            </div>

            <div className=" grid grid-cols-2 items-center relative my-5">
              <h1 className="text-xl font-semibold col-span-1">$123,987</h1>
            </div>

            <div className="grid grid-cols-3 items-center">
              <div>
                <p className=" text-[#626D7D] text-sm13 font-medium">
                  PNL Daily
                </p>
              </div>
              <div>
                <p className=" text-[#219653] text-sm13 font-semibold text-center">
                  +$189.91
                </p>
              </div>

              <div className="flex justify-end">
                <p className="w-fit text-[#219653] text-[11px] font-semibold bg-[#21965333] rounded-full text-center py-1 px-2">
                  +24.68%
                </p>
              </div>
            </div>

            <div className="w-[150px] absolute 2xl:top-7 top-4 right-0 ">
              <EthereumLineChart />
            </div>
          </div>
        </div>

        {/* ====== column 4 ===== */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="bg-white dark:bg-[#1C1C25]  rounded-xl p-5 z-[10]"
        >
          <div className="relative overflow-hidden">
            <div className="flex items-center space-x-2">
              <div className="">
                <SolanaSVG />
              </div>
              <div>
                <p className="  font-semibold">SOLUSDT</p>
                <p className=" text-[#626D7D] font-medium text-sm13">Solana</p>
              </div>
            </div>

            <div className=" grid grid-cols-2 items-center relative my-5">
              <h1 className="text-xl	 font-semibold col-span-1">$123,987</h1>
            </div>

            <div className="grid grid-cols-3 items-center">
              <div>
                <p className=" text-[#626D7D] text-sm13 font-medium">
                  Monthly Profit
                </p>
              </div>
              <div>
                <p className=" text-[#219653] text-sm13 font-semibold text-center">
                  +$2560.78
                </p>
              </div>

              <div className="flex justify-end">
                <p className="w-fit text-[#219653] text-[11px] font-semibold bg-[#21965333] rounded-full text-center py-1 px-2">
                  +14.67%
                </p>
              </div>
            </div>

            <div className="w-[150px] absolute 2xl:top-7 top-4 right-0 ">
              <SolanaLineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
