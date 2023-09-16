"use client";
import { Poppins } from "@next/font/google";
// import Topbar from "./Navigation/Topbar";
import Sidebar from "./Navigation/Sidebar";
import { useState } from "react";

import { Inter } from "next/font/google";
import DarkModeButton from "./DarkModeButton";
import dynamic from "next/dynamic";
const inter = Inter({ subsets: ["latin"] });

const Topbar = dynamic(() => import("./Navigation/Topbar"), {
  ssr: false,
});

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      style={inter.style}
      className="min-h-screen relative bg-[#F0F8FF] dark:bg-[#12131A]"
    >
      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />

      <main className={`${isOpen ? "ml-[307px]" : "ml-[307px]"}`}>
        <Topbar />
        <div className="py-6 px-10">{children}</div>
      </main>
    </div>
  );
}
