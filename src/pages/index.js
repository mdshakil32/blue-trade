import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import Markets from "@/components/Markets";
import Balance from "@/components/Balance";
import Convert from "@/components/Convert";
import History from "@/components/History";

const inter = Inter({ subsets: ["latin"] });

const Test = dynamic(() => import("../components/Test"), {
  ssr: false,
});
const PieChart = dynamic(() => import("../components/Charts/PieChart"), {
  ssr: false,
});

const CandleChart = dynamic(() => import("../components/Charts/CandleChart"), {
  ssr: false,
});

import { useState } from "react";
import DarkModeButton from "@/components/DarkModeButton";
import Topbar from "@/components/Navigation/Topbar";

const Home = () => {
  return (
    <div className="">
      {/* ===== top section ===== */}

      <Balance />
      {/* ===== bottom section ===== */}

      <div className="mt-5 grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <CandleChart />
        </div>
        <div className="col-span-5">
          <Markets />
        </div>
      </div>

      <div className="grid grid-cols-12 items-center gap-6 mt-6">
        <div data-aos="zoom-in" data-aos-delay="200" className="col-span-3">
          <PieChart />
        </div>
        <div data-aos="zoom-in" data-aos-delay="300" className="col-span-3">
          <Convert />
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className="col-span-6">
          <History />
        </div>
      </div>
    </div>
  );
};
export default Home;

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
