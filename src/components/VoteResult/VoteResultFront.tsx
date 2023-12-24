import React from 'react';
import styled from 'styled-components';

function VoteResultFront() {
  return (
    <>
      <TopRankBarList>
        <SecondBar>
          <SecondWho>
            <Name>정인영</Name>
            <Team>셰어마인드</Team>
            <Vote>5표</Vote>
          </SecondWho>
          <Number>2</Number>
        </SecondBar>
        <FirstBar>
          <Number>1</Number>
          <FirstWho>
            <Name>정인영</Name>
            <Team>셰어마인드</Team>
            <Vote>5표</Vote>
          </FirstWho>
        </FirstBar>
        <ThirdBar>
          <Number>3</Number>
          <ThirdWho>
            <Name>정인영</Name>
            <Team>셰어마인드</Team>
            <Vote>5표</Vote>
          </ThirdWho>
        </ThirdBar>
      </TopRankBarList>

      <RestRankList>
        <RankItem>
          <div className="rank">4</div>
          <div className="name">정인영</div>
          <div className="team">셰어마인드</div>
          <div className="vote">2표</div>
        </RankItem>
        <RankItem>
          <div className="rank">5</div>
          <div className="name">정인영</div>
          <div className="team">셰어마인드</div>
          <div className="vote">2표</div>
        </RankItem>
        <RankItem>
          <div className="rank">6</div>
          <div className="name">정인영</div>
          <div className="team">셰어마인드</div>
          <div className="vote">2표</div>
        </RankItem>
        <RankItem>
          <div className="rank">7</div>
          <div className="name">정인영</div>
          <div className="team">셰어마인드</div>
          <div className="vote">2표</div>
        </RankItem>{' '}
        <RankItem>
          <div className="rank">8</div>
          <div className="name">정인영</div>
          <div className="team">셰어마인드</div>
          <div className="vote">2표</div>
        </RankItem>{' '}
        <RankItem>
          <div className="rank">9</div>
          <div className="name">정인영</div>
          <div className="team">셰어마인드</div>
          <div className="vote">2표</div>
        </RankItem>{' '}
        <RankItem>
          <div className="rank">10</div>
          <div className="name">정인영</div>
          <div className="team">셰어마인드</div>
          <div className="vote">2표</div>
        </RankItem>
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
  }
  .name {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
export default VoteResultFront;
