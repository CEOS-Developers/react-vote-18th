import VoteSelect from "@/features/vote/components/voteSelect/VoteSelect";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";

export default function VotePartSelect() {
  const { isSmallMobile } = MediaQuery();
  return (
    <VotePartLeaderContainer>
      <PartLeaderSelectContainer $isSmallMobile={isSmallMobile}>
        <VoteSelectContainer>
          <VoteSelect
            type={SELECT_TYPE.Category}
            mainText="FRONT-END
          파트장 투표"
            addClass={`margin-bottom:${
              isSmallMobile ? "5rem" : 0
            }; padding:12.2rem 4.7rem;`}
          />
        </VoteSelectContainer>
        <VoteSelectContainer>
          {" "}
          <VoteSelect
            type={SELECT_TYPE.Category}
            mainText="BACK-END
          파트장 투표"
          />
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
  min-height: 100vh;
  min-width: 375px;
`;

const PartLeaderSelectContainer = styled.div<{ $isSmallMobile: boolean }>`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-around;
  align-items: ${(props) => (props.$isSmallMobile ? "center" : null)};
  flex-direction: ${(props) => (props.$isSmallMobile ? "column" : null)};
  padding: 0 4rem;
`;

const VoteSelectContainer = styled.div``;
