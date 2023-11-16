import { useRouter } from "next/router";
import React from "react";
import { regExpEmail, regExgPassword } from "@/store/regExp";
import { useForm } from "react-hook-form";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const LoginForm = () => {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    alert("로그인성공");
    router.replace("/waiting");
  };
  return (
    <form onSubmit={onSubmit} className={`${inter.className}`}>
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
