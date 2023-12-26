import PageMainText from "@/common/ui/text/PageMainText/PageMainText";
import VoteResult from "@/features/vote/components/voteResult/VoteResult";
import { SELECT_TYPE } from "@/features/vote/constants/select-vote-type";
import Button from "@/common/ui/buttons/Button/Button";
import MediaQuery from "@/styles/mediaQuery";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useGetResults from "@/features/vote/queries/useGetResults";

const VoteResults = () => {
  const { isMobile } = MediaQuery();
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    let url;
    if (type !== "leader") {
      url = "/app/team";
    } else {
      const devPartId = part === "BE" ? 1 : 2;
      url = `/app/member?devPartId=${devPartId}`;
    }

    useGetResults(url)
      .then((resultData) => {
        const data = resultData.data;
        setData(data);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      });
  }, []);

  const location = useLocation();
  const type = location.state.type;
  const part = location.state.part;
  const pageHeaderText =
    type === "leader" ? `${part} 파트장 투표 결과` : "데모데이 투표 결과";
  const sortedResults = data.sort((a, b) => b.voteCnt - a.voteCnt);
  const voteType =
    type === "leader" ? SELECT_TYPE.PartLeader : SELECT_TYPE.Demoday;

  return (
    <VoteResultsContainer>
      <PageMainText text={pageHeaderText} />
      <ResultsContainer $isMobile={isMobile}>
        {sortedResults.map((result, index) => (
          <VoteResult
            key={index}
            type={voteType}
            mainText={result.name}
            subText={result.description}
            rank={index + 1}
            voteNum={result.voteCnt}
          />
        ))}
      </ResultsContainer>
      <div>
        <Button addClass="margin:4.5rem;" onClick={navigateHome}>
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
