import styles from "../styles/Result.module.css";
import HeadFunction from "../components/HeadFunction";
import Link from "next/link";
import { useRouter } from "next/router";
import { getProjectResult } from "../api/getResult";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Result() {
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

  const router = useRouter();
  const { isFront, isTeam } = router.query;
  const isFrontResult = isFront === "true";
  const isTeamResult = isTeam === "true";
  const [projectResultList, setProjectResultList] = useState([]);

  const { data: resultList } = useQuery(
    ["resultList"],
    () => getProjectResult(),
    {
      onSuccess: (data) => {
        console.log("hi");
        setProjectResultList(data);
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  return (
    <div className={styles.resultContainer}>
      <HeadFunction title="투표 결과" />
      <h1 className={styles.title}>
        {isFrontResult
          ? "FE 파트장 투표 결과"
          : isTeamResult
          ? "데모데이 투표 결과"
          : "BE 파트장 투표 결과"}
      </h1>
      <div className={styles.resultList}>
        {projectResultList &&
          projectResultList.map((list) => (
            <div className={styles.resultBox}>
              <div className={styles.numberBox}>{list.id}</div>
              <div
                style={{ display: "flex", alignItems: "baseline", width: 300 }}
              >
                <div className={styles.name}>{list.name}</div>
                <div className={styles.teamName}>{list.description}</div>
              </div>
              <div className={styles.voteNumber}>{list.count}</div>
            </div>
          ))}
      </div>
      <Link href="/">
        <button className={styles.returnButton}>돌아가기</button>
      </Link>
    </div>
  );
}
