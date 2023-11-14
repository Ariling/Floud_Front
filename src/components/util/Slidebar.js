"use client";
import { sidebarOpenAtom, sidebarShowAtom } from "@/store/atoms";
import style from "@/styles/Nav.module.scss";
import { useRecoilState } from "recoil";
import XButton from "@/img/nav/x.svg";
import NavOption from "./NavOption";

export default function Sidebar() {
  const [open, setOpen] = useRecoilState(sidebarOpenAtom);
  const [option, setOption] = useRecoilState(sidebarShowAtom);
  return (
    <div className="absolute top-0 bg-white z-50 w-screen h-screen">
      {option === "basic" ? (
        <div className="pt-[25px]">
          <div
            className={style.s_bar_top}
            onClick={() => {
              setOption("basic");
              setOpen(false);
            }}
          >
            <XButton />
          </div>
          <div className={style.s_bar}>
            <ul>나의 회고 FlouD</ul>
            <li>회고 적기</li>
            <ul>익명회고</ul>
            <li onClick={() => setOption("comment")}>댓글/좋아요</li>
          </div>
        </div>
      ) : (
        <>
          <NavOption />
          <div className={style.s_bar}>
            {option === "comment" ? (
              <>
                <div>장담못함..</div>
              </>
            ) : (
              <>
                <div>진짜못함...</div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
