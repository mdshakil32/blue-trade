import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

import { useRouter } from "next/router";
import PieChartSkl from "./PieChartSkl";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Test2 = () => {
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
    <div className="pt-20">
      {
        <div>
          <PieChartSkl />

          <SkeletonTheme
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
          </SkeletonTheme>

          <ReactECharts
            style={{ height: "270px", width: "100%" }}
            className=""
            option={pieOption}
            onEvents={{
              click: handleVehicleStatusSelect,
            }}
          />
          <div className="flex items-center flex-wrap space-x-4 justify-center">
            <div className="flex items-center gap-[10px]">
              <div className="h-[21px] w-[21px] bg-[#2F80ED] rounded-[6px]"></div>
              <p className="text-[#8D96A1]">BTH</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="h-[21px] w-[21px] bg-[#B1D3FF] rounded-[6px]"></div>
              <p className="text-[#8D96A1]">ETH</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="h-[21px] w-[21px] bg-[#00C4DF] rounded-[6px]"></div>
              <p className="text-[#8D96A1]">ADA</p>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="h-[21px] w-[21px] bg-[#155AB6] rounded-[6px]"></div>
              <p className="text-[#8D96A1]">Others</p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Test2;
