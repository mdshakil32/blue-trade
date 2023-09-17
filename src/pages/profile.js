import Layout from "../components/Layout";

import { useState } from "react";

import CameraSVG from "@/components/SVG/CameraSVG";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "@/components/UserProfile";

const profile = () => {
  return (
    <div className="overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div
        data-aos="zoom-out"
        data-aos-delay="600"
        className="container max-w-[600px]   bg-white dark:bg-[#1C1C25]  rounded-xl p-5"
      >
        <UserProfile />
      </div>
    </div>
  );
};
export default profile;

profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
