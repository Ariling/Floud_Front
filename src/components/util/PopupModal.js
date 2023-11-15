import React from "react";
import style from "@/styles/Popup.module.scss";
import popupCloud from "@/img/popupCloud.png";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { writeCompleteModalAtom } from "@/store/atoms";

const PopupModal = () => {
  const [modalOpen, setModalOpen] = useRecoilState(writeCompleteModalAtom);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className={style.modalBg}>
      <div className={style.modalBox}>
        <Image src={popupCloud} alt="팝업구름" />
        <div className="absolute top-[8%] left-[26%]">
          <div className={style.modalText}>
            <div className="font-bold text-[25px] tracking-[-1.5px]">
              Complete!
            </div>
          </div>
          <div className={style.modalText}>
            오늘도 <p className=" font-bold text-[#3145FF]">1%</p> 성장했어요
          </div>
        </div>
        <button onClick={modalClose} className={style.modalBtn}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
