import Button from "@/common/ui/buttons/Button/Button";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import VoteSelect from "@/features/vote/components/voteSelect/VoteSelect";
import MediaQuery from "@/styles/mediaQuery";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useGetResults from "@/features/vote/queries/useGetResults";
import usePatchMemVote from "@/features/vote/queries/usePatchMemVote";

const VoteLeader = () => {
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const part = location.state;

  const [data, setData] = useState([]);
  useEffect(() => {
    const devPartId = part === "BE" ? 1 : 2;
    const url = `/app/member?devPartId=${devPartId}`;

    useGetResults(url)
      .then((resultData) => {
        const data = resultData.data;
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      });
  }, []);

  const handleVoteClick = async (memberId: number) => {
    try {
      await usePatchMemVote(memberId);
      alert("투표되었습니다.");
    } catch (error) {
      alert("투표는 한 번만 가능합니다.");
    }
  };

  const navigateLeaderVoteResults = () => {
    navigate("/vote-results", { state: { type: "leader", part } });
  };

  return (
    <VoteLeaderContainer>
      <PageMainText
        text={`${part} 파트장 투표`}
        addClass="margin-bottom:3.2rem;"
      />
      <LeaderContainer $isMobile={isMobile}>
        {data.map((leader, index) => (
          <VoteSelect
            key={index}
            type={SELECT_TYPE.PartLeader}
            mainText={leader.name}
            subText={leader.teamName}
            onClick={() => handleVoteClick(leader.id)}
          />
        ))}
      </LeaderContainer>
      <VoteLeaderButtonContainer $isMobile={isMobile}>
        <Button addClass="margin:3.2rem;">투표하기</Button>
        <Button addClass="margin:3.2rem;" onClick={navigateLeaderVoteResults}>
          결과보기
        </Button>
      </VoteLeaderButtonContainer>
    </VoteLeaderContainer>
  );
};

export default VoteLeader;

const VoteLeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  min-height: 100vh;
  min-width: 375px;
`;

const LeaderContainer = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  padding: 5rem 8rem;
  gap: 4rem;
  flex-wrap: wrap;
`;

const VoteLeaderButtonContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isMobile ? "column" : null)};
`;
