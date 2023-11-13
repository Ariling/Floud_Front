"use client"
import { useEffect, useState } from 'react';
import style from '../../styles/Anony.module.scss';
import Image from 'next/image';
import heart from '../../img/svg/heartEmpty.svg';
import chat from '../../img/svg/chat.svg';
import char1 from '../../img/svg/Group 32.svg';

export default function AnnoyComment({
	comments,
	totalLikes,
	totalComments
}) {
	return (
		<>
			<div className={`${style.row} ${style.heartComment}`}>
				<div className={style.row}>
					<Image className={style.heart} src={heart} />
					<div>{totalLikes}</div>
				</div>
				<div className={style.row}>
					<Image src={chat} />
					<div>{totalComments}</div>
				</div>
			</div>
			<div className={style.comments} >
				{
					comments.map((value, index) => {
						return (
							<div className={style.comment}>
								<Image className={style.commentImg} src={char1} />
								<div>{value}</div>
							</div>
						)
					})
				}
			</div>
		</>
	)
}
