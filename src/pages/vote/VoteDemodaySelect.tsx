import Button from "@/common/ui/buttons/Button/Button";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function VoteDemodaySelect() {
  const navigate = useNavigate();
  return (
    <VoteDemodaySelectContainer>
      <PageMainText text="데모데이 투표" />
      <DemodaySelectBtnContainer>
        <Button
          addClass="margin-bottom:4.2rem"
          onClick={() => navigate("/vote-demoday")}
        >
          투표하기
        </Button>
        <Button onClick={() => navigate("/vote-results", { state: "demoday" })}>
          결과보기
        </Button>
      </DemodaySelectBtnContainer>
    </VoteDemodaySelectContainer>
  );
}

const VoteDemodaySelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 375px;
`;

const DemodaySelectBtnContainer = styled.div``;
