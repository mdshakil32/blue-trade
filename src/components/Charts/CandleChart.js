"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { useTheme } from "next-themes";
import DownArrowSVg from "../SVG/DownArrowSVg";

const CandleChart = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const state = {
    options: {
      tooltip: {
        followCursor: false,
        theme: theme === "dark" ? "dark" : "light",
        style: {
          background: theme === "dark" ? "#333" : "white",
        },
        onDatasetHover: {
          highlightDataSeries: false,
        },
      },

      plotOptions: {
        candlestick: {
          colors: {
            upward: "#C0D9FD",
            downward: "#3380FF",
          },
        },
      },
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        // text: "CandleStick Chart",
        // align: "left",
      },
      xaxis: {
        labels: {
          style: {
            colors: "#626D7D", // Change the x-axis label color to red
          },
        },
        tooltip: {
          enabled: false,
        },
        type: "datetime",
        crosshairs: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#626D7D", // Change the x-axis label color to red
          },

          formatter: function (value) {
            return `$${value.toFixed(0)}`; // Add a dollar sign and format the value with two decimal places
          },
        },
        tooltip: {
          enabled: false,
        },
        crosshairs: {
          show: false,
        },
      },
    },
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538794800000),
            y: [660, 6614.4, 6602.26, 6608.02],
          },
          {
            x: new Date(1538796600000),
            y: [6608, 6610.68, 6601.99, 6608.91],
          },
          {
            x: new Date(1538798400000),
            y: [6608, 6618.99, 6608.01, 6612],
          },
          {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612],
          },
          {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95],
          },
          {
            x: new Date(1538803800000),
            y: [6623, 6623.91, 6615, 6615.67],
          },
          {
            x: new Date(1538805600000),
            y: [6618, 6618.74, 6610, 6610.4],
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9],
          },
          {
            x: new Date(1538809200000),
            y: [661, 6626.2, 6613.33, 6623.45],
          },
          {
            x: new Date(1538811000000),
            y: [6623, 6627, 6618.38, 6620.35],
          },
          {
            x: new Date(1538812800000),
            y: [6619, 6620.35, 6610.05, 6615.53],
          },
          {
            x: new Date(1538814600000),
            y: [6615, 6617.93, 6610, 6615.19],
          },
          {
            x: new Date(1538816400000),
            y: [6615, 6621.6, 6608.2, 6620],
          },
          {
            x: new Date(1538818200000),
            y: [6619, 6625.17, 6614.15, 6620],
          },
          {
            x: new Date(1538820000000),
            y: [6620, 6634.15, 6617.24, 6624.61],
          },
          {
            x: new Date(1538821800000),
            y: [6625, 6626, 6611.66, 6617.58],
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86],
          },
          {
            x: new Date(1538825400000),
            y: [6598, 6598.88, 6570, 6587.16],
          },
          {
            x: new Date(1538827200000),
            y: [6588, 6600, 6580, 6593.4],
          },
          {
            x: new Date(1538829000000),
            y: [6593, 6598.89, 6585, 6587.81],
          },
          {
            x: new Date(1538830800000),
            y: [6587, 6592.73, 6567.14, 6578],
          },
          {
            x: new Date(1538832600000),
            y: [6578, 6581.72, 6567.39, 6579],
          },
          {
            x: new Date(1538834400000),
            y: [6579, 6580.92, 6566.77, 6575.96],
          },
          {
            x: new Date(1538836200000),
            y: [6575, 6589, 6571.77, 6588.92],
          },
          {
            x: new Date(1538838000000),
            y: [6588, 6594, 6577.55, 6589.22],
          },
          {
            x: new Date(1538839800000),
            y: [6589, 6598.89, 6589.1, 6596.08],
          },
          {
            x: new Date(1538841600000),
            y: [6597, 6600, 6588.39, 6596.25],
          },
          {
            x: new Date(1538843400000),
            y: [6598, 6600, 6588.73, 6595.97],
          },
          {
            x: new Date(1538845200000),
            y: [6595, 6602.01, 6588.17, 6602],
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95],
          },
          {
            x: new Date(1538848800000),
            y: [6600, 6601.21, 6590.39, 6591.02],
          },
          {
            x: new Date(1538850600000),
            y: [6591, 6603.08, 6591, 6591],
          },
          {
            x: new Date(1538852400000),
            y: [6591, 6601.32, 6585, 6592],
          },
          {
            x: new Date(1538854200000),
            y: [6593, 6596.01, 6590, 6593.34],
          },
          {
            x: new Date(1538856000000),
            y: [6593, 6604.76, 6582.63, 6593.86],
          },
          {
            x: new Date(1538857800000),
            y: [6593, 6604.28, 6586.57, 6600.01],
          },
          {
            x: new Date(1538859600000),
            y: [6601, 6603.21, 6592.78, 6596.25],
          },
          {
            x: new Date(1538861400000),
            y: [6596, 6604.2, 6590, 6602.99],
          },
          {
            x: new Date(1538863200000),
            y: [6602, 6606, 6584.99, 6587.81],
          },
          {
            x: new Date(1538865000000),
            y: [6587, 6595, 6583.27, 6591.96],
          },
          {
            x: new Date(1538866800000),
            y: [6591, 6596.07, 6585, 6588.39],
          },
          {
            x: new Date(1538868600000),
            y: [6587, 6598.21, 6587.6, 6594.27],
          },
          {
            x: new Date(1538870400000),
            y: [6596, 6601, 6590, 6596.55],
          },
          {
            x: new Date(1538872200000),
            y: [6598, 6605, 6596.61, 6600.02],
          },
          {
            x: new Date(1538874000000),
            y: [6600, 6605, 6589.14, 6593.01],
          },
          {
            x: new Date(1538875800000),
            y: [6593, 6605, 6592, 6603.06],
          },
          {
            x: new Date(1538877600000),
            y: [6603, 6604.5, 6599.09, 6603.89],
          },
          {
            x: new Date(1538879400000),
            y: [6604, 6604.44, 6600, 6603.5],
          },
          {
            x: new Date(1538881200000),
            y: [6603, 6603.99, 6597.5, 6603.86],
          },
          {
            x: new Date(1538883000000),
            y: [6603, 6605, 6600, 6604.07],
          },
          {
            x: new Date(1538884800000),
            y: [6604, 6606, 6604.07, 6606],
          },
        ],
      },
    ],
  };

  const marketList = ["1H", "3H", "5H", "1D", "1W", "1M"];
  const [selectedMarket, setSelectedMarket] = useState("1H");
  const handleMarketType = (name) => {
    setSelectedMarket(name);
  };
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="500"
      className="bg-white dark:bg-[#1C1C25]  rounded-xl p-5 min-h-[465px] overflow-hidden"
    >
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <div className="max-w-[330px] px-4 py-2 dark:bg-[#131313] bg-[#F2F8FF] rounded-xl  grid grid-cols-2">
            <div>
              <h1 className=" text-xl font-semibold dropShadow">BTCUSDT</h1>
              <p className=" text-[13px] text-[#626D7D] font-medium">Bitcoin</p>
            </div>

            <div className="flex items-center justify-end space-x-2">
              <div>
                <h1 className=" text-lg font-semibold">$23,780</h1>
                <div className="flex  justify-center">
                  <p className="w-fit text-[#219653] text-[11px] font-semibold bg-[#21965333] rounded-full text-center py-1 px-2">
                    +14.67%
                  </p>
                </div>
              </div>
              <div>
                <DownArrowSVg />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center md:justify-end flex-wrap my-4 md:my-0">
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
      </div>

      <Chart
        options={state.options}
        series={state.series}
        type="candlestick"
        width="100%"
        height="320"
      />
    </div>
  );
};

export default CandleChart;
