import Weeklydate from "@/components/main/Weeklydate";
import React from "react";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  return (
    <div
      className={`w-screen h-screen flex flex-col justify-start items-center px-[30px] ${noto.className}`}
    >
      <Weeklydate />
    </div>
  );
};

export default index;
