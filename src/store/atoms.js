import dayjs from "dayjs";
import { atom } from "recoil";

//여기다가 메인에 필요한 날짜들은 다 담아둠
export const weeklyDayAtom = atom({
  key: "weeklyDayAtom",
  default: [
    {
      monthShow: "",
      dayShow: "",
      monthSee: "",
      yearShow: "",
      dayDataFormat: "",
    },
  ],
});

export const signupDayAtom = atom({
  key: "signupDayAtom",
  default: {
    year: dayjs().format("YYYY"),
    month: "01",
    day: "01",
  },
});

export const sidebarOpenAtom = atom({
  key: "sidebarOpenAtom",
  default: {
    open: false,
  },
});

export const sidebarShowAtom = atom({
  key: "sidebarShowAtom",
  default: {
    option: "basic",
  },
});

export const writeCompleteModalAtom = atom({
  key: "writeCompleteModalAtom",
  default: false,
});
