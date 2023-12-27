import HeadFunction from "../components/HeadFunction";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { isLogin, userData } from "../utils/atom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
//로그인 페이지

//api
import { signIn, loginUserInfo } from "../api/auth";

export default function Login() {
  const router = useRouter();
  const [isLoginState, setIsLoginState] = useRecoilState(isLogin);

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [userDataState, setUserDataState] = useRecoilState(userData);
  const signInMutation = useMutation(signIn, {
    onSuccess: async (data) => {
      console.log(data);
      const accessToken = data.data.accessToken;
      const refreshToken = data.data.refreshToken;
      console.log("accessToken:", accessToken);
      try {
        const userInfoResponse = await loginUserInfo({ accessToken });
        console.log("response: ", userInfoResponse);
        // userInfoResponse를 전역 상태에 저장
        setUserDataState({
          username: userInfoResponse.data.username,
          teamName: userInfoResponse.data.teamName,
          part: userInfoResponse.data.part,
          name: userInfoResponse.data.name,
          email: userInfoResponse.data.email,
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
        setIsLoginState(true);
        router.push("/");
        alert("로그인에 성공하였습니다");
      } catch (error) {
        console.error("사용자 정보 불러오기 실패:", error);
        alert("사용자 정보 불러오기에 실패하였습니다");
      }
    },
    onError: (error) => {
      alert("로그인에 실패하였습니다");
    },
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    signInMutation.mutate({
      username: userInfo.username,
      password: userInfo.password,
    });
  };

  return (
    <div className={styles.loginContainer}>
      <HeadFunction title="Login" />
      <h1>로그인</h1>
      <form className={styles.loginFormContainer} onSubmit={handleSubmit}>
        <input
          className={styles.inputBox}
          type="text"
          name="username"
          placeholder="아이디"
          value={userInfo.username}
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputBox}
          type="password"
          name="password"
          placeholder="비밀번호"
          value={userInfo.password}
          onChange={handleChange}
          required
        />
        <button className={styles.loginButton} type="submit">
          로그인
        </button>
      </form>
    </div>
  );
}
