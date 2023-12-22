import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../components/TopBar";
import Candidate from "../components/Candidate";

const MemberResult = () => {
  return (
    <>
      <TopBar />
      <Wrapper>
        <Title>프론트 파트장 투표 결과</Title>
        <Candidate elected={true} />
        <MemDiv>
          <Candidate />
          <Candidate />
        </MemDiv>
      </Wrapper>
    </>
  );
};

export default MemberResult;

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
  color: #01d1a8;

  margin-bottom: 3.75rem;
`;

const MemDiv = styled.div`
  display: flex;
  margin-top: 3.75rem;
  gap: 3.75rem;
`;
