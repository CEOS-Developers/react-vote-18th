import React, { useState, useEffect } from "react";
import styled from "styled-components";

import VoteItem from "./VoteItem";

const teamData = ["1", "2", "3", "4", "5"];

interface Props {
  setIsVoteSelected: (value: boolean) => void;
}

const TeamDiv = ({ setIsVoteSelected }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsVoteSelected(true);
  };
  return (
    <Wrapper>
      <Container>
        {teamData.map((text, index) => (
          <VoteItem
            key={index}
            text={text}
            isSelected={selectedItem === text}
            onClick={() => handleItemClick(text)}
            isMember={false}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default TeamDiv;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  width: 65rem;
  gap: 4rem;
`;
