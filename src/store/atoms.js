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
