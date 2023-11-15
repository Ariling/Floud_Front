"use client"
import { useEffect, useState } from 'react';
import style from '@/styles/Nav.module.scss';


export default function Sidebar() {

  return (
    <>
      <div className={style.s_bar_top}>X</div>
      <div className={style.s_bar}>
        <ul>나의 회고 FlouD</ul>
        <li>회고 적기</li>
        <ul>익명회고</ul>
        <li>댓글/좋아요</li>
      </div>
    </>
  )
}