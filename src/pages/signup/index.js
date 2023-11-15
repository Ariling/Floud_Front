import SignupForm from "@/components/signup/SignupForm";
import React from "react";
import Backarrow from "@/img/landing/backarrow.svg";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <main className="w-screen h-screen pl-[15px] pr-[24px] py-[30px]">
      <div className="mb-[55px] flex items-center text-[25px] text-center font-semibold tracking-[-1.55px]">
        <div onClick={() => router.back()}>
          {" "}
          <Backarrow />
        </div>
        Sign Up
      </div>
      <SignupForm />
    </main>
  );
};

export default Index;
