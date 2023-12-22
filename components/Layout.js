import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { isLogin } from "../utils/atom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [isLoginState, setIsLoginState] = useRecoilState(isLogin);
  return (
    <>
      <div className={styles.headBox}>
        <Link href="/">
          <a>
            <Image
              src="/images/ceosIcon.svg"
              width={172}
              height={73}
              alt="Logo"
            />
          </a>
        </Link>

        {isLoginState ? (
          <div className={styles.loginBox}>
            <button
              className={`${styles.buttons} ${styles.loginButton}`}
              onClick={() => {
                alert("로그아웃 완료");
                setIsLoginState(false);
                router.push("/");
              }}
            >
              로그아웃
            </button>
          </div>
        ) : (
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
