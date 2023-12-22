import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../components/TopBar";
import TeamCandidate from "../components/TeamCandidate";

const colors = ["#01D1A8", "#5ED8FF", "#3E4CF7", "#224C97"];

const TeamResult = () => {
  return (
    <>
      <TopBar />
      <Wrapper>
        <Title>데모데이 투표 결과</Title>
        <TeamCandidate elected={true} />
        <MemDiv>
          {colors.map((color, index) => (
            <TeamCandidate key={index} color={color} />
          ))}
        </MemDiv>
      </Wrapper>
    </>
  );
};

export default TeamResult;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Font = styled.div`
  text-align: center;
  font-family: "Pretendard-regular";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Title = styled(Font)`
  color: #ffc466;

  margin-bottom: 3.75rem;
`;

const MemDiv = styled.div`
  margin-top: 3.75rem;

  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1.875rem;
`;
