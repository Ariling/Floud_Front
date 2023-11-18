import { useRouter } from "next/router";
import React from "react";
import { regExpEmail, regExgPassword } from "@/store/regExp";
import { useForm } from "react-hook-form";
import { LoginApi } from "@/apis/login";
import { useSetRecoilState } from "recoil";
import { UserIdAtom } from "@/store/atoms";

const LoginForm = () => {
  const setUserId = useSetRecoilState(UserIdAtom);
  const {
    register,
    watch,
    formState: { isValid },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await LoginApi(watch("email"), watch("password"));
    if (result === false) {
      alert("존재하지 않은 계정이거나 비밀번호 및 이메일이 틀렸습니다");
    } else {
      setUserId(result.data.data.user_id);
      localStorage.setItem("refresh_token", result.data.refreshToken);
      localStorage.setItem("access_token", result.data.accessToken);
      alert("로그인되었습니다.");
      router.replace("/waiting");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="logininputwrap">
        <div className="logintext">Email</div>
        <input
          placeholder="이메일을 입력해주세요"
          type="email"
          id="userEmail"
          className="logininput"
          required
          {...register("email", { required: true, pattern: regExpEmail })}
        />
      </div>
      <div className="logininputwrap">
        <div className="logintext">Password</div>
        <input
          placeholder="비밀번호를 입력해주세요"
          type="password"
          id="userPw"
          className="logininput"
          required
          {...register("password", { required: true, pattern: regExgPassword })}
        />
      </div>
      <div className="mt-[11px] flex justify-center">
        <button type="submit" disabled={!isValid} className="loginbutton">
          로그인
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
