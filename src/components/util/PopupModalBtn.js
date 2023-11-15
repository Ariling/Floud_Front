import { writeCompleteModalAtom } from "@/store/atoms";
import React from "react";
import { useRecoilState } from "recoil";
import PopupModal from "./PopupModal";

const PopupModalBtn = () => {
  const [modalOpen, setModalOpen] = useRecoilState(writeCompleteModalAtom);
  const modalClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div>
      <button onClick={modalClick}>팝업 모달 테스트</button>
      {modalOpen && <PopupModal />}
    </div>
  );
};

export default PopupModalBtn;
