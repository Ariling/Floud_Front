import React, { useEffect, useState } from "react";
import { LikeTestData } from "./LikeTestData";
import likebox from "@/img/nav/likebox.png";
import Image from "next/image";
import LikeHeart from "@/img/nav/likeheart.svg";
import BlankHeart from "@/img/nav/blanklikeheart.svg";
import dayjs from "dayjs";
import { Noto_Sans_KR } from "next/font/google";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  GetMyLikeDataAtom,
  LikeandCommentCurrentday,
  UserIdAtom,
} from "@/store/atoms";
import { getMylikeApi } from "@/apis/relatednav";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const Likebox = () => {
  const [data, setData] = useRecoilState(GetMyLikeDataAtom);
  const currentMonth = useRecoilValue(LikeandCommentCurrentday);
  const userId = useRecoilValue(UserIdAtom);
  const getMyLikeFunc = async (user_id) => {
    const result = await getMylikeApi(
      user_id,
      currentMonth.format("YYYY-MM-DDTHH:mm:ss")
    );
    if (result !== false) {
      setData(result.data.data);
    } else {
      setData([]);
    }
  };
  useEffect(() => {
    getMyLikeFunc(userId);
  }, [currentMonth]);
  //현재는 이렇게 해 둔 상태 나중에 바꿀 예정... 근데 이거 좋아요 취소되면 어떻게 되는거?
  //여기가 이제 id대신 memori_id, title, created_at을 활용
  //memoir_like_id는 보내줄 때 활용하는 것으로 보임
  return Array.isArray(data) && data.length !== 0 ? (
    <div>
      {data.map((e) => (
        <>
          <div className="w-full relative h-[65px] mb-[30px]" key={e.memoir_id}>
            <Image src={likebox} alt="좋아요박스" />
            <div
              className="absolute top-0 left-[92%]"
              onClick={() => {
                const newData = data.filter((item) => item !== e);
                setData(newData);
              }}
            >
              <LikeHeart />
            </div>
            <div className="px-[22px] w-full flex absolute top-[30%] flex-col">
              <div className="ml-[7px] flex gap-[25px] text-[22px] font-extrabold tracking-[-1.2px] leading-[110%]">
                <div className="text-[34px] tracking-[-2.073px] leading-[22.215px]">
                  {dayjs(e.createdAt).format("DD")}
                </div>
                <div className={`${noto.className}`}>{e.title}</div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  ) : null;
};

export default Likebox;
