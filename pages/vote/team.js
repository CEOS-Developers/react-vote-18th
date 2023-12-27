// /vote/team 페이지

import { useState } from "react";
import HeadFunction from "../../components/HeadFunction";
import styles from "../../styles/Team.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { getTeamList, voteTeam } from "../../api/voteAPI";
import { useMutation, useQuery } from "@tanstack/react-query";
//로그인된 userData 사용
import { userData } from "../../utils/atom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function VoteTeam() {
  const [isClicked, setIsClicked] = useState(0);
  const [clickedTeamName, setClickedTeamName] = useState("");

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

  const user = useRecoilValue(userData);
  const accessToken = user.accessToken;
  const userTeamName = user.teamName;
  const [projectId, setProjectId] = useState(0);
  const voteCliked = (id, name) => () => {
    if (name === userTeamName) {
      alert("본인이 속한 팀은 투표할 수 없습니다.");
      return;
    }
    setProjectId(id);
    setClickedTeamName(name);
    console.log("id:", id);
    voteTeamMutation.mutate({ projectId: id, accessToken: accessToken });
  };
  const voteTeamMutation = useMutation(voteTeam, {
    onSuccess: (data) => {
      // console.log(data);
      alert("데모데이 투표가 완료되었습니다.");
      router.push({
        pathname: "/result",
        query: {
          isFront: false,
          isTeam: true,
        },
      });
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
            key={list.id}
            className={`${styles.teamBox} ${
              isClicked == list.id ? styles.clicked : ""
            }`}
            onClick={() => {
              setIsClicked(list.id);
              setClickedTeamName(list.name);
              if (user.teamName === list.name)
                alert("본인이 속한 팀은 투표할 수 없습니다");
            }}
          >
            <div
              className={`${styles.teamName} ${
                isClicked == list.id ? styles.clickedText : ""
              }`}
            >
              {list.name}
            </div>
            <div
              className={`${styles.teamExp} ${
                isClicked == list.id ? styles.clickedText : ""
              }`}
            >
              {list.description}
            </div>
          </button>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: 117 }}>
        <button
          className={styles.voteButton}
          onClick={voteCliked(isClicked, clickedTeamName)}
        >
          투표하기
        </button>
        <button className={styles.resultButton} onClick={goToResult}>
          결과보기
        </button>
      </div>
    </div>
  );
}
