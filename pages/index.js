import styles from "../styles/Home.module.css";
import Link from "next/link";
import HeadFunction from "../components/HeadFunction";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isLogin } from "../utils/atom";
import { useRecoilValue } from "recoil";
//예시 기본 홈페이지 -> 처음 접속하면 로그인이나 회원가입 받게하기
export default function Home() {
  const isLoginState = useRecoilValue(isLogin);
  const [isPart, setIsPart] = useState(false);
  const [isTeam, setIsTeam] = useState(false);

  const partClicked = () => {
    setIsPart(true);
    setIsTeam(false);
  };

  const teamClicked = () => {
    setIsTeam(true);
    setIsPart(false);
  };

  const backClicked = () => {
    setIsFront(false);
  };

  const router = useRouter();

  const goToResult = () => {
    if (!isLoginState) {
      alert("로그인을 해야 서비스 이용가능합니다!");
      router.push("/login");
    } else {
      router.push({
        pathname: "/result",
        query: {
          isFront: false,
          isTeam: true,
        },
      });
    }
  };

  const goToFront = () => {
    if (!isLoginState) {
      alert("로그인을 해야 서비스 이용가능합니다!");
      router.push("/login");
    } else {
      router.push({
        pathname: "/vote/part",
        query: {
          isFront: true,
        },
      });
    }
  };

  const goToBack = () => {
    if (!isLoginState) {
      alert("로그인을 해야 서비스 이용가능합니다!");
      router.push("/login");
    } else {
      router.push({
        pathname: "/vote/part",
        query: {
          isFront: false,
        },
      });
    }
  };

  const goToTeam = () => {
    if (!isLoginState) {
      alert("로그인을 해야 서비스 이용가능합니다!");
      router.push("/login");
    } else {
      router.push({
        pathname: "/vote/team",
      });
    }
  };

  return (
    <div className={styles.homeContainer}>
      <HeadFunction title="Home" />
      <h1 className={styles.title}>
        {isPart
          ? "파트장 투표"
          : isTeam
          ? "데모데이 투표"
          : "파트장 / 데모데이 투표"}
      </h1>

      <div className={styles.voteBox}>
        <div className={styles.partBox}>
          {isPart ? (
            <button className={styles.voteButton} onClick={goToFront}>
              <>
                FRONT-END
                <br />
                파트장 투표
              </>
            </button>
          ) : isTeam ? null : (
            <button className={styles.voteButton} onClick={partClicked}>
              <>
                파트장 투표
                <br />
                바로가기
              </>
            </button>
          )}
          {/* {isPart ? (
            <button className={styles.resultButton}>결과보기</button>
          ) : null} */}
        </div>

        <div className={styles.partBox}>
          {isPart ? (
            <button className={styles.voteButton} onClick={goToBack}>
              <>
                BACK-END
                <br />
                파트장 투표
              </>
            </button>
          ) : isTeam ? null : (
            <button className={styles.voteButton} onClick={teamClicked}>
              <>
                데모데이 투표
                <br />
                바로가기
              </>
            </button>
          )}
          {/* {isPart ? (
            <button className={styles.resultButton}>결과보기</button>
          ) : null} */}
        </div>
      </div>
      {isTeam ? (
        <div className={styles.partBox}>
          <button className={styles.voteButton2} onClick={goToTeam}>
            투표하기
          </button>
          <button className={styles.resultButton} onClick={goToResult}>
            결과보기
          </button>
        </div>
      ) : null}
    </div>
  );
}
