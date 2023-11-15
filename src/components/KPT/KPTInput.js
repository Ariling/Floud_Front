"use client"
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import style from '@/styles/KPTInsert.module.scss';
import Airplane from '../../img/svg/airplaneKPT.svg';
export default function KPTInput({value, onChange, date}) {
  const now = dayjs(date);
  
  const onInputChange = (e) => {
    if (e.target.value.length <= 20) {
      onChange(e);
    }
  }

  return (
    <>
      <div className={style.date}>
        <div>{now.format('DD')}</div>
        <div>{now.format('MMM')}.</div>
        <Airplane />
      </div>
      <input 
        type={'text'} 
        className={style.input}
        value={value}
        onChange={onInputChange} 
        placeholder={'오늘 하루를 요약하는 한 문장을 적어주세요. '}
      />
    </>
  )
}