import HeadFunction from "../components/HeadFunction";
import styles from "../styles/Login.module.css";
import { useState } from "react";
//로그인 페이지

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div className={styles.loginContainer}>
      <HeadFunction title="Login" />
      <h1>로그인</h1>
      <form className={styles.loginFormContainer} onSubmit={handleSubmit}>
        <input
          className={styles.inputBox}
          type="text"
          name="id"
          placeholder="아이디"
          value={userInfo.id}
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
