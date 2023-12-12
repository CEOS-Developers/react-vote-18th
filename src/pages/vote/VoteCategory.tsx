import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import VoteSelect from "@/features/vote/components/voteSelect/VoteSelect";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import MediaQuery from "@/styles/mediaQuery";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function VoteCategory() {
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  return (
    <VoteMainContainer>
      <PageMainText text="파트장 / 데모데이 투표" />
      <CategorySelectContainer $isMobile={isMobile}>
        <VoteSelect
          type={SELECT_TYPE.Category}
          mainText="파트장 투표 바로가기"
          addClass={`margin-bottom:${isMobile ? "5rem" : 0};`}
          onClick={() => navigate("/select-part")}
        />
        <VoteSelect
          type={SELECT_TYPE.Category}
          mainText="데모데이 투표 바로가기"
          onClick={() => navigate("/select-demoday")}
        />
      </CategorySelectContainer>
    </VoteMainContainer>
  );
}

const VoteMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 375px;
`;

const CategorySelectContainer = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-around;
  align-items: ${(props) => (props.$isMobile ? "center" : null)};
  flex-direction: ${(props) => (props.$isMobile ? "column" : null)};
  padding: 0 4rem;
`;
