import LoginForm from "@/components/login/LoginForm";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const index = () => {
  return (
    <main
      className={`w-screen h-screen px-[45px] flex flex-col ${inter.className}`}
    >
      <div className="mt-[144px] mb-[45px] font-bold text-[35px] items-center text-center tracking-[-2.1px]">
        Log in
      </div>
      <LoginForm />
    </main>
  );
};

export default index;
