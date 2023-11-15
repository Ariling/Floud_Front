"use client"
import { useEffect, useState } from 'react';
import style from '../../styles/Anony.module.scss';
import Image from 'next/image';
import Heart from '../../img/svg/heartEmpty.svg';
import Chat from '../../img/svg/chat.svg';
import Char1 from '../../img/svg/Group 30.svg';
import Char2 from '../../img/svg/Group 31.svg';
import Char3 from '../../img/svg/Group 32.svg';
import Char4 from '../../img/svg/Group 33.svg';
import Char5 from '../../img/svg/Group 34.svg';
import Char6 from '../../img/svg/Group 35.svg';
import Char7 from '../../img/svg/Group 36.svg';
import Char8 from '../../img/svg/Group 37.svg';
import useArrayShuffle from '@/hooks/useArrayShuffle';

export default function AnnoyComment({
	comments,
	totalLikes,
	totalComments
}) {
	const charArray = [
		() => <Char1 className={style.commentImg}/>,
		() => <Char2 className={style.commentImg}/>,
		() => <Char3 className={style.commentImg}/>,
		() => <Char4 className={style.commentImg}/>,
		() => <Char5 className={style.commentImg}/>,
		() => <Char6 className={style.commentImg}/>,
		() => <Char7 className={style.commentImg}/>,
		() => <Char8 className={style.commentImg}/>,
	]
	const randomArr = useArrayShuffle(charArray);

	const renderCharImg = (index) => {
		return randomArr[index%8]();
	}
	
	return (
		<>
			<div className={`${style.row} ${style.heartComment}`}>
				<div className={style.row}>
					<Heart className={style.heart} />
					<div className={style.count}>{totalLikes}</div>
				</div>
				<div className={style.row}>
					<Chat />
					<div className={style.count}>{totalComments}</div>
				</div>
			</div>
			<div className={style.comments} >
				{
					comments.map((value, index) => {
						return (
							<div className={style.comment}>
								<div>
									{renderCharImg(index)}
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
