import React, { useState } from "react";
import { LikeTestData } from "./LikeTestData";
import likebox from "@/img/nav/likebox.png";
import Image from "next/image";
import LikeHeart from "@/img/nav/likeheart.svg";
import BlankHeart from "@/img/nav/blanklikeheart.svg";
import dayjs from "dayjs";

const Likebox = () => {
  const [data, setData] = useState(LikeTestData);
  //현재는 이렇게 해 둔 상태 나중에 바꿀 예정... 근데 이거 좋아요 취소되면 어떻게 되는거?
  return (
    <div>
      {data.map((e) => (
        <>
          <div className="w-full relative h-[65px] mb-[30px]" key={e.id}>
            <Image src={likebox} alt="좋아요박스" />
            <div
              className="absolute top-0 left-[92%]"
              onClick={() => {
                const newData = data.filter((item) => item !== e);
                setData(newData);
              }}
            >
              {e.like === true ? <LikeHeart /> : <BlankHeart />}
            </div>
            <div className="px-[22px] w-full flex absolute top-[30%] flex-col">
              <div className="ml-[7px] flex gap-[25px] text-[22px] font-extrabold tracking-[-1.2px] leading-[110%]">
                <div className="text-[34px] tracking-[-2.073px] leading-[22.215px]">
                  {dayjs(e.date).format("DD")}
                </div>
                <div>{e.title}</div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Likebox;
