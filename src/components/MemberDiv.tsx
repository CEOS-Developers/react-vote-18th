import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MemberItem from './VoteItem';

interface Props {
  setIsVoteSelected: (value: boolean) => void;
  memberData: Array<string>;
}

const MemberDiv = ({ setIsVoteSelected, memberData }: Props) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsVoteSelected(true);
  };
  return (
    <Wrapper>
      <Container>
        {memberData.map((text, index) => (
          <MemberItem
            key={index}
            text={text}
            isSelected={selectedItem === text}
            onClick={() => handleItemClick(text)}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default MemberDiv;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 1.3rem;

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, max-content);
    gap: 1.3rem;
  }
`;
