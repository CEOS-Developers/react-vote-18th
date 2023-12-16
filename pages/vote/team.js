// /vote/team 페이지

import { useState } from "react";
import HeadFunction from "../../components/HeadFunction";
import styles from "../../styles/Team.module.css";
import Link from "next/link";

const teamList = [
  {
    id: 1,
    name: "REDDI",
    exp: "주식 관리 포트폴리오 서비스",
  },
  {
    id: 2,
    name: "gotcha",
    exp: "주식 관리 포트폴리오 서비스",
  },
  {
    id: 3,
    name: "SNIFF",
    exp: "주식 관리 포트폴리오 서비스",
  },
  {
    id: 4,
    name: "셰어마인드",
    exp: "주식 관리 포트폴리오 서비스",
  },
  {
    id: 5,
    name: "로컬무드",
    exp: "주식 관리 포트폴리오 서비스",
  },
];
export default function VoteTeam() {
  const [isClicked, setIsClicked] = useState({});

  return (
    <div className={styles.teamContainer}>
      <HeadFunction title="데모데이 투표" />
      <h1 className={styles.title}>데모데이 투표</h1>
      <div className={styles.partList}>
        {teamList.map((list) => (
          <button
            className={`${styles.teamBox} ${
              isClicked[list.id] ? styles.clicked : ""
            }`}
            onClick={() =>
              setIsClicked({ ...isClicked, [list.id]: !isClicked[list.id] })
            }
          >
            <div
              className={`${styles.teamName} ${
                isClicked[list.id] ? styles.clickedText : ""
              }`}
            >
              {list.name}
            </div>
            <div
              className={`${styles.teamExp} ${
                isClicked[list.id] ? styles.clickedText : ""
              }`}
            >
              {list.exp}
            </div>
          </button>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: 117 }}>
        <button className={styles.voteButton}>투표하기</button>
        <Link href="/result">
          <button className={styles.resultButton}>결과보기</button>
        </Link>
      </div>
    </div>
  );
}
