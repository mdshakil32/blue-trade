import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Markets from "@/components/Markets";

const market = () => {
  return (
    <div className="overflow-hidden md:container">
      <div data-aos="zoom-in" data-aos-delay="100">
        <Markets />
      </div>
    </div>
  );
};
export default market;

market.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
