import React, { useState } from "react";
import GreenArrow from "./SVG/GreenArrow";
import RedArrow from "./SVG/RedArrow";
import Link from "next/link";
import { useRouter } from "next/router";

const Markets = () => {
  const [marketData, setMarketData] = useState([
    {
      name: "BTCUSDT",
      type: "Bitcoin",
      amount: "$23,224",
      percentage: "+23.4%",
      isPositive: true,
    },
    {
      name: "AXSUSDT",
      type: "Axie Infinity",
      amount: "$224",
      percentage: "-0.4%",
      isPositive: false,
    },
    {
      name: "ETHUSDT",
      type: "Ethereum",
      amount: "$24",
      percentage: "-3.4%",
      isPositive: false,
    },
    {
      name: "SOLUSDT",
      type: "Solana",
      amount: "$23,224",
      percentage: "+23.4%",
      isPositive: true,
    },
    {
      name: "BNBUSDT",
      type: "Binance",
      amount: "$30,224",
      percentage: "+23.4%",
      isPositive: true,
    },
    {
      name: "ADAUSDT",
      type: "Cardano",
      amount: "$40,224",
      percentage: "-23.4%",
      isPositive: false,
    },
  ]);

  const marketList = ["All", "Metaverse", "Gaming", "Defi", "NFT"];

  const [selectedMarket, setSelectedMarket] = useState("All");

  // Function to shuffle the array randomly
  const shuffleMarketData = () => {
    const shuffledData = [...marketData];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setMarketData(shuffledData);
  };

  const handleMarketType = (name) => {
    setSelectedMarket(name);

    const shuffledData = [...marketData];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setMarketData(shuffledData);
  };

  const router = useRouter();
  console.log(router);

  return (
    <div>
      <div
        data-aos="zoom-out"
        data-aos-delay="600"
        className="bg-white dark:bg-[#1C1C25]  rounded-xl p-5 min-h-[300px] overflow-hidden"
      >
        <div className="flex items-center space-x-4">
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
                } m-1 text-xs font-semibold  px-2.5 py-1.5 rounded-lg  hover:bg-[#F2F8FF]  hover:text-[#0060FF] duration-200 select-none`}
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

        {router.pathname !== "/market" && (
          <div className="flex justify-end">
            <Link href="/market">
              <button className="hover:dropShadow hover:bg-[#6b64fc] hover:text-white hover:border-[#6b64fc] duration-200 rounded-[6px] w-fit text-[10px] font-semibold px-2.5 py-1.5 border border-[#999999] text-[#999999] ">
                View All
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Markets;
