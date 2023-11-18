import KPTInput from '@/components/KPT/KPTInput';
import KPTInsert from '@/components/KPT/KPTInsert';
import KPTTag from '@/components/KPT/KPTTag';
import style from '@/styles/KPTInsert.module.scss';
import PopupModalBtn from "../util/PopupModalBtn";
import { useEffect, useState } from 'react'
import axios from "axios";
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

export default function KPT(){
  const router = useRouter();
  const [date, setDate] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [keepValue, setKeepValue] = useState('');
  const [problemValue, setProblemValue] = useState('');
  const [tryValue, setTryValue] = useState('');
  const [tagValue1, setTagValue1] = useState('');
  const [tagValue2, setTagValue2] = useState('');
  const [tagValue3, setTagValue3] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }
  
  const onKeepChange = (e) => {
    setKeepValue(e.target.value);
  }
  const onProblemChange = (e) => {
    setProblemValue(e.target.value);
  }
  const onTryChange = (e) => {
    setTryValue(e.target.value);
  }

  const onTagChange1 = (e) => {
    setTagValue1(e.target.value)
  }
  const onTagChange2 = (e) => {
    setTagValue2(e.target.value)
  }
  const onTagChange3 = (e) => {
    setTagValue3(e.target.value)
  }
  const onButtonClick = () => {
    axios.post(`/memoir`, {
      user_id: 1, //수정 필요
      title: inputValue,
      place: '어딘가에서', //확인 필요
      memoirKeep: keepValue,
      memoirProblem: problemValue,
      memoirTry: tryValue,
      hashtag1: tagValue1,
      hashtag2: tagValue2,
      hashtag3: tagValue3,
    })
  }

  useEffect(() => {
    if (router.query.date) {
      setDate(dayjs(router.query.date));
    }
  }, [router.query])
  return (
    <>
      <div className={style.kpt}>
        <KPTInput value={inputValue} onChange={onInputChange} date={date} />

        <div className={style.keep}>
            <div>KEEP</div>
        </div>
        <KPTInsert type={'KEEP'} value={keepValue} onChange={onKeepChange}/>
        
        <div className={style.problem}>
            <div>PROBLEM</div>
        </div>
        <KPTInsert type={'PROBLEM'} value={problemValue} onChange={onProblemChange}/>
       
        <div className={style.keep}>
            <div>TRY</div>
        </div>
        <KPTInsert type={'TRY'} value={tryValue} onChange={onTryChange}/>
        <KPTTag 
          value1={tagValue1} 
          value2={tagValue2}
          value3={tagValue3} 
          onChange1={onTagChange1}
          onChange2={onTagChange2}
          onChange3={onTagChange3}
        />
        <PopupModalBtn 
          onButtonClick={onButtonClick}
        />
      </div>
    </>
  )
}
