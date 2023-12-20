import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import VoteResult from "@/features/vote/components/voteResult/VoteResult";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import Button from "@/common/ui/buttons/Button/Button";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const VoteResults = () => {
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  const demodayResults = [
    {
      mainText: "LocalMood",
      subText: "키워드로 찾는 나만의 장소",
      rank: 1,
      voteNum: 5,
    },
    {
      mainText: "GOTCHA",
      subText: "면접자 관리 및 면접 지원 서비스",
      rank: 2,
      voteNum: 4,
    },
    {
      mainText: "SNIFF",
      subText: "향수 입문자를 위한 서비스",
      rank: 3,
      voteNum: 4,
    },
    {
      mainText: "레디",
      subText: "레퍼런스 아카이빙 구독 서비스",
      rank: 4,
      voteNum: 2,
    },
    {
      mainText: "셰어마인드",
      subText: "연애상담 마켓플레이스",
      rank: 5,
      voteNum: 0,
    },
  ]; //API 연결
  const leaders = [
    { mainText: "김현민", subText: "LocalMood", rank: 1, voteNum: 5 },
    { mainText: "김지원", subText: "LocalMood", rank: 2, voteNum: 5 },
    { mainText: "노이진", subText: "Reddigg", rank: 3, voteNum: 5 },
    { mainText: "신동현", subText: "Reddigg", rank: 4, voteNum: 5 },
    { mainText: "정인영", subText: "셰어마인드", rank: 5, voteNum: 5 },
    { mainText: "이규호", subText: "셰어마인드", rank: 6, voteNum: 5 },
    { mainText: "변지혜", subText: "Gotcha", rank: 7, voteNum: 5 },
    { mainText: "이은비", subText: "Gotcha", rank: 8, voteNum: 5 },
    { mainText: "오대균", subText: "Sniff", rank: 9, voteNum: 5 },
    { mainText: "송지석", subText: "Sniff", rank: 10, voteNum: 5 },
  ]; //API 연결

  const location = useLocation();
  const type = location.state.type;
  const part = location.state.part;
  const pageHeaderText =
    type === "leader" ? `${part} 파트장 투표 결과` : "데모데이 투표 결과";
  const results = type === "leader" ? leaders : demodayResults;
  const voteType =
    type === "leader" ? SELECT_TYPE.PartLeader : SELECT_TYPE.Demoday;

  return (
    <VoteResultsContainer>
      <PageMainText text={pageHeaderText} />
      <ResultsContainer $isMobile={isMobile}>
        {results.map((result, index) => (
          <VoteResult
            key={index}
            type={voteType}
            mainText={result.mainText}
            subText={result.subText}
            rank={result.rank}
            voteNum={result.voteNum}
          />
        ))}
      </ResultsContainer>
      <div>
        <Button addClass="margin:4.5rem;" onClick={() => navigate("/")}>
          돌아가기
        </Button>
      </div>
    </VoteResultsContainer>
  );
};

export default VoteResults;

const VoteResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 375px;
  padding-top: 15rem;
`;

const ResultsContainer = styled.div<{
  $isMobile: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 8rem;
  gap: 2rem;
  flex-wrap: wrap;
`;
