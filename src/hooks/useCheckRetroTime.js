import dayjs from "dayjs";

export const useCheckRetroTime = (retroDate) => {
  const parsedRetroDate = dayjs(retroDate);
  const now = dayjs();
  if (now.diff(parsedRetroDate.endOf("day"), "hours") >= 6) {
    return false;
  } else if (now.endOf().isBefore(parsedRetroDate.endOf())) {
    return false;
  } else {
    return true;
  }
};

export default useCheckRetroTime;
