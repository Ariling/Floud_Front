import Image from "next/image";
import React from "react";
import FlouD from "@/img/nav/FlouD.png";
import Bell from "@/img/nav/bell.svg";
import SideSvg from "@/img/nav/side.svg";
import { useRecoilState } from "recoil";
import { sidebarOpenAtom, sidebarShowAtom } from "@/store/atoms";
import { useRouter } from "next/router";

const NavOption = () => {
  const [open, setOpen] = useRecoilState(sidebarOpenAtom);
  const [option, setOption] = useRecoilState(sidebarShowAtom);
  const router = useRouter();
  return (
    <>
      <div className="bg-white z-40 h-[83.5px] w-[100vw] flex items-center justify-between px-[8vw] pt-9 pb-[18px] sticky top-0 left-0 border-b border-black">
        <div
          className="h-[30px]"
          onClick={() => {
            setOption("basic");
            setOpen(false);
            router.push("/main");
          }}
        >
          <Image src={FlouD} alt="로고" />
        </div>
        <div className="flex items-center gap-[15px]">
          <div>
            {" "}
            <Bell onClick={() => setOption("alarm")} />
          </div>
          <div
            onClick={() => {
              setOption("basic");
              setOpen(true);
            }}
          >
            <SideSvg />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavOption;
