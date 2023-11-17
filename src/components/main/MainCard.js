import useCheckRetroTime from "@/hooks/useCheckRetroTime";
import { weeklyDayAtom } from "@/store/atoms";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import dynamic from "next/dynamic";
import { testData } from "./testData.js";
import writeCloud from "@/img/main/writeCloud.png";
import notWriteCloud from "@/img/main/notWriteCloud.png";
import Image from "next/image.js";
import MyRetroList from "@/components/Retro/MyRetroList";
import { useRouter } from "next/router";

const MainCard = () => {
  const router = useRouter();
  // test용 data
  const date = 16;
  const month = "Oct";
  const title = "알잘딱깔센 알찬 하루 보냈다.";
  const memoir_id = 12;

  const onCardClick = (memoirId) => {
    document.startViewTransition(() => {
      router.push(`/memoir/${memoirId}`);
    });
  };

  const onEditClick = (memoirId) => {
    document.startViewTransition(() => {
      router.push(`/memoir/edit/${memoirId}`);
    });
  };

  const onWriteClick = () => {
    document.startViewTransition(() => {
      router.push(`/memoir/write`);
    });
  };

  const dayInfo = useRecoilValue(weeklyDayAtom);
  const [tomorrowDay, setTomorrowDay] = useState(
    `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
  );
  //여기 조건삼항문에 데이터도 넣어서 하면 된다!
  const [data, setData] = useState([]);
  useEffect(() => {
    setTomorrowDay(
      dayjs().format("YYYY-MM-DD") === dayInfo.dayDataFormat
        ? `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
        : `${dayjs().format("YYYY-MM-DD")} 06:00:00`
    );
  }, []);
  useEffect(() => {
    setData([]);
    //여기서는 api를 받아서 얻어낸 데이터이기 때문에 굳이  map을 돌릴 필요는 없을 듯!
    //e.date === dayInfo.dayDataFormat ? setData(e) : setData([]); 이것만 필요
    for (let e of testData) {
      if (e.date !== dayInfo.dayDataFormat) continue;
      else {
        setData(...data, e);
      }
    }
    setTomorrowDay(
      dayjs().format("YYYY-MM-DD") === dayInfo.dayDataFormat
        ? `${dayjs().add(1, "day").format("YYYY-MM-DD")} 06:00:00`
        : `${dayjs().format("YYYY-MM-DD")} 06:00:00`
    );
  }, [dayInfo.dayDataFormat]);
  const Countdown = dynamic(() => import("./countdown.js"), { ssr: false });
  return (
    <>
      <div
        className={`w-full rounded-[20px] bg-[#E9EDF1] flex flex-col justify-center items-center`}
      >
        {(useCheckRetroTime(dayInfo.dayDataFormat) ||
          dayjs().format("YYYY-MM-DD") === dayInfo.dayDataFormat) &&
        data.length === 0 ? (
          <>
            <div className="mt-[35px] w-[147px] h-[117.521px]">
              <Image src={notWriteCloud} alt="작성불가구름" />
            </div>
            <div className="font-bold tracking-[-1.32px] text-[22px] leading-[23px] mt-[22.48px]">
              회고록 작성
            </div>
            <div>
              <Countdown deadline={tomorrowDay} />
            </div>
            <div className="text-center mt-2 font-[350] text-lg tracking-[-1.08px]">
              오늘의 회고가 아직 없어요.
              <br />
              비행-운을 남겨주세요!
            </div>
            <button
              className="my-[26px] h-[50px] w-[292px] rounded-[15px] bg-[#66A4FF] text-[20px] font-bold tracking-[-1.2px] text-white"
              onClick={onWriteClick}
            >
              회고록 작성하기
            </button>
          </>
        ) : data.length === 0 ? (
          <>
            <div className="mt-[35px] w-[147px] h-[117.521px]">
              <Image src={notWriteCloud} alt="작성불가구름" />
            </div>
            <div className="font-bold tracking-[-1.32px] text-[22px] leading-[23px] mt-[22.48px]">
              회고록 작성
            </div>
            <div className="text-center mt-2 font-[350] text-lg tracking-[-1.08px]">
              회고 작성 기간이 아니에요!
              <br />
              오늘의 회고를 확인해주세요
            </div>
            <button
              className="my-[26px] h-[50px] w-[292px] rounded-[15px] bg-[#999] text-[20px] font-bold tracking-[-1.2px] text-white"
              disabled
            >
              회고록 작성하기
            </button>
          </>
        ) : (
          <>
            <div className="mt-[35px] w-[147px] h-[117.521px]">
              <Image src={writeCloud} alt="작성완료구름" />
            </div>
            <div className="font-bold tracking-[-1.32px] text-[22px] leading-[23px] mt-[22.48px]">
              회고록 작성
            </div>
            <div className="text-center mt-2 font-[350] text-lg tracking-[-1.08px] mb-[26px]">
              오늘도 비행운을 남겨주셨네요.
              <br />
              민지님의 성장을 응원해요
            </div>
          </>
        )}
      </div>
      {/* 해당 부분은 나중에 위쪽으로 옮겨질 예정 */}
      <MyRetroList
        memoirId={memoir_id}
        date={date}
        month={`${month}.`}
        todayTitle={title}
        onCardClick={onCardClick}
        onEditClick={onEditClick}
      />
    </>
  );
};

export default MainCard;
