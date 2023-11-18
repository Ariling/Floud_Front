"use client"
import { useEffect, useState } from 'react';
import style from '../../styles/Anony.module.scss';
import Image from 'next/image';
import CommentArrow from '../../img/svg/arrowBlack.svg';
import axios from 'axios';
import dayjs from 'dayjs';

export default function AnnoyComment({isDetail, onCommentWrite}) {
	const [comment, setComment] = useState('');
	const onCommentChange = (e) => {
		setComment(e.target.value);
	}

	const onArrowClick = () => {
		onCommentWrite(comment);
	}
	return (
		<div className={`${style.commentInput} ${style.row} ${isDetail ? style.commentInputDetail : ''}`}>
			<input
				placeholder='자유롭게 남겨주세요 (욕설, 비방 금지)' 
				value={comment}
				onChange={onCommentChange}
			>
			</input>
			<CommentArrow 
				onClick={onArrowClick}
			/>
		</div>
	)
}
