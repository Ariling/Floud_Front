import React from "react";
import style from "@/styles/Alarm.module.scss";
import dayjs from "dayjs";
import AlarmHeart from "@/img/nav/alarmheart.svg";
import AlarmComment from "@/img/nav/alarmcomment.svg";

const AlarmBox = ({ data }) => {
  const day = dayjs(data.date).format("MM/DD HH:mm");
  return (
    <div className="w-full h-[12.5%] border-b-[1px] border-[#E9E9E9] flex items-center gap-[11px]">
      <div className="w-[46px] h-[46px] border-[1px] border-[#E5E5E5] rounded-[50%] relative">
        <div className="absolute top-[30%] left-[30%]">
          {data.type === "like" ? <AlarmHeart /> : <AlarmComment />}
        </div>
      </div>
      <div className="h-auto w-[65vw]">
        <div className="flex gap-[9px] font-bold text-[14px] tracking-[-0.84px]">
          익명회고 <p className="text-[#ADADAD] font-light">{day}</p>
        </div>
        <div className={style.textoverflow}>
          {data.type === "like" ? (
            <>새로운 공감이 달렸어요 : {data.content}</>
          ) : (
            <>새로운 댓글이 달렸어요 : {data.content}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlarmBox;
