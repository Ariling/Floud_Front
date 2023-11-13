import React from "react";
import landingcloud from "@/img/landing/landingcloud.gif";
import fixedCloud from "@/img/landing/fixedcloud.png";
import { useLoadingTime } from "@/hooks/useLoadingTime";
import Image from "next/image";
import { useRouter } from "next/router";

const LoginButton = () => {
  const loading = useLoadingTime(3000);
  const router = useRouter();
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      {loading ? (
        <>
          <Image
            src={fixedCloud}
            alt="고정구름"
            layout="fill"
            objectFit="cover"
          />
          <div className="flex flex-col justify-center items-center absolute gap-2.5 top-[51%]">
            <button
              className="landingbutton"
              onClick={() => {
                router.push("/login");
              }}
            >
              로그인
            </button>
            <button
              className="landingbutton"
              onClick={() => {
                router.push("/signup");
              }}
            >
              회원가입
            </button>
          </div>
        </>
      ) : (
        <Image
          src={landingcloud}
          alt="랜딩구름"
          layout="fill"
          objectFit="cover"
        />
      )}
    </div>
  );
};

export default LoginButton;
