// /vote/part 페이지
import { useState } from "react";
import HeadFunction from "../../components/HeadFunction";
import styles from "../../styles/Part.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { getFrontList, getBackList } from "../../api/voteAPI";
import { useQuery } from "@tanstack/react-query";

//로그인된 userData 사용
import { userData } from "../../utils/atom";
import { useRecoilState } from "recoil";

export default function votePart() {
  const [isClicked, setIsClicked] = useState(0);
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
                isClicked == list.id ? styles.clicked : ""
              }`}
              onClick={() => setIsClicked(list.id)}
            >
              <div
                className={`${styles.teamName} ${
                  isClicked == list.id ? styles.clickedText : ""
                }`}
              >
                {list.projectName}
              </div>
              <div
                className={`${styles.name} ${
                  isClicked == list.id ? styles.clickedText : ""
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
