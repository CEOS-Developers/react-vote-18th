import Button from "@/common/ui/buttons/Button/Button";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import VoteSelect from "@/features/vote/components/voteSelect/VoteSelect";
import MediaQuery from "@/styles/mediaQuery";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import { styled } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const VoteLeader = () => {
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  const location = useLocation();
  const part = location.state;
  const voteLeaderSelectClicked = (mainText: string) => {
    console.log(mainText);
  };
  const leaders = [
    { mainText: "김현민", subText: "LocalMood" },
    { mainText: "김지원", subText: "LocalMood" },
    { mainText: "노이진", subText: "Reddigg" },
    { mainText: "신동현", subText: "Reddigg" },
    { mainText: "정인영", subText: "셰어마인드" },
    { mainText: "이규호", subText: "셰어마인드" },
    { mainText: "변지혜", subText: "Gotcha" },
    { mainText: "이은비", subText: "Gotcha" },
    { mainText: "오대균", subText: "Sniff" },
    { mainText: "송지석", subText: "Sniff" },
  ]; //API 연결

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
        {leaders.map((leader, index) => (
          <VoteSelect
            key={index}
            type={SELECT_TYPE.PartLeader}
            mainText={leader.mainText}
            subText={leader.subText}
            onClick={voteLeaderSelectClicked}
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
