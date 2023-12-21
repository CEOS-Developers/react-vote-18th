import HeadFunction from "../components/HeadFunction";
import { useState } from "react";
import styles from "../styles/Signup.module.css";
//회원가입 페이지
export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    team: "reddi",
    part: "FRONTEND",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={styles.signupContainer}>
      <HeadFunction title="SignUp" />
      <h1>회원가입</h1>
      <form className={styles.signupFormContainer} onSubmit={handleSubmit}>
        <input
          className={styles.inputBox}
          type="text"
          name="name"
          placeholder="이름"
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputBox}
          type="text"
          name="id"
          placeholder="아이디"
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputBox}
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputBox}
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          onChange={handleChange}
          required
        />
        <input
          className={styles.inputBox}
          type="email"
          name="email"
          placeholder="이메일 주소"
          onChange={handleChange}
          required
        />
        <div className={styles.selectContainers}>
          <select
            className={styles.selectBox}
            name="team"
            onChange={handleChange}
            value={formData.team}
          >
            <option value="sharemind">셰어마인드</option>
            <option value="localmood">로컬무드</option>
            <option value="reddi">레디</option>
            <option value="sniff">스니프</option>
            <option value="gotcha">GOTCHA</option>
          </select>

          <select
            className={styles.selectBox}
            name="part"
            onChange={handleChange}
            value={formData.part}
          >
            <option value="FRONTEND">FRONTEND</option>
            <option value="BACKEND">BACKEND</option>
          </select>
        </div>
        <button className={styles.buttons} type="submit">
          가입하기
        </button>
      </form>
    </div>
  );
}
