import React, { useState } from "react";
import styled from "styled-components";

interface TeamCandItemProps {
  color?: string;
  elected?: boolean;
}

const TeamCandidate = ({
  color = "#fff",
  elected = false,
}: TeamCandItemProps) => {
  return (
    <>
      <Wrapper elected={elected}>
        <Name elected={elected}>김세오</Name>
        <TeamIntro elected={elected}>팀 CEOS</TeamIntro>
      </Wrapper>
    </>
  );
};

export default TeamCandidate;

const Wrapper = styled.div<{ elected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 34.3rem;
  height: 9.3rem;
  flex-shrink: 0;
  gap: 0.5rem;

  border-radius: 103px;
  background: ${(props) => (props.elected ? "#ffc466" : "#f4f6f9")};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
  font-size: 3rem;
  font-style: normal;
  font-weight: 900;
`;

const TeamIntro = styled(Font)`
  font-size: 2rem;
`;
