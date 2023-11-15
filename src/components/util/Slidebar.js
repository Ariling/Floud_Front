"use client";
import { sidebarOpenAtom, sidebarShowAtom } from "@/store/atoms";
import style from "@/styles/Nav.module.scss";
import { useRecoilState } from "recoil";
import XButton from "@/img/nav/x.svg";
import NavOption from "./NavOption";
import Alarm from "./Alarm";
import CommentAndLikeCompo from "../relatednav/CommentAndLikeHeader";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const [open, setOpen] = useRecoilState(sidebarOpenAtom);
  const [option, setOption] = useRecoilState(sidebarShowAtom);
  return (
    <div className="fixed top-0 bg-white z-50 w-screen h-screen">
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
            <ul
              onClick={() => {
                setOption("basic");
                setOpen(false);
                router.replace("/main");
              }}
            >
              나의 회고 FlouD
            </ul>
            <ul
              onClick={() => {
                setOption("basic");
                setOpen(false);
                router.replace("/anony");
              }}
            >
              익명회고
            </ul>
            <li onClick={() => setOption("comment")}>댓글/좋아요</li>
          </div>
        </div>
      ) : (
        <>
          <NavOption />
          <div>
            {option === "comment" ? (
              <>
                <div className=" px-[7vw] w-full h-screen flex flex-col justify-start items-center">
                  <CommentAndLikeCompo />
                </div>
              </>
            ) : (
              <>
                <Alarm />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
