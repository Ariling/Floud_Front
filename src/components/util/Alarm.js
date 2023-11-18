import React, { useEffect } from "react";
import { AlarmTestData } from "./AlarmTestData";
import { AlarmApi } from "@/apis/relatednav";
import { useRecoilState } from "recoil";
import { AlarmDataAtom } from "@/store/atoms";
import AlarmBox from "./AlarmBox";

const Alarm = () => {
  //지금 테스트중...
  const user_id = 1;
  const [data, setData] = useRecoilState(AlarmDataAtom);
  const AlarmFunc = async (user_id) => {
    const result = await AlarmApi(user_id);
    if (result !== false) {
      setData(result.data.data);
    } else {
      setData([]);
    }
  };
  useEffect(() => {
    AlarmFunc(user_id);
  }, []);
  return Array.isArray(data) && data.length !== 0 ? (
    <div className=" px-9 w-full h-screen flex flex-col justify-start items-center">
      {data.map((e) => (
        <AlarmBox data={e} key={e.alarm_id} />
      ))}
    </div>
  ) : null;
};

export default Alarm;
