import HeadFunction from "../components/HeadFunction";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { isLogin, userData } from "../utils/atom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
//로그인 페이지

//api
import { signIn } from "../api/auth";

export default function Login() {
  const router = useRouter();
  const [isLoginState, setIsLoginState] = useRecoilState(isLogin);
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const setUserData = useRecoilState(userData);
  const signInMutation = useMutation(signIn, {
    onSuccess: (data) => {
      console.log(data);
      console.log(data.data.accessToken);
      // console.log(data.accessToken);
      setAccessToken(data.data.accessToken);
      console.log("accessToken:", accessToken);
      //setUserData(data.user) -> 전역 데이터 저장하는 부분
      alert("로그인에 성공하였습니다");
      router.push("/");
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
    router.push("/");
    setIsLoginState(true);
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
