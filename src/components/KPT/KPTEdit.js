import KPTInput from '@/components/KPT/KPTInput';
import KPTInsert from '@/components/KPT/KPTInsert';
import KPTTag from '@/components/KPT/KPTTag';
import style from '@/styles/KPTInsert.module.scss';
import PopupModalBtn from "../util/PopupModalBtn";
import { useEffect, useState } from 'react'
import axios from "axios";

export default function KPTEdit({memoirId}){
  const [inputValue, setInputValue] = useState('');
  const [keepValue, setKeepValue] = useState('');
  const [problemValue, setProblemValue] = useState('');
  const [tryValue, setTryValue] = useState('');
  const [tagValue1, setTagValue1] = useState('');
  const [tagValue2, setTagValue2] = useState('');
  const [tagValue3, setTagValue3] = useState('');

  useEffect (() => {
    axios.get(`/memoir/${memoirId}`)
    .then(res => {
      setInputValue(res.data.inputValue);
      setKeepValue(res.data.keepValue);
      setProblemValue(res.data.problemValue);
      setTryValue(res.data.tryValue);
      setTagValue1(res.data.tagValue1);
      setTagValue2(res.data.tagValue2);
      setTagValue3(res.data.tagValue3);
    })
  },[])

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
    axios.patch(`/memoir`, {
      memoirId: memoirId,
      inputValue: inputValue, 
      keepValue: keepValue, 
      problemValue: problemValue,
      tryValue: tryValue,
      tagValue1: tagValue1,
      tagValue2: tagValue2,
      tagValue3: tagValue3
    })
  }
  return (
    <>
      <div className={style.kpt}>
        <KPTInput value={inputValue} onChange={onInputChange} date={'2023-08-22'} />

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
