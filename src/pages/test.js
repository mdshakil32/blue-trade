import Image from "next/image";
import { Inter } from "next/font/google";
import LineChart from "@/components/LineChart";
import CandleChart from "@/components/CandleChart";
// import Test from "@/components/Test";
import dynamic from "next/dynamic";
import DarkModeButton from "@/components/DarkModeButton";

const inter = Inter({ subsets: ["latin"] });

const Test = dynamic(() => import("../components/Test"), {
  ssr: false,
});

const Test2 = dynamic(() => import("../components/Test2"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container ">
      <DarkModeButton />
      <LineChart />
      <CandleChart />
      <Test />
      <Test2 />
    </div>
  );
}
