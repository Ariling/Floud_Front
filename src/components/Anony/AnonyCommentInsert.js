"use client"
import { useEffect, useState } from 'react';
import style from '../../styles/Anony.module.scss';
import Image from 'next/image';
import commentArrow from '../../img/svg/arrowBlack.svg';

export default function AnnoyComment({
    isDetail
}) {
    return (
        <div className={`${style.commentInput} ${style.row} ${isDetail ? style.commentInputDetail : ''}`}>
            <input
                placeholder='자유롭게 남겨주세요 (욕설, 비방 금지)'
            >
           </input>
           <Image src={commentArrow} />
        </div>
    )
}
