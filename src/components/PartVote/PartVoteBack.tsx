import styled from 'styled-components';
import { BEMember } from 'utils/constant';
import { PartVoteProps } from 'utils/type';
import { ReactComponent as Vote } from 'assets/images/vote.svg';
export const PartVoteBack = ({ status }: PartVoteProps) => {
  if (status === 'vote') {
    return (
      <PartVoteBEWrapper>
        {BEMember.map((value, index) => {
          return (
            <VoteItem key={index}>
              <VoteIcon />
              <NameText>{value.name}</NameText>
              <TeamText>{value.team}</TeamText>
            </VoteItem>
          );
        })}
      </PartVoteBEWrapper>
    );
  } else if (status === 'result') {
    return <PartVoteBEWrapper>결과</PartVoteBEWrapper>;
  } else {
    return <>error</>;
  }
};
const PartVoteBEWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #88b2ff;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const VoteIcon = styled(Vote)`
  opacity: 0;
  transition: opacity 0.2s;
  margin-left: 20%;
`;
const VoteItem = styled.div`
  width: 100%;
  height: 4.375rem;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(255, 208, 24, 0.98);
    ${VoteIcon} {
      opacity: 1;
    }
  }
  cursor: pointer;
`;
const NameText = styled.div`
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem;
  letter-spacing: -0.0375rem;
  margin-left: 2%;
`;
const TeamText = styled.div`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem; /* 150% */
  letter-spacing: -0.025rem;
  margin-left: 3rem;
`;
