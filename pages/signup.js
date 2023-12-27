import HeadFunction from "../components/HeadFunction";
import { useState } from "react";
import styles from "../styles/Signup.module.css";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

//api
import { signUp, checkEmail, checkUsername } from "../api/auth";

//회원가입 페이지
export default function SignUp() {
  const router = useRouter();
  const [idVerified, setIdVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    teamName: "REDDI",
    part: "FRONTEND",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //username 중복 확인
  const checkUsernameMutation = useMutation(checkUsername, {
    onSuccess: (data) => {
      console.log(data);
      alert("사용 가능한 아이디입니다");
      setIdVerified(true);
    },
    onError: (error) => {
      alert("사용중인 아이디입니다. 아이디를 다시 설정해주세요");
      setFormData((prevFormData) => ({ ...prevFormData, username: "" }));
    },
  });

  const handleCheckUsername = (e) => {
    e.preventDefault();
    if (!formData.username) {
      alert("아이디를 입력해주세요.");
      return;
    }
    checkUsernameMutation.mutate(formData.username);
  };

  //이메일 중복 확인
  const checkEmailMutation = useMutation(checkEmail, {
    onSuccess: (data) => {
      console.log(data);
      alert("사용 가능한 이메일입니다.");
      setEmailVerified(true);
    },
    onError: (error) => {
      alert("사용중인 이메일입니다. 이메일을 다시 설정해주세요");
      setFormData((prevFormData) => ({ ...prevFormData, email: "" }));
    },
  });

  const handleCheckEmail = (e) => {
    e.preventDefault();
    checkEmailMutation.mutate(formData.email);
  };

  const signUpMutation = useMutation(signUp, {
    onSuccess: (data) => {
      alert("회원가입이 완료되었습니다!");
      router.push("/login");
    },
    onError: (error) => {
      alert("회원가입에 실패했습니다." + error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // 비밀번호 입력 로직
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert("비밀번호는 영어와 숫자의 조합으로 5자 이상이어야 합니다.");
      return;
    }

    if (formData.password !== formData.confirmPassword)
      alert("비밀번호 확인 붍일치!");
    else if (!idVerified) {
      alert("아이디 인증을 완료해주세요");
    } else if (!emailVerified) {
      alert("이메일 인증을 완료해주세요");
    } else {
      console.log(formData);
      signUpMutation.mutate({
        username: formData.username,
        password: formData.password,
        name: formData.name,
        email: formData.email,
        teamName: formData.teamName,
        part: formData.part,
      });

      // alert("회원가입이 성공적으로 완료되었습니다.");
      // router.push("/login");
    }
  };
  return (
    <div className={styles.signupContainer}>
      <HeadFunction title="SignUp" />
      <h1>회원가입</h1>
      <form className={styles.signupFormContainer} onSubmit={handleSubmit}>
        <div>
          <input
            style={{ width: "570px" }}
            className={styles.inputBox}
            type="text"
            name="username"
            placeholder="아이디"
            onChange={handleChange}
            value={formData.username}
            required
          />
          <button
            style={{ marginLeft: "10px" }}
            className={styles.buttons}
            onClick={handleCheckUsername}
            disabled={!formData.username} //id 에 입력이 있을때만 인증 가능
          >
            인증
          </button>
        </div>
        <input
          className={styles.inputBox}
          type="password"
          name="password"
          placeholder="비밀번호 [ 영어와 숫자의 조합으로 5자 이상 ]"
          onChange={handleChange}
          value={formData.password}
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
          type="text"
          name="name"
          placeholder="이름"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <div>
          <input
            style={{ width: "570px" }}
            className={styles.inputBox}
            type="email"
            name="email"
            placeholder="이메일 주소"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <button
            style={{ marginLeft: "10px" }}
            className={styles.buttons}
            onClick={handleCheckEmail}
          >
            인증
          </button>
        </div>
        <div className={styles.selectContainers}>
          <select
            className={styles.selectBox}
            name="teamName"
            onChange={handleChange}
            value={formData.teamName}
          >
            <option value="SHAREMIND">셰어마인드</option>
            <option value="LOCALMOOD">로컬무드</option>
            <option value="REDDI">레디</option>
            <option value="SNIFF">스니프</option>
            <option value="GOTCHA">GOTCHA</option>
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
