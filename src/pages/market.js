import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Markets from "@/components/Markets";

const market = () => {
  return (
    <div className="">
      <div className=" grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-10">
          <Markets />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};
export default market;

market.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
