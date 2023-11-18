import axios from "axios";

export const AlarmApi = async (user_id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/notifications/${user_id}`
    );
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getMylikeApi = async (user_id, likeDate) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/like/memoir/${user_id}`,
      {
        likeDate: likeDate,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getMyCommentApi = async (user_id, createdAt) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/comment/memoir/${user_id}`,
      {
        createdAt: createdAt,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
