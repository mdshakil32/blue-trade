import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

import { useRouter } from "next/router";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ThreeDotSVG from "../SVG/ThreeDotSVG";
import ThreeDotButton from "../SVG/ThreeDotButton";

const PieChart = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const totalVehiclesData = [
    { name: "BTH", value: 172 },
    { name: "ETH", value: 31 },
    { name: "ADA", value: 10 },
    { name: "Others", value: 10 },
  ];

  const pieOption = {
    tooltip: {
      trigger: "item",
    },
    color: ["#2F80ED", "#B1D3FF", "#00C4DF", "#00A3FF", "#155AB6"],
    // legend: {
    //   bottom: "0",
    //   left: "center",
    //   itemWidth: 21,
    //   itemHeight: 21,
    //   textStyle: { color: "#8D96A1" },
    //   padding: 0,
    // },

    series: [
      {
        type: "pie",
        radius: ["45%", "75%"],
        avoidLabelOverlap: false,

        label: {
          show: false,
          position: "center",
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: 40,
        //     fontWeight: "bold",
        //   },
        // },
        labelLine: {
          show: false,
        },
        data: totalVehiclesData,
      },
    ],
  };
  const handleVehicleStatusSelect = (e) => {
    // router.push(`/dashboard?status=${status}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="bg-white dark:bg-[#1C1C25] rounded-xl p-5 min-h-[300px]">
      <div>
        {/* <SkeletonTheme
            baseColor="#C0D9FD"
            highlightColor="#f0f8ff"
            className=""
          >
            <div className="w-[200px] h-[200px] ">
              <Skeleton
                count={1}
                style={{ zIndex: 0 }}
                className="w-[200px] h-[200px] "
                borderRadius={"10px"}
              ></Skeleton>
            </div>
          </SkeletonTheme> */}

        <div className="flex items-start justify-between">
          <h1 className=" text-xl font-semibold">Assets</h1>
          <button className="hover:shadow-lg duration-200 rounded-[6px] w-fit ">
            <ThreeDotButton />
          </button>
        </div>

        <div className="">
          <ReactECharts
            style={{ height: "150px", width: "100%" }}
            className=""
            option={pieOption}
            onEvents={{
              click: handleVehicleStatusSelect,
            }}
          />
        </div>
        <div className="flex items-center flex-wrap space-x-3  justify-center">
          <div className="flex items-center space-x-1 bg-[#0060ff1a] p-1.5 rounded w-[64px] my-1">
            <div className="h-[12px] w-[12px] bg-[#2F80ED] rounded-[2px]"></div>
            <p className="text-[#2F80ED] text-[10px] font-semibold">BTH</p>
          </div>

          <div className="flex items-center space-x-1 bg-[#0060ff1a] p-1.5 rounded w-[64px] my-1">
            <div className="h-[12px] w-[12px] bg-[#B1D3FF] rounded-[2px]"></div>
            <p className="text-[#2F80ED] text-[10px] font-semibold">ETH</p>
          </div>
          <div className="flex items-center space-x-1 bg-[#0060ff1a] p-1.5 rounded w-[64px] my-1">
            <div className="h-[12px] w-[12px] bg-[#00C4DF] rounded-[2px]"></div>
            <p className="text-[#2F80ED] text-[10px] font-semibold">ADA</p>
          </div>

          <div className="flex items-center space-x-1 bg-[#0060ff1a] p-1.5 rounded w-[64px] my-1">
            <div className="h-[12px] w-[12px] bg-[#155AB6] rounded-[2px]"></div>
            <p className="text-[#2F80ED] text-[10px] font-semibold">Others</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
