import React from "react";
import Sidebar from "./Slidebar";
import { useRecoilState, useRecoilValue } from "recoil";
import { sidebarOpenAtom, sidebarShowAtom } from "@/store/atoms";
import { useRouter } from "next/router";
import NavOption from "./NavOption";
import Alarm from "./Alarm";

const Nav = () => {
  const open = useRecoilValue(sidebarOpenAtom);
  const option = useRecoilValue(sidebarShowAtom);
  return open === true ? (
    <Sidebar />
  ) : (
    <>
      <NavOption />
      {option === "alarm" && open === false ? (
        <>
          <div className="absolute top-0 bg-white z-50 w-screen h-screen">
            <NavOption />
            <Alarm />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Nav;
