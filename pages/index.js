import styles from "../styles/Home.module.css";
import Link from "next/link";
//예시 기본 홈페이지
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>기본 Home page</h1>
      <Link href="/login">
        <button className={styles.buttons}>로그인하기</button>
      </Link>
      <Link href="/register">
        <button className={styles.buttons}>회원가입하기</button>
      </Link>
    </div>
  );
}
