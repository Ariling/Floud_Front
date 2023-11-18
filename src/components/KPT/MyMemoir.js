import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MyRetro from "../Retro/MyRetro";

const MyMemoir = () => {
  const router = useRouter();
  const [memoir, setMemoir] = useState([]);

  useEffect(() => {
    if (router.query.memoirId) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/memoir/${router.query.memoirId}`
        )
        .then((res) => {
          const data = res.data.data;
          const day = dayjs(data.createdAt);
          setMemoir({
            ...data,
            date: day.format("DD"),
            month: day.format("MMM"),
          });
        });
    }
  }, [router.query]);

  useEffect(() => {
    console.log(memoir);
  }, [memoir]);

  return (
    <>
      <MyRetro
        // memoirId={memoir_id}
        date={memoir.date}
        month={`${memoir.month}.`}
        todayTitle={memoir.title}
        memoir_keep={memoir.memoirKeep}
        memoir_problem={memoir.memoirProblem}
        memoir_try={memoir.memoirTry}
        tag1={memoir.hashtag1}
        tag2={memoir.hashtag2}
        tag3={memoir.hashtag3}
      />
    </>
  );
};

export default MyMemoir;
