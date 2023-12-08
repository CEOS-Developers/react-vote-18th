import VoteSelect from "@/features/vote/components/voteSelect/VoteSelect";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";

export default function VoteMain() {
  const { isSmallMobile } = MediaQuery();
  return (
    <VoteMainContainer>
      <VoteText>파트장 / 데모데이 투표</VoteText>
      <VoteSelectContainer $isSmallMobile={isSmallMobile}>
        <VoteSelect
          type={SELECT_TYPE.Category}
          mainText="파트장 투표 바로가기"
          addClass={`margin-bottom:${isSmallMobile ? "5rem" : 0};`}
        />
        <VoteSelect
          type={SELECT_TYPE.Category}
          mainText="데모데이 투표 바로가기"
        />
      </VoteSelectContainer>
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

const VoteText = styled.div`
  margin-bottom: 8.2rem;
  ${(props) => props.theme.fontStyles.headLine0}
`;

const VoteSelectContainer = styled.div<{ $isSmallMobile: boolean }>`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-around;
  align-items: ${(props) => (props.$isSmallMobile ? "center" : null)};
  flex-direction: ${(props) => (props.$isSmallMobile ? "column" : null)};
  padding: 0 4rem;
`;
