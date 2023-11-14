import React from "react";
import { CommentTestData } from "./CommentTestData";
import CommentBox from "@/img/nav/commentbox.png";
import CommentXBox from "@/img/nav/commentXbox.svg";
import CommentBtn from "@/img/nav/commentXbtn.svg";
import TestCloud from "@/img/nav/testcloud.svg";
import Image from "next/image";
import dayjs from "dayjs";

const Commentbox = () => {
  const data = CommentTestData;
  //onClick시 삭제되는건 나중에 할 예정.. api연결도 해야되서
  return (
    <div>
      {data.map((e) => (
        <>
          <div className="w-full h-[140px] relative mb-[30px]">
            <Image src={CommentBox} alt="comment박스" />
            <div className="absolute top-0 left-[88%]">
              <CommentXBox />
              <div
                className="absolute top-[20%] left-[35%]"
                onClick={() => alert("아직은 안됩니다")}
              >
                <CommentBtn />
              </div>
            </div>
            <div className="px-[22px] w-full flex absolute top-[12%] flex-col">
              <div className="ml-[7px] flex gap-[25px] text-[22px] font-extrabold tracking-[-1.2px] leading-[110%]">
                <div className="text-[34px] tracking-[-2.073px] leading-[22.215px]">
                  {dayjs(e.date).format("DD")}
                </div>
                <div>{e.title}</div>
              </div>
              <div className="mt-[22px] px-6 py-[18px] flex items-center gap-[11px] h-[55px] rounded-[20px] bg-[#E9EDF1]">
                <div>
                  <TestCloud />
                </div>
                <div className=" font-light text-[16px] tracking-[-0.965px]">
                  {e.comment}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Commentbox;
