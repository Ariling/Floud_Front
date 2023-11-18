import axios from "axios";

export const LoginApi = async (email, password) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/login`,
      {
        email: email,
        password: password,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
