"use client"
import { useEffect, useState, useRef } from 'react';
import style from '@/styles/KPTInsert.module.scss';

export default function KPTInsert({ value, onChange, type }) {
  const [textAreaHeight, setTextAreaHeight] = useState(70);
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    const scrollHeight = textAreaRef.current.scrollHeight;
    const minTextareaHeight = 70;
    const newHeight = Math.max(minTextareaHeight, scrollHeight);
    onChange(e);
    setTextAreaHeight(newHeight);
  };

  const resetScrollHeight = () => {
    textAreaRef.current.scrollTop = 0;
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    resetScrollHeight();
  }, [value]);

  const getPlaceholder = () => {
    if (type === 'KEEP') {
      return '오늘 자신이 성취한 것을 작성해주세요.';
    } else if (type === 'PROBLEM') {
      return '오늘 하려고 했는데 못한 것들을 작성해주세요.';
    } else if (type === 'TRY') {
      return '내일 무엇을 할건지 작성해주세요.';
    } else {
      return '';
    }
  }

  return (
    <>
      <textarea
        ref={textAreaRef}
        value={value}
        onChange={handleChange}
        style={{ height: `${textAreaHeight}px` }}
        placeholder={getPlaceholder()}
        className={style.textarea}
      ></textarea>
    </>
  )
}
