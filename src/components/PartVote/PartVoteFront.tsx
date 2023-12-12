import styled from 'styled-components';
import { FEMember } from 'utils/constant';
import { PartVoteProps } from 'utils/type';
export const PartVoteFront = ({ status }: PartVoteProps) => {
  if (status === 'vote') {
    return (
      <PartVoteFEWrapper>
        {FEMember.map((value, index) => {
          return (
            <VoteItem key={index}>
              <NameText>{value.name}</NameText>
              <TeamText>{value.team}</TeamText>
            </VoteItem>
          );
        })}
      </PartVoteFEWrapper>
    );
  } else if (status === 'result') {
    return <PartVoteFEWrapper>결과</PartVoteFEWrapper>;
  } else {
    return <>error</>;
  }
};
const PartVoteFEWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #88b2ff;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const VoteItem = styled.div`
  width: 100%;
  height: 4.375rem;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(255, 208, 24, 0.98);
  }
  cursor: pointer;
`;
const NameText = styled.div`
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem;
  letter-spacing: -0.0375rem;
  margin-left: 22%;
`;
const TeamText = styled.div`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem; /* 150% */
  letter-spacing: -0.025rem;
  margin-left: 3rem;
`;
