import React, { useEffect } from "react";
import waitingCloud from "@/img/main/waitingcloud.gif";
import Image from "next/image";
import { useLoadingTime } from "@/hooks/useLoadingTime";
import { useRouter } from "next/router";

const WaitingPage = () => {
  const router = useRouter();
  const loading = useLoadingTime(4000);
  useEffect(() => {
    if (loading) {
      router.replace("/main");
    }
  }, [loading]);
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <Image
        src={waitingCloud}
        alt="랜딩구름"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default WaitingPage;
