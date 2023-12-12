import styles from "../styles/Home.module.css";
import Link from "next/link";
import HeadFunction from "../components/HeadFunction";
import Image from "next/image";
//예시 기본 홈페이지 -> 처음 접속하면 로그인이나 회원가입 받게하기
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <HeadFunction title="Home" />
      <h1>파트장 / 데모데이 투표</h1>
    </div>
  );
}
