import React, { useEffect, useState } from "react";

const getRemainTime = (countDown) => {
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 30)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [
    hours < 10 ? "0" + hours : hours,
    minutes < 10 ? "0" + minutes : minutes,
    seconds < 10 ? "0" + seconds : seconds,
  ];
};

const Countdown = ({ deadline }) => {
  const targetDate = deadline;
  //   const timelineDate = deadline;
  const [countDown, setCountDown] = useState(
    new Date(targetDate).getTime() - new Date().getTime()
  );
  useEffect(() => {
    // console.log(timelineDate);
    const interval = setInterval(() => {
      setCountDown(new Date(targetDate).getTime() - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const [hours, minutes, seconds] = getRemainTime(countDown);
  return (
    <>
      <div className="text-[45px] font-bold tracking-[-2.7px]">
        {hours}:{minutes}:{seconds}
      </div>
    </>
  );
};

export default Countdown;
