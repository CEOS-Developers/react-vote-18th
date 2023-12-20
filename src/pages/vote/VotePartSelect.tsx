import Button from "@/common/ui/buttons/Button/Button";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import VoteSelect from "@/features/vote/components/voteSelect/VoteSelect";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function VotePartSelect() {
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  const navigateFELeaderVote = () => {
    navigate("/vote-leader", { state: "FE" });
  };
  const navigateBELeaderVote = () => {
    navigate("/vote-leader", { state: "BE" });
  };
  const navigateFELeaderVoteResults = () => {
    navigate("/vote-results", {
      state: { type: "leader", part: "FE" },
    });
  };
  const navigateBELeaderVoteResults = () => {
    navigate("/vote-results", {
      state: { type: "leader", part: "BE" },
    });
  };
  return (
    <VotePartLeaderContainer>
      <PageMainText text="파트장 투표" />
      <PartLeaderSelectContainer $isMobile={isMobile}>
        <VoteSelectContainer>
          <VoteSelect
            type={SELECT_TYPE.Category}
            mainText="FRONT-END
          파트장 투표"
            onClick={navigateFELeaderVote}
          />
          <Button
            addClass="margin:3.2rem;"
            onClick={navigateFELeaderVoteResults}
          >
            결과 보기
          </Button>
        </VoteSelectContainer>
        <VoteSelectContainer>
          <VoteSelect
            type={SELECT_TYPE.Category}
            mainText="BACK-END 파트장 투표"
            onClick={navigateBELeaderVote}
          />
          <Button
            addClass="margin:3.2rem;"
            onClick={navigateBELeaderVoteResults}
          >
            결과 보기
          </Button>
        </VoteSelectContainer>
      </PartLeaderSelectContainer>
    </VotePartLeaderContainer>
  );
}

const VotePartLeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  min-height: 100vh;
  min-width: 375px;
`;

const PartLeaderSelectContainer = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-around;
  align-items: ${(props) => (props.$isMobile ? "center" : null)};
  flex-direction: ${(props) => (props.$isMobile ? "column" : null)};
  padding: 0 4rem;
`;

const VoteSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
