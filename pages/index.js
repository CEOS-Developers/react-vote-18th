import styles from "../styles/Home.module.css";
import Link from "next/link";
import HeadFunction from "../components/HeadFunction";
//예시 기본 홈페이지 -> 처음 접속하면 로그인이나 회원가입 받게하기
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <HeadFunction title="Home" />
      <h1>기본 Home page</h1>
      <Link href="/login">
        <button className={styles.buttons}>로그인하기</button>
      </Link>
      <Link href="/signup">
        <button className={styles.buttons}>회원가입하기</button>
      </Link>
    </div>
  );
}
