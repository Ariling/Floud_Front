import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import '../../styles/swiper.scss';
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import AnonyRetro from "../../components/Anony/AnonyRetro";
import AnonyCommentInsert from "../../components/Anony/AnonyCommentInsert";
import { testData } from "./testData";
import dayjs from "dayjs";
import axios from 'axios';
import { useRecoilValue } from "recoil";
import { UserIdAtom } from "@/store/atoms";

export default function AnnoyList() {
	const [list, setList] = useState(testData);
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const userId = useRecoilValue(UserIdAtom);

	const onDetailOpen = () => {
		setIsDetailOpen(true);
	};

	const onDetailClose = () => {
		setIsDetailOpen(false);
	};

	const onLikeClick = (index) => {
		setList(org => org.map((v, i) => {
			if (index === i) {
				return {
					...v,
					isLiked: true,
					likeCount: v.likeCount+1,
				}
			}

			return v;
		}));
		axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/like`, {
			user_id: userId,
			memoir_id: list[index].memoir_id,
			likeDate: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
		})
	}

	const onCommentWrite = (comment) => {
		axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment`, {
			memoir_id: list[activeIndex].memoir_id,
			user_id: userId,
			createdAt: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
			content: comment,
			parent_id: null,
		})
		.then(res => {
			setList(org => org.map((v, i) => {
				if (activeIndex === i) {
					return {
						...v,
						commentList: [
							...v.commentList,
							{content: comment}
						]
					}
				}
	
				return v;
			}));
		})
	}

	const getAnonyList = () => {
		axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/memoir/anonymous/${userId}`)
			.then(res => {
				setList(res.data.data);
			})
	};

	useEffect(() => {
		getAnonyList();
	}, [])

	return (
		<div className={"anonyList"}>
			<div className={isDetailOpen ? "wrapper-detail" : "wrapper"}>
				<Swiper
					effect={"cards"}
					// oneWayMovement={true}
					grabCursor={true}
					modules={[EffectCards]}
					direction={"vertical"}
					cardsEffect={{
						perSlideOffset: 10,
						rotate: false,
						slideShadows: false,
					}}
				// className={swiperStyle.mySwiper}
					onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
				>
					{list.map((item, index) => {
						const created = dayjs(item.createdAtq);
						const date = created.format("DD");
						const month = created.format("MMM");

						return (
							<>
								<SwiperSlide key={index}>
									<div>
										<AnonyRetro
											memoirId={item.memoir_id}
											date={date}
											month={`${month}.`}
											todayTitle={item.title}
											comments={item.commentList}
											totalLikes={item.likeCount}
											totalComments={item.commentCount}
											memoirKeep={item.memoirKeep}
											memoirProblem={item.memoirProblem}
											memoirTry={item.memoirTry}
											onDetailOpen={onDetailOpen}
											onDetailClose={onDetailClose}
											onLikeClick={() => onLikeClick(index)}
											isLiked={item.isLiked}
										/>
									</div>
								</SwiperSlide>
							</>
						);
					})}
				</Swiper>
			</div>
			<AnonyCommentInsert 
				isDetail={isDetailOpen}
				onCommentWrite={onCommentWrite}
			/>
		</div>
	);
}
