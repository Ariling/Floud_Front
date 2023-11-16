import { regExgPassword, regExpEmail } from "@/store/regExp";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import SingupDate from "./SingupDate";
import { useRecoilValue } from "recoil";
import { signupDayAtom } from "@/store/atoms";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SignupForm = () => {
  const dateform = useRecoilValue(signupDayAtom);
  const {
    register,
    watch,
    formState: { isValid },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    //생년월일 잘 찍힘
    console.log(`${dateform.year}-${dateform.month}-${dateform.day}`);
    alert("회원가입성공");
    // router.replace("/");
  };
  return (
    <form onSubmit={onSubmit} className={`pl-6 pr-[26px] ${inter.className}`}>
      <div className="logininputwrap">
        <div className="logintext">Username</div>
        <input
          placeholder="이름을 입력해주세요"
          type="text"
          id="userNickname"
          className="logininput"
          required
          {...register("nickname", { required: true, minLength: 2 })}
        />
      </div>
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
      <div className="logininputwrap">
        <div className="logintext">Phone number</div>
        <input
          placeholder="전화번호를 입력해주세요(-제외)"
          type="text"
          id="userPhoneNumber"
          className="logininput"
          required
          {...register("phonenumber", { required: true, minLength: 11 })}
        />
      </div>
      <div className="logininputwrap">
        <div className="logintext pb-3">Age</div>
        <div className="flex w-full h-[58px] px-[5px] py-3 rounded-[20px] border-[1px] border-[#A1A1A] justify-evenly items-center">
          <SingupDate />
        </div>
      </div>
      <div className="flex justify-end">
        <button type="submit" disabled={!isValid} className="loginbutton">
          가입 완료
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
