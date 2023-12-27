import { getDemoday } from 'api/get';
import React, { useEffect, useState } from 'react';
import { DemoCandidateArrayType } from 'utils/type';
import styled from 'styled-components';
function VoteDemo() {
  const [candidateDemo, setCandidateDemo] = useState<DemoCandidateArrayType>(
    [],
  );
  useEffect(() => {
    const fetchCandidateDemo = async () => {
      const res: any = await getDemoday();
      setCandidateDemo(res.data);
    };
    fetchCandidateDemo();
  }, []);
  return (
    <>
      <TopRankBarList>
        <SecondBar>
          <SecondWho>
            <Team>{candidateDemo[1]?.team}</Team>
          </SecondWho>
          <Number>2</Number>
        </SecondBar>
        <FirstBar>
          <Number>1</Number>
          <FirstWho>
            <Team>{candidateDemo[0]?.team}</Team>
          </FirstWho>
        </FirstBar>
        <ThirdBar>
          <Number>3</Number>
          <ThirdWho>
            <Team>{candidateDemo[2]?.team}</Team>
          </ThirdWho>
        </ThirdBar>
      </TopRankBarList>

      <RestRankList>
        {candidateDemo.slice(2).map((item, idx) => (
          <RankItem key={item?.team}>
            <div className="rank">{idx + 4}</div>
            <div className="team">{item?.team}</div>
          </RankItem>
        ))}
      </RestRankList>
    </>
  );
}

const TopRankBarList = styled.div`
  display: flex;
  margin-top: 6rem;
  align-items: flex-end;
`;

const SecondBar = styled.div`
  width: 150px;
  height: 100px;
  position: relative;
  background-color: silver;
`;

const FirstBar = styled(SecondBar)`
  height: 150px;
  background-color: gold;
`;
const ThirdBar = styled(SecondBar)`
  height: 80px;
  background-color: #cd7f32;
`;

const Number = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
`;

const FirstWho = styled.div`
  position: absolute;
  top: -2.2rem;
  left: 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;

const SecondWho = styled(FirstWho)``;

const ThirdWho = styled(FirstWho)``;

const Team = styled.div`
  width: 150px;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;
const Vote = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

const RestRankList = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  gap: 1.3rem;
`;
const RankItem = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  .team {
    font-size: 1.5rem;
    font-weight: 600;
    width: 10rem;
  }
  .rank {
    font-size: 1.5rem;
    width: 6rem;
  }
`;

export default VoteDemo;
