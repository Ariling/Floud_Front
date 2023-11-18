import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Prev from "@/img/nav/prev.svg";
import Next from "@/img/nav/next.svg";
import Commentbox from "./Commentbox";
import Likebox from "./Likebox";
import { useRecoilState } from "recoil";
import { LikeandCommentCurrentday } from "@/store/atoms";
import { Inter, Noto_Sans_KR } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans_KR({ subsets: ["latin"] });

const CommentAndLikeCompo = () => {
  const [choice, setChoice] = useState("comment");
  //이거를 atom에다 저장을 해야되나..? 버튼 누를때마다 없어지게 하고? 흐음 이것도 나쁘지 않겠네 atom만들어야겠다.
  const [currentMonth, setCurrentMonth] = useRecoilState(
    LikeandCommentCurrentday
  );
  useEffect(() => {
    setCurrentMonth(dayjs());
  }, [choice]);
  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };
  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };
  return (
    <>
      <div className={`my-[34.5px] flex gap-3 ${noto.className}`}>
        <button
          className={choice === "comment" ? "choicebutton" : "notchoicebutton"}
          onClick={() => setChoice("comment")}
        >
          댓글
        </button>
        <button
          className={choice === "like" ? "choicebutton" : "notchoicebutton"}
          onClick={() => setChoice("like")}
        >
          좋아요
        </button>
      </div>
      <div
        className={`flex items-center gap-[14px] tracking-[-1.98px] text-center text-[33px] text-[#CCC] mb-[22px] ${inter.className}`}
      >
        {currentMonth.subtract(1, "month").format("MMM")}
        <div className="flex items-center font-semibold text-black">
          <button onClick={handlePrevMonth} className="mr-4">
            <Prev />
          </button>
          {currentMonth.format("MMM")}
          <button onClick={handleNextMonth} className="ml-4">
            <Next />
          </button>
        </div>
        {currentMonth.add(1, "month").format("MMM")}
      </div>
      <div>{choice === "comment" ? <Commentbox /> : <Likebox />}</div>
    </>
  );
};

export default CommentAndLikeCompo;
