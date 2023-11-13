import React from "react";
import landingcloud from "@/img/landing/landingcloud.gif";
import fixedCloud from "@/img/landing/fixedcloud.png";
import { useLoadingTime } from "@/hooks/useLoadingTime";
import Image from "next/image";

const LoginButton = () => {
  const loading = useLoadingTime(3000);
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      {loading ? (
        <>
          <Image src={fixedCloud} alt="고정구름" />
          <div className="flex flex-col justify-center items-center absolute top-[50%]">
            <button>로그인</button>
            <button>회원가입</button>
          </div>
        </>
      ) : (
        <Image src={landingcloud} alt="랜딩구름" />
      )}
    </div>
  );
};

export default LoginButton;
