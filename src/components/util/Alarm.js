import React from "react";
import { AlarmTestData } from "./AlarmTestData";
import AlarmBox from "./AlarmBox";

const Alarm = () => {
  const data = AlarmTestData;
  return (
    <div className=" px-9 w-full h-screen flex flex-col justify-start items-center">
      {data.map((e) => (
        <AlarmBox data={e} key={e.memori_id} />
      ))}
    </div>
  );
};

export default Alarm;
