import { getPartLeader } from 'api/get';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PartCandidateArrayType } from 'utils/type';

function VoteResultBack() {
  const [candidateBE, setCandidateBE] = useState<PartCandidateArrayType>([]);
  useEffect(() => {
    const fetchCandidateBE = async () => {
      const params = {
        part: 'BACKEND',
      };
      const res: any = await getPartLeader({ params });
      setCandidateBE(res.data);
    };
    fetchCandidateBE();
  }, []);
  return (
    <>
      <TopRankBarList>
        <SecondBar>
          <SecondWho>
            <Name>{candidateBE[1]?.name}</Name>
            <Team>{candidateBE[1]?.team}</Team>
          </SecondWho>
          <Number>2</Number>
        </SecondBar>
        <FirstBar>
          <Number>1</Number>
          <FirstWho>
            <Name style={{ color: 'gold' }}>{candidateBE[0]?.name}</Name>
            <Team>{candidateBE[0]?.team}</Team>
          </FirstWho>
        </FirstBar>
        <ThirdBar>
          <Number>3</Number>
          <ThirdWho>
            <Name>{candidateBE[2]?.name}</Name>
            <Team>{candidateBE[2]?.team}</Team>
          </ThirdWho>
        </ThirdBar>
      </TopRankBarList>

      <RestRankList>
        {candidateBE.slice(3).map((item, idx) => (
          <RankItem key={item?.name}>
            <div className="rank">{idx + 4}</div>
            <div className="name">{item?.name}</div>
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
  top: -5.2rem;
  left: 0px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
`;

const SecondWho = styled(FirstWho)``;

const ThirdWho = styled(FirstWho)``;

const Name = styled.div`
  width: 150px;
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
`;
const Team = styled.div`
  font-size: 12px;
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
  .rank {
    font-size: 1.5rem;
    width: 4rem;
  }
  .team {
    font-size: 1rem;
    font-weight: 300;
    width: 5rem;
  }
  .name {
    font-size: 1.5rem;
    font-weight: 600;
    width: 4rem;
  }
`;
export default VoteResultBack;
