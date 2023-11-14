import dayjs from "dayjs";
import React, { useState } from "react";
import Prev from "@/img/nav/prev.svg";
import Next from "@/img/nav/next.svg";
import Commentbox from "./Commentbox";
import Likebox from "./Likebox";

const CommentAndLikeCompo = () => {
  const [choice, setChoice] = useState("comment");
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };
  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };
  return (
    <>
      <div className="my-[34.5px] flex gap-3">
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
      <div className="flex items-center gap-[14px] tracking-[-1.98px] text-center text-[33px] text-[#CCC] mb-[22px]">
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
