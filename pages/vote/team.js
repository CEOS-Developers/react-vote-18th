// /vote/team 페이지

import { useState } from "react";
import HeadFunction from "../../components/HeadFunction";
import styles from "../../styles/Team.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { getTeamList } from "../../api/voteAPI";
import { useQuery } from "@tanstack/react-query";

export default function VoteTeam() {
  const [isClicked, setIsClicked] = useState({});

  const router = useRouter();

  const goToResult = () => {
    router.push({
      pathname: "/result",
      query: {
        isFront: false,
        isTeam: true,
      },
    });
  };

  const [teamList, setTeamList] = useState([]);
  const { data: voteList } = useQuery(["voteList"], () => getTeamList(), {
    onSuccess: (data) => {
      setTeamList(data);
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

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
              {list.description}
            </div>
          </button>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: 117 }}>
        <button className={styles.voteButton}>투표하기</button>
        <button className={styles.resultButton} onClick={goToResult}>
          결과보기
        </button>
      </div>
    </div>
  );
}
