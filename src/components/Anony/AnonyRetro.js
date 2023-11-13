"use client"
import { useEffect, useState } from 'react';
import style from '../../styles/Anony.module.scss';
import Image from 'next/image';
import map from '../../img/svg/map.svg';
import { useSwiper } from 'swiper/react';
import arrow from '../../img/svg/Arrow 7.svg';
import AnnoyComment from './AnonyComment';

// prop 으로 만들어 놓기....~


export default function AnnoyRetro({
    memoirId,
    date,
    month,
    todayTitle,
    comments,
    totalLikes,
    totalComments,
    onDetailOpen,
    onDetailClose,
}) {
    const [isDetail, setIsDetail] = useState(false);
    const swiper = useSwiper();

    const onCardClick = () => {
        if (!isDetail) {
            onDetailOpen();
            setIsDetail(true);
            swiper.disable();
        }
    }

    const onArrowClick = () => {
        onDetailClose();
        setIsDetail(false);
        swiper.enable();
    }

    return (
        <div className={`${style.retro} ${isDetail ? style.retroDetail : ''}`} onClick={onCardClick}>
            <div className={`${style.row} ${style.rowHeight}`}>
                <Image src={map} />
                <div className={style.anonyMap}>어딘가에서</div>
                {
                    isDetail && (
                        <Image
                            src={arrow}
                            className={style.arrow}
                            onClick={onArrowClick}
                        />
                    )
                }
            </div>
            <div className={style.row}>
                <div className={style.date}>{date}</div>
                <div className={style.month}>{month}</div>
            </div>
            <div className={style.todayTitle}>{todayTitle}</div>
            {
                isDetail && (
                    <>
                        <div>
                            <div className={style.keep}>
                                <div>KEEP</div>
                            </div>
                            <div className={style.text}>오늘의 회고입니당 오늘의 회고입니당 오늘의 회고입니당 오늘의 회고입니당</div>

                            <div className={style.problem}>
                                <div>PROBLEM</div>
                            </div>
                            <div className={style.text}>오늘의 회고입니당</div>

                            <div className={style.keep}>
                                <div>TRY</div>
                            </div>
                            <div className={style.text}>오늘의 회고입니당 오늘의 회고입니당 오늘의 회고입니당 오늘의 회고입니당</div>
                        </div>
                        <AnnoyComment 
                            comments={comments} 
                            totalLikes={totalLikes}
                            totalComments={totalComments}/>
                    </>
                )
            }
        </div>


    )
}