import KPTInput from '@/components/KPT/KPTInput';
import KPTInsert from '@/components/KPT/KPTInsert';
import KPTTag from '@/components/KPT/KPTTag';
import style from '@/styles/KPTInsert.module.scss';
import { useEffect, useState } from 'react'

export default function KPT(){
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
      </div>
    </>
  )
}
