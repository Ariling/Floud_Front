import React, { useEffect, useState } from "react";
import { CommentTestData } from "./CommentTestData";
import CommentBox from "@/img/nav/commentbox.png";
import CommentXBox from "@/img/nav/commentXbox.svg";
import CommentBtn from "@/img/nav/commentXbtn.svg";
import TestCloud from "@/img/nav/testcloud.svg";
import Image from "next/image";
import dayjs from "dayjs";
import { Inter, Noto_Sans_KR } from "next/font/google";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  GetMyCommentDataAtom,
  LikeandCommentCurrentday,
  UserIdAtom,
} from "@/store/atoms";
import { getMyCommentApi } from "@/apis/relatednav";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_KR({ subsets: ["latin"] });

const Commentbox = () => {
  const [data, setData] = useRecoilState(GetMyCommentDataAtom);
  const currentMonth = useRecoilValue(LikeandCommentCurrentday);
  const userId = useRecoilValue(UserIdAtom);
  //여기도 그냥... memori_id, title, created_at(format필요), content로 이루어질 듯..?
  //memori_id로 이동하나보다 여기서는..
  const getMyCommentFunc = async (user_id) => {
    const result = await getMyCommentApi(
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
    getMyCommentFunc(userId);
  }, [currentMonth]);
  return Array.isArray(data) && data.length !== 0 ? (
    <div>
      {data.map((e) => (
        <>
          <div
            className={`w-full h-[140px] relative mb-[30px] ${noto.className}`}
            key={e.memoir_id}
          >
            <Image src={CommentBox} alt="comment박스" />
            <div
              className="absolute top-0 left-[88%]"
              // onClick={() => {
              //   const newData = data.filter((item) => item !== e);
              //   setData(newData);
              // }}
            >
              <CommentXBox />
              {/* <div className="absolute top-[20%] left-[35%]">
                <CommentBtn />
              </div> */}
            </div>
            <div className="px-[22px] w-full flex absolute top-[12%] flex-col">
              <div className="ml-[7px] flex gap-[25px] text-[22px] font-extrabold tracking-[-1.2px] leading-[110%]">
                <div
                  className={`text-[34px] tracking-[-2.073px] leading-[22.215px] ${inter.className}`}
                >
                  {dayjs(e.createdAt).format("DD")}
                </div>
                <div>{e.title}</div>
              </div>
              <div className="mt-[22px] px-6 py-[18px] flex items-center gap-[11px] h-[55px] rounded-[20px] bg-[#E9EDF1]">
                <div>
                  <TestCloud />
                </div>
                <div className=" font-light text-[16px] tracking-[-0.965px]">
                  {e.content}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  ) : null;
};

export default Commentbox;
