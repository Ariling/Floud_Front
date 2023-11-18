"use client"
import { useEffect, useState } from 'react';
import style from '../../styles/Retro.module.scss';
import Image from 'next/image';
import Back from '@/img/svg/chevron_left.svg'
import { useRouter } from 'next/router';

// prop 으로 만들어 놓기....~


export default function MyRetro({
    // memoirId,
    date,
    month,
    todayTitle,
    memoir_keep,
    memoir_problem,
    memoir_try,
    tag1,
    tag2,
    tag3,
}) {
    const router = useRouter();
    const colors = [ '#c8f5ff', '#bdd4ff', '#a1d8ff', '#DCE8FF'];
    const colorIndex = date%4;

    const onBackClick = () => {
        document.startViewTransition(() => {
            router.push(`/main`);
          })
    }

    return (
        <>
            <div className={style.retro} style={{ backgroundColor: colors[colorIndex] }}>
                <Back onClick={onBackClick} />
                <div className={style.row}>
                    <div className={style.date}>{date}</div>
                    <div className={style.month}>{month}</div>
                </div>
                <div className={style.todayTitle}>{todayTitle}</div>
                <div className={style.keep}>
                    <div>KEEP</div>
                </div>
                <div className={`${style.text} ${style['text-background'+colorIndex]}`}>{memoir_keep}</div>

                <div className={style.problem}>
                    <div>PROBLEM</div>
                </div>
                <div className={`${style.text} ${style['text-background'+colorIndex]}`}>{memoir_problem}</div>

                <div className={style.keep}>
                    <div>TRY</div>
                </div>
                <div className={`${style.text} ${style['text-background'+colorIndex]}`}>{memoir_try}</div>
                <div className={style.tag}>
                    <div style={{ backgroundColor: colors[colorIndex] }}>{tag1}</div>
                    <div style={{ backgroundColor: colors[colorIndex] }}>{tag2}</div>
                    <div style={{ backgroundColor: colors[colorIndex] }}>{tag3}</div>
                </div>
            </div>
        </>

    )
}