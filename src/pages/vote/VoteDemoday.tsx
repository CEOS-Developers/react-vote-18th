import Button from "@/common/ui/buttons/Button/Button";
import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import VoteSelect from "@/features/vote/components/voteSelect/VoteSelect";
import MediaQuery from "@/styles/mediaQuery";
import { useNavigate } from "react-router-dom";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import { styled } from "styled-components";

const VoteDemoday = () => {
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  const demodays = [
    { mainText: "LocalMood", subText: "키워드로 찾는 나만의 장소" },
    { mainText: "GOTCHA", subText: "면접자 관리 및 면접 지원 서비스" },
    { mainText: "SNIFF", subText: "향수 입문자를 위한 서비스" },
    { mainText: "레디", subText: "레퍼런스 아카이빙 구독 서비스" },
    { mainText: "셰어마인드", subText: "연애상담 마켓플레이스" },
  ]; //API 연결

  return (
    <VoteDemodayContainer>
      <PageMainText text="데모데이 투표" addClass="margin-bottom:3.2rem;" />
      <DemodayContainer>
        {demodays.map((demoday, index) => (
          <VoteSelect
            key={index}
            type={SELECT_TYPE.Demoday}
            mainText={demoday.mainText}
            subText={demoday.subText}
          />
        ))}
      </DemodayContainer>
      <VoteDemodayButtonContainer $isMobile={isMobile}>
        <Button addClass="margin:3.2rem;">투표하기</Button>
        <Button
          addClass="margin:3.2rem;"
          onClick={() => navigate("/vote-results", { state: "demoday" })}
        >
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
