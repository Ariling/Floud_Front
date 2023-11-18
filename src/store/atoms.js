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
      dayDataFormat: "",
      daySelectFormat: "",
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
  default: false,
});

export const sidebarShowAtom = atom({
  key: "sidebarShowAtom",
  default: "basic",
});

export const writeCompleteModalAtom = atom({
  key: "writeCompleteModalAtom",
  default: false,
});

export const LikeandCommentCurrentday = atom({
  key: "likeandcommentday",
  default: dayjs(),
});

export const AlarmDataAtom = atom({
  key: "alarmData",
  default: [],
});

export const GetMyLikeDataAtom = atom({
  key: "getMyLikeData",
  default: [],
});

export const GetMyCommentDataAtom = atom({
  key: "getMyCommentData",
  default: [],
});

//Atom, LocalStorage 자동연동
const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      // setSelf -> Callbacks to set or reset the value of the atom.
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      // onSet -> Subscribe to changes in the atom value.
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const UserIdAtom = atom({
  key: "userIdAtom",
  default: 0,
  //Atom, LocalStorage 자동연동
  effects: [localStorageEffect("userId")],
});

export const DailyMainAtom = atom({
  key: "dailyMainAtom",
  default: {
    user_id: 0,
    memoir_id: 0,
    title: "",
    backColor: 0,
    continueDate: 0,
    hashtagList: [],
  },
});

export const MonthlyHashTagAtom = atom({
  key: "hashTagAtom",
  default: [],
});
