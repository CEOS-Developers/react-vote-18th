import Button from "@/common/ui/buttons/Button/Button";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import VoteSelect from "@/features/vote/components/voteSelect/VoteSelect";
import MediaQuery from "@/styles/mediaQuery";
import { useNavigate } from "react-router-dom";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import { styled } from "styled-components";
import React, { useState, useEffect } from "react";
import useGetResults from "@/features/vote/queries/useGetResults";
import usePatchTeamVote from "@/features/vote/queries/usePatchTeamVote";

const VoteDemoday = () => {
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    useGetResults("/app/team")
      .then((resultData) => {
        const data = resultData.data;
        setData(data);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      });
  }, []);

  const handleVoteClick = async (teamId: number) => {
    try {
      await usePatchTeamVote(teamId);
    } catch (error) {
      alert("투표는 한 번만 가능합니다.");
    }
  };

  const navigateDemodayVoteResults = () => {
    navigate("/vote-results", { state: "demoday" });
  };

  return (
    <VoteDemodayContainer>
      <PageMainText text="데모데이 투표" addClass="margin-bottom:3.2rem;" />
      <DemodayContainer>
        {data.map((demoday, index) => (
          <VoteSelect
            key={index}
            type={SELECT_TYPE.Demoday}
            mainText={demoday.name}
            subText={demoday.description}
            onClick={() => handleVoteClick(demoday.id)}
          />
        ))}
      </DemodayContainer>
      <VoteDemodayButtonContainer $isMobile={isMobile}>
        <Button addClass="margin:3.2rem;">투표하기</Button>
        <Button addClass="margin:3.2rem;" onClick={navigateDemodayVoteResults}>
          결과보기
        </Button>
      </VoteDemodayButtonContainer>
    </VoteDemodayContainer>
  );
};

export default VoteDemoday;

const VoteDemodayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  min-height: 100vh;
  min-width: 375px;
`;

const DemodayContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  padding: 5rem 8rem;
  gap: 4rem;
  flex-wrap: wrap;
`;

const VoteDemodayButtonContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isMobile ? "column" : null)};
`;
