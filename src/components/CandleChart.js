"use client";

import React from "react";
import { Chart } from "react-google-charts";

const CandleChart = () => {
  const data = [
    ["day", "a", "b", "c", "d"],
    ["Sat", 15, 66, 22, 68],
    ["Mon", 20, 28, 38, 45],
    ["Tue", 31, 38, 55, 66],
    ["Wed", 50, 55, 77, 80],
    ["Thu", 50, 77, 66, 77],
    ["Fri", 15, 66, 22, 68],
    ["Fri", 15, 66, 22, 68],
    ["", 15, 66, 22, 68],
    ["", 15, 66, 22, 68],
    ["Fri", 15, 66, 22, 68],
  ];

  const options = {
    // chartArea: {
    //   left: 0,
    //   top: 0,
    //   width: "100%",
    //   height: "100%",
    // },
    // hAxis: {
    //   textPosition: "none",
    //   gridlines: { count: 0, color: "transparent" },
    //   baselineColor: "transparent",
    //   minValue: 0,
    // },
    // vAxis: {
    //   textPosition: "none",
    //   gridlines: { count: 0, color: "transparent" },
    //   baselineColor: "transparent",
    //   viewWindow: {
    //     min: 0,
    //   },
    // },
    // colors: ["red"],
    // curveType: "function",
    colors: ["#3380FF"],
    legend: "none",
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#C0D9FD" }, // red
      risingColor: { strokeWidth: 0, fill: "#3380FF" }, // green
    },
  };

  return (
    <div>
      <div className="bg-red-300  w-[500px] p-2 m-10">
        <Chart
          chartType="CandlestickChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default CandleChart;
