import { useRouter } from "next/router";
import React from "react";

const TransactionSVG = () => {
  const router = useRouter();
  return (
    <div>
      <svg
        className={`${
          router.pathname == "/transactions"
            ? "fill-[#0060FF]"
            : "fill-black  dark:fill-white"
        } group-hover:fill-[#0060FF] `}
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.509 12.551C22.5868 12.3633 22.6071 12.1568 22.5674 11.9575C22.5278 11.7583 22.4299 11.5752 22.2862 11.4316L17.1514 6.29688L15.6993 7.74898L19.0811 11.1307H6.15588V13.1846H21.5601C21.7632 13.1847 21.9618 13.1245 22.1307 13.0117C22.2996 12.8989 22.4312 12.7386 22.509 12.551V12.551ZM6.23393 15.8722C6.15618 16.0599 6.13586 16.2664 6.17553 16.4657C6.2152 16.6649 6.31307 16.8479 6.45678 16.9915L11.5915 22.1263L13.0436 20.6742L9.66189 17.2924H22.5871V15.2385H7.18283C6.9797 15.2383 6.78109 15.2985 6.61217 15.4113C6.44324 15.5241 6.3116 15.6845 6.23393 15.8722V15.8722Z" />
      </svg>
    </div>
  );
};

export default TransactionSVG;
