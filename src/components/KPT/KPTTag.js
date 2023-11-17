"use client";
import { useEffect, useState } from "react";
import style from "@/styles/KPTInsert.module.scss";

export default function KPTTag({
  value1,
  value2,
  value3,
  onChange1,
  onChange2,
  onChange3,
}) {
  return (
    <>
      <div className={style.tag_tt}>
        자신이 회고하면서 아쉬웠던 부분을 <br />{" "}
        <b>최소 1개 최대 3개의 키워드</b>로 입력해주세요.
      </div>
      <div className={style.tag}>
        <input value={value1} onChange={onChange1} placeholder="#"></input>
        <input value={value2} onChange={onChange2} placeholder="#"></input>
        <input value={value3} onChange={onChange3} placeholder="#"></input>
      </div>
    </>
  );
}
