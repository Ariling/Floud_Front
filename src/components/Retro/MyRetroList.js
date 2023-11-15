"use client"
import { useEffect, useState } from 'react';
import style from '../../styles/Retro.module.scss';
import Image from 'next/image';

// prop 으로 만들어 놓기....~


export default function MyRetroList({
    memoirId,
    date,
    month,
    todayTitle,
    onCardClick,
    onEditClick
}) {

    const colors = ['#c8f5ff', '#bdd4ff', '#a1d8ff', '#c3d0ea'];
    const colorIndex = date % 4;

    const onButtonClick = (e) => {
        e.stopPropagation();
        onEditClick && onEditClick(memoirId);
    }

    return (
        <>
            <div
                className={style.retroS}
                style={{ backgroundColor: colors[colorIndex] }}
                onClick={() => onCardClick && onCardClick(memoirId)}
            >
                <div className={`${style.row} ${style.spaceBetween}`}>
                    <div className={style.row}>
                        <div className={style.dateS}>{date}</div>
                        <div className={style.monthS}>{month}</div>
                    </div>
                    <button onClick={onButtonClick}>수정</button>
                </div>
                <div className={style.todayTitleS}>{todayTitle}</div>
            </div>
        </>

    )
}