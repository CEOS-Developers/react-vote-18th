import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import VoteItem from './VoteItem';

const teamData = ['GOTCHA', 'SNIFF', 'READY', 'LOCALMOOD', 'SHAREMIND'];

interface Props {
  setIsVoteSelected: (value: boolean) => void;
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

const TeamDiv = ({
  setIsVoteSelected,
  setSelectedItem,
  selectedItem,
}: Props) => {
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

  @media (max-width: 650px) {
    width: 37.5rem;
  }
`;
