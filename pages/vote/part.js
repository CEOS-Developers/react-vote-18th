// /vote/part 페이지
import { useState } from "react";
import HeadFunction from "../../components/HeadFunction";
import styles from "../../styles/Part.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { getFrontList, getBackList } from "../../api/getVote";
import { useQuery } from "@tanstack/react-query";

export default function votePart() {
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

  const [isClicked, setIsClicked] = useState({});
  const router = useRouter();
  const { isFront } = router.query;
  const isFrontVote = isFront === "true";

  const goToResult = () => {
    router.push({
      pathname: "/result",
      query: {
        isFront: isFront,
        isTeam: false,
      },
    });
  };

  const [partLeaderList, setPartLeaderList] = useState([]);
  const { data: voteList } = useQuery(
    ["voteList"],
    () => (isFrontVote ? getFrontList() : getBackList()),
    {
      onSuccess: (data) => {
        setPartLeaderList(data);
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  return (
    <div className={styles.partContainer}>
      <HeadFunction title="파트장 투표" />
      <h1 className={styles.title}>
        {isFrontVote ? "FE 파트장 투표" : "BE 파트장 투표"}
      </h1>
      <div className={styles.partList}>
        {partLeaderList &&
          partLeaderList.map((list) => (
            <button
              className={`${styles.partBox} ${
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
                {list.projectName}
              </div>
              <div
                className={`${styles.name} ${
                  isClicked[list.id] ? styles.clickedText : ""
                }`}
              >
                {list.name}
              </div>
            </button>
          ))}
      </div>
      <div style={{ display: "flex", marginTop: 101, marginBottom: 120 }}>
        <button className={styles.voteButton}>투표하기</button>
        <button className={styles.resultButton} onClick={goToResult}>
          결과보기
        </button>
      </div>
    </div>
  );
}
