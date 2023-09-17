import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Markets from "@/components/Markets";
import History from "@/components/History";

const transactions = () => {
  return (
    <div className="overflow-hidden md:container">
      <div data-aos="zoom-in" data-aos-delay="100">
        <History />
      </div>
    </div>
  );
};
export default transactions;

transactions.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
