"use client"
import { useEffect, useState } from 'react';
import style from '../../styles/Anony.module.scss';
import Image from 'next/image';
import Heart from '../../img/svg/heartEmpty.svg';
import Chat from '../../img/svg/chat.svg';
import Char1 from '../../img/svg/Group 32.svg';

export default function AnnoyComment({
	comments,
	totalLikes,
	totalComments
}) {
	return (
		<>
			<div className={`${style.row} ${style.heartComment}`}>
				<div className={style.row}>
					<Heart className={style.heart} />
					<div>{totalLikes}</div>
				</div>
				<div className={style.row}>
					<Chat />
					<div>{totalComments}</div>
				</div>
			</div>
			<div className={style.comments} >
				{
					comments.map((value, index) => {
						return (
							<div className={style.comment}>
								<div>
									<Char1 className={style.commentImg} />
								</div>
								<div>
									<div>{value}</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</>
	)
}
