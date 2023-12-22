import React, { useState } from "react";
import styled from "styled-components";

interface CandItemProps {
  elected?: boolean;
}

const Candidate = ({ elected = false }: CandItemProps) => {
  return (
    <>
      <Wrapper elected={elected}>
        <Name elected={elected}>김세오</Name>
        <TeamIntro elected={elected}>팀 CEOS</TeamIntro>
      </Wrapper>
    </>
  );
};

export default Candidate;

const Wrapper = styled.div<{ elected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.elected ? "27.3rem" : "30rem")};
  height: ${(props) => (props.elected ? "16.25rem" : "9.3rem")};
  flex-shrink: 0;
  gap: ${(props) => (props.elected ? "1.2rem" : "0.5rem")};

  border-radius: 103px;
  background: ${(props) => (props.elected ? "#01D1A8" : "#f4f6f9")};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 650px) {
    width: ${(props) => (props.elected ? "20rem" : "21rem")};
  }
`;

const Font = styled.div<{ elected: boolean }>`
  color: ${(props) => (props.elected ? "#fff" : "#d9d9d9")};
  text-align: center;
  font-family: "Pretendard-regular";
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Name = styled(Font)`
  font-size: ${(props) => (props.elected ? "3.75rem" : "3rem")};
  font-style: normal;
  font-weight: 900;

  @media (max-width: 650px) {
    font-size: ${(props) => (props.elected ? "2.8rem" : "2rem")};
  }
`;

const TeamIntro = styled(Font)`
  font-size: ${(props) => (props.elected ? "2.8rem" : "2rem")};

  font-size: ${(props) => (props.elected ? "2rem" : "1.2rem")};
`;
