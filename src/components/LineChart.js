"use client";

import React, { useEffect, useRef } from "react";
import { Chart } from "react-google-charts";

const TestChart = () => {
  const chartRef = useRef(null);

  // Function to handle window resize
  const handleResize = () => {
    if (chartRef.current) {
      const parentElement = chartRef.current.parentElement;
      if (parentElement) {
        const parentWidth = parentElement.clientWidth;
        chartRef.current.style.width = parentWidth + "px";
      }
    }
  };

  // Attach resize event listener when the component mounts
  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    ["Bitcoin", "Value"],
    ["Bitcoin: 1", 10],
    ["Bitcoin: 2", 2],
    ["Bitcoin: 3", 8],
    ["Bitcoin: 4", 1],
    ["Bitcoin: 6", 12],
    ["Bitcoin: 8", 13],
    ["Bitcoin: 9", 16],
  ];

  const options = {
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
    },
    hAxis: {
      textPosition: "none",
      gridlines: { count: 0, color: "transparent" },
      baselineColor: "transparent",
      minValue: 0,
    },
    vAxis: {
      textPosition: "none",
      gridlines: { count: 0, color: "transparent" },
      baselineColor: "transparent",
      viewWindow: {
        min: 0,
      },
    },
    colors: ["red"],
    curveType: "function",
    legend: "none",
  };

  return (
    <div>
      <div className="bg-red-300 p-2 w-[150px] h-[150px] overflow-hidden ">
        <Chart
          chartType="LineChart"
          data={data}
          options={options}
          ref={chartRef}
        />
      </div>
    </div>
  );
};

export default TestChart;
