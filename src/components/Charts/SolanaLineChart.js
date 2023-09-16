import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const SolanaLineChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Series 1",
        data: [], // Initially empty data
      },
    ],
    options: {
      chart: {
        id: "line-chart",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 3000,
          },
        },
        toolbar: {
          show: false,
        },
        margin: {
          bottom: 0, // Remove the bottom margin
        },
      },

      stroke: {
        curve: "smooth",
        width: 2,
      },
      grid: {
        show: false, // Remove gridlines
      },
      tooltip: {
        enabled: false, // Remove tooltip
      },
      xaxis: {
        labels: {
          show: false, // Remove xAxis labels
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      crosshairs: {
        show: false, // Remove crosshairs
      },
      colors: ["#F0A0A0"], // Set the line color dynamically
    },
  });

  // Simulated dynamic data update
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random data points
      const newData = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 100)
      );

      setChartData((prevData) => ({
        ...prevData,
        series: [{ data: newData }],
      }));
    }, 3000); // Update every second

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="line-chart" className="">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="150px"
      />
    </div>
  );
};

export default SolanaLineChart;
