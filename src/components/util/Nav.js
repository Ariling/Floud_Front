import React from "react";
import Sidebar from "./Slidebar";
import { useRecoilState } from "recoil";
import { sidebarOpenAtom, sidebarShowAtom } from "@/store/atoms";
import FlouD from "@/img/nav/FlouD.png";
import Bell from "@/img/nav/bell.svg";
import SideSvg from "@/img/nav/side.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import NavOption from "./NavOption";

const Nav = () => {
  const [open, setOpen] = useRecoilState(sidebarOpenAtom);
  const [option, setOption] = useRecoilState(sidebarShowAtom);
  const router = useRouter();
  return open === true ? (
    <Sidebar />
  ) : (
    <>
      <NavOption />
      {option === "alarm" && open === false ? (
        <>
          <div className="absolute top-0 bg-white z-50 w-screen h-screen">
            <NavOption />
            <div>으음</div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Nav;
