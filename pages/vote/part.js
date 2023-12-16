// /vote/part 페이지
import { useState } from "react";
import HeadFunction from "../../components/HeadFunction";
import styles from "../../styles/Part.module.css";

export default function votePart() {
  const [isFront, setIsFront] = useState(true);

  const peopleList = [
    {
      id: 1,
      team: "REDDI",
      name: "노이진",
    },
    {
      id: 2,
      team: "REDDI",
      name: "신동현",
    },
    {
      id: 3,
      team: "gotcha",
      name: "변지혜",
    },
    {
      id: 4,
      team: "gotcha",
      name: "이은비",
    },
    {
      id: 5,
      team: "SNIFF",
      name: "송지석",
    },
    {
      id: 6,
      team: "SNIFF",
      name: "오대균",
    },
    {
      id: 7,
      team: "셰어마인드",
      name: "이규호",
    },
    {
      id: 8,
      team: "셰어마인드",
      name: "정인영",
    },
    {
      id: 9,
      team: "로컬무드",
      name: "김지원",
    },
    {
      id: 10,
      team: "로컬무드",
      name: "김현민",
    },
  ];

  return (
    <div className={styles.partContainer}>
      <HeadFunction title="파트장 투표" />
      <h1 className={styles.title}>
        {isFront ? "FE 파트장 투표" : "BE 파트장 투표"}
      </h1>
      <div className={styles.partList}>
        {peopleList.map((list) => (
          <button className={styles.partBox}>
            <div className={styles.teamName}>{list.team}</div>
            <div className={styles.name}>{list.name}</div>
          </button>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: 101 }}>
        <button className={styles.voteButton}>투표하기</button>
        <button className={styles.resultButton}>결과보기</button>
      </div>
    </div>
  );
}
