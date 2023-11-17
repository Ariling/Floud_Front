import { writeCompleteModalAtom } from "@/store/atoms";
import React from "react";
import { useRecoilState } from "recoil";
import PopupModal from "./PopupModal";
import style from "@/styles/KPTInsert.module.scss";

const PopupModalBtn = ({onButtonClick}) => {
  const [modalOpen, setModalOpen] = useRecoilState(writeCompleteModalAtom);
  const modalClick = () => {
    onButtonClick();
    setModalOpen(!modalOpen);
  };
  return (
    <div className={style.submit_bt} onClick={modalClick}>
      <button type="submit">작성완료</button>
      <PopupModal />
    </div>
  );
};

export default PopupModalBtn;
