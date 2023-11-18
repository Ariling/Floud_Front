import KPTInput from '@/components/KPT/KPTInput';
import KPTInsert from '@/components/KPT/KPTInsert';
import KPTTag from '@/components/KPT/KPTTag';
import style from '@/styles/KPTInsert.module.scss';
import PopupModalBtn from "../util/PopupModalBtn";
import { useEffect, useState } from 'react'
import axios from "axios";
import dayjs from 'dayjs';

export default function KPTEdit({ memoirId }) {
  const [date, setDate] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [keepValue, setKeepValue] = useState('');
  const [problemValue, setProblemValue] = useState('');
  const [tryValue, setTryValue] = useState('');
  const [tagValue1, setTagValue1] = useState('');
  const [tagValue2, setTagValue2] = useState('');
  const [tagValue3, setTagValue3] = useState('');

  useEffect(() => {
    if (memoirId) {
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/memoir/${memoirId}`)
        .then(res => {
          const data = res.data.data;
          const day = dayjs(data.createdAt);
          setDate(day.format("YYYY-MM-DD"));
          setInputValue(data.title);
          setKeepValue(data.memoirKeep);
          setProblemValue(data.memoirProblem);
          setTryValue(data.memoirTry);
          setTagValue1(data.tagValue1);
          setTagValue2(data.tagValue2);
          setTagValue3(data.tagValue3);
        })
    }
  }, [memoirId])

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
    axios.patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/memoir/edit/${memoirId}`, {
      userId: 1,
      title: inputValue,
      memoirKeep: keepValue,
      memoirProblem: problemValue,
      memoirTry: tryValue,
      // tagValue1: tagValue1,
      // tagValue2: tagValue2,
      // tagValue3: tagValue3
    })
  }
  return (
    <>
      {date &&
        <div className={style.kpt}>
          <KPTInput value={inputValue} onChange={onInputChange} date={date} />

          <div className={style.keep}>
            <div>KEEP</div>
          </div>
          <KPTInsert type={'KEEP'} value={keepValue} onChange={onKeepChange} />

          <div className={style.problem}>
            <div>PROBLEM</div>
          </div>
          <KPTInsert type={'PROBLEM'} value={problemValue} onChange={onProblemChange} />

          <div className={style.keep}>
            <div>TRY</div>
          </div>
          <KPTInsert type={'TRY'} value={tryValue} onChange={onTryChange} />
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
      }
    </>
  )
}
