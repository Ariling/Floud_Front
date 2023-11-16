import MyRetro from "@/components/Retro/MyRetro";
import MyRetroList from "@/components/Retro/MyRetroList";
import { useRouter } from "next/router";
import axios from 'axios';
import React, { useState, useEffect } from "react";

const index = () => {
  const mmm = {
    date : 16,
    month : "Oct",
    title : "알잘딱깔센 알찬 하루 보냈다.",
    memoir_keep :
      "오늘은 회의도 2번이나 했고, 디벨롭 하려고 했던 아이디어를 잘 발전시킨 것 같아서 뿌듯?",
    memoir_problem :
      "한가지 아쉬웠던 부분은 원래 운동하려고 했는데 못했다는 점.. 정말 물리적 시간이 부족했음",
    memoir_try :
      "일단 오늘 못했던 운동을 정말 많이 할거고, 먼저 할당된 과제들을 내일 중으로 끝내는 게 목표",
    tag1 : "# 운동",
    tag2 : "# 시간관리",
    tag3 : "# 기획"
  }
  const router = useRouter();
  const [memoir, setMemoir] = useState(mmm);

  useEffect(() => {
    axios.get(`/${router.query.memoirId}`)
    .then(res => {
      setMemoir(res.data);
    })
  }, []);
  
  return (
    <>
      <MyRetro
        // memoirId={memoir_id}
        date={memoir.date}
        month={`${memoir.month}.`}
        todayTitle={memoir.title}
        memoir_keep={memoir.memoir_keep}
        memoir_problem={memoir.memoir_problem}
        memoir_try={memoir.memoir_try}
        tag1={memoir.tag1}
        tag2={memoir.tag2}
        tag3={memoir.tag3}
      /> 
    </>
  );
};

export default index;