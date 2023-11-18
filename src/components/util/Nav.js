import React, { useEffect } from "react";
import Sidebar from "./Slidebar";
import { useRecoilState, useRecoilValue } from "recoil";
import { sidebarOpenAtom, sidebarShowAtom } from "@/store/atoms";
import NavOption from "./NavOption";
import Alarm from "./Alarm";

const Nav = () => {
  const open = useRecoilValue(sidebarOpenAtom);
  const [option, setOption] = useRecoilState(sidebarShowAtom);
  useEffect(() => {
    setOption("basic");
  }, []);
  return (
    <>
      <Sidebar />
      <NavOption />
      {option === "alarm" && open === false ? (
        <>
          <div className="fixed top-0 bg-white z-50 w-screen h-screen overflow-y-scroll">
            <NavOption />
            <Alarm />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Nav;
