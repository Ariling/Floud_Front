import { DailyMainAtom, weeklyDayAtom } from "@/store/atoms";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import MainCard from "./MainCard";
import D3ChartInfo from "./D3ChartInfo";
import PrevweekBtn from "@/img/main/prevweek.svg";
import NextweekBtn from "@/img/main/nextweek.svg";
import { GetMainApi } from "@/apis/main";

const Weeklydate = () => {
  const [data, setData] = useRecoilState(DailyMainAtom);
  const resetData = useResetRecoilState(DailyMainAtom);
  const dataSet = data.hashtagList;
  const [currentDay, setCurrentDay] = useState(dayjs());
  //String으로 담아두기
  const [daySelect, setDaySelect] = useRecoilState(weeklyDayAtom);
  const getMainFunc = async (user_id) => {
    const result = await GetMainApi(user_id, daySelect.daySelectFormat);
    if (result !== false) {
      setData(result.data.data);
    } else {
      resetData();
    }
    console.log(data);
  };
  useEffect(() => {
    getMainFunc(1);
  }, [daySelect]);

  // const dataSet = [
  //   { tagContent: "운동하기", tagNum: 7 },
  //   { tagContent: "요리하기", tagNum: 6 },
  //   { tagContent: "공부하기", tagNum: 2 },
  // ];
  const handleNextWeek = () => {
    setCurrentDay(currentDay.add(1, "week"));
  };
  const handlePrevWeek = () => {
    setCurrentDay(currentDay.subtract(1, "week"));
  };
  const calculateFirstDayOfMonth = (date) => {
    const firstDayofMonth = dayjs(currentDay).startOf("month");
    return Math.ceil((date.date() + firstDayofMonth.day()) / 7);
  };
  const daysInWeek = Array(7)
    .fill(0)
    .map((e, i) => {
      return dayjs(currentDay).startOf("week").add(i, "day");
    });
  const controlDateFunc = (date) => {
    setDaySelect({
      monthShow: date.format("MM"),
      dayShow: date.format("D"),
      monthSee: date.format("MMM"),
      dayDataFormat: date.format("YYYY-MM-DD"),
      daySelectFormat: date.format("YYYY-MM-DDTHH:mm:ss"),
    });
  };
  useEffect(() => {
    controlDateFunc(dayjs());
  }, []);
  //그 날짜를 보내면 그거에 따른 결과값을 컴포로 나타내면 되니깐..!
  return (
    <>
      <div className="mt-6 text-[16px] leading-[22.105px] tracking-[-0.96px] font-bold w-full">
        <div className="flex items-center pl-[17px] mb-3">
          <button onClick={handlePrevWeek} className="mr-0.5">
            <PrevweekBtn />
          </button>
          {currentDay.format("MM")}월 {calculateFirstDayOfMonth(currentDay)}주차
          <button onClick={handleNextWeek} className="ml-0.5">
            <NextweekBtn />
          </button>
        </div>
        <div className="inline-flex gap-[19.5px] items-center justify-center pl-[34px] w-[80vw] leading-[26px] tracking-[-1px] text-[#B9B9B9] mb-[19px]">
          {daysInWeek.map((e, i) => {
            return daySelect.monthShow === e.format("MM") &&
              daySelect.dayShow === e.format("D") ? (
              <button
                className="bg-[#0068FD] rounded-full w-[30px] h-[30px] text-white"
                key={i}
                onClick={() => {
                  controlDateFunc(e);
                }}
              >
                {e.format("D")}
              </button>
            ) : (
              <button
                className="w-[19px] h-[30px]"
                key={i}
                onClick={() => {
                  controlDateFunc(e);
                }}
              >
                {e.format("D")}
              </button>
            );
          })}
        </div>
      </div>
      <MainCard />
      <div className="mt-[50px] mb-[5px] flex items-center justify-center text-center text-lg font-bold tracking-[-1.08px] rounded-[50px] border-[1px] border-black w-[126px] h-[42px]">
        이번달 태그
      </div>
      <div className="mb-[15px] text-base tracking-[-0.9px] font-[350]">
        Q. 하고싶었지만 하지못해 아쉬웠던 것은?
      </div>
      <D3ChartInfo data={dataSet} />
    </>
  );
};

export default Weeklydate;
