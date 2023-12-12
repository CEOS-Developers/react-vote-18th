import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Layout({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className={styles.headBox}>
        <Image src="/images/ceosIcon.svg" width={172} height={73} />
        {isLogin ? null : (
          <div className={styles.loginBox}>
            <Link href="/login">
              <button className={`${styles.buttons} ${styles.loginButton}`}>
                로그인
              </button>
            </Link>
            <Link href="/signup">
              <button className={`${styles.buttons} ${styles.signupButton}`}>
                회원가입
              </button>
            </Link>
          </div>
        )}
      </div>

      <div>{children}</div>
    </>
  );
}
