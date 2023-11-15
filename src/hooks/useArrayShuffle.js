import dayjs from "dayjs";

export const useArrayShuffle = (array) => {
    const newArr = [...array];
    newArr.sort(() => Math.random() - 0.5);
    return newArr;
};

export default useArrayShuffle;
