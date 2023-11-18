import axios from "axios";

export const SignupApi = async (email, password, name, phone, birth) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/signup`,
      {
        email: email,
        password: password,
        username: name,
        phone: phone,
        birth: birth,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};
