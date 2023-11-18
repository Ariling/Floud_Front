import axios from "axios";

export const GetMainApi = async (user_id, nowTime) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/main/${user_id}`,
      {
        nowTime: nowTime,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
