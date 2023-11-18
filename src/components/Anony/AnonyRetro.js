"use client";
import { useState } from "react";
import style from "../../styles/Anony.module.scss";
import Map from "@/img/svg/map.svg";
import { useSwiper } from "swiper/react";
import Arrow from "@/img/svg/arrow7.svg";
import AnnoyComment from "./AnonyComment";

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
  memoirKeep,
  memoirProblem,
  memoirTry,
  onLikeClick,
  isLiked,
}) {
  const [isDetail, setIsDetail] = useState(false);
  const swiper = useSwiper();

  const onCardClick = () => {
    if (!isDetail) {
      onDetailOpen();
      setIsDetail(true);
      swiper.disable();
    }
  };

  const onArrowClick = () => {
    onDetailClose();
    setIsDetail(false);
    swiper.enable();
  };

  return (
    <div
      className={`${style.retro} ${isDetail ? style.retroDetail : ""}`}
      onClick={onCardClick}
    >
      <div className={`${style.row} ${style.rowHeight}`}>
        <Map />
        <div className={style.anonyMap}>어딘가에서</div>
        {isDetail && <Arrow className={style.arrow} onClick={onArrowClick} />}
      </div>
      <div className={style.row}>
        <div className={style.date}>{date}</div>
        <div className={style.month}>{month}</div>
      </div>
      <div className={`${style.todayTitle} ${isDetail ? '' : style.todayTitleList}`}>{todayTitle}</div>
      
      {isDetail && (
        <>
          <div>
            <div className={style.keep}>
              <div>KEEP</div>
            </div>
            <div className={style.text}>
              {memoirKeep}
            </div>

            <div className={style.problem}>
              <div>PROBLEM</div>
            </div>
            <div className={style.text}>{memoirProblem}</div>

            <div className={style.keep}>
              <div>TRY</div>
            </div>
            <div className={style.text}>
              {memoirTry}
            </div>
          </div>
          <AnnoyComment
            comments={comments}
            totalLikes={totalLikes}
            totalComments={totalComments}
            onLikeClick={onLikeClick}
            isLiked={isLiked}
          />
        </>
      )}
    </div>
  );
}
