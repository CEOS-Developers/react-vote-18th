import styled from 'styled-components';
import { PartVoteProps } from 'utils/type';
import { ReactComponent as Vote } from 'assets/images/vote.svg';
import { fadeInAnimation } from 'style/Animation';
import { changeValueToTeam } from 'utils/changeUtils';
export const PartVoteBack = ({
  status,
  selectedItem,
  setSelectedItem,
  candidate,
}: PartVoteProps) => {
  if (status === 'vote') {
    return (
      <PartVoteBEWrapper>
        {candidate.map((value, index) => {
          return (
            <VoteItem
              key={index}
              onClick={() => {
                setSelectedItem(value.candidateId);
              }}
              isSelected={value.candidateId === selectedItem}
            >
              {value.candidateId === selectedItem ? (
                <VoteIcon isSelected={value.candidateId === selectedItem} />
              ) : null}
              <NameText>{value.name}</NameText>
              <TeamText>{changeValueToTeam(value.team)}</TeamText>
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
const VoteIcon = styled(Vote)<{ isSelected: boolean }>`
  position: absolute;
  opacity: ${(props) => (props.isSelected ? '1' : '0')};
  margin-left: 20%;
  ${(props) => (props.isSelected ? fadeInAnimation : '')};
`;
const VoteItem = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 4.375rem;
  display: flex;
  align-items: center;
  transition: background-color 0.13s;
  position: relative;
  background-color: ${(props) =>
    props.isSelected ? 'rgba(255, 208, 24, 0.98)' : 'none'};
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
  margin-left: 28%;
`;
const TeamText = styled.div`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem; /* 150% */
  letter-spacing: -0.025rem;
  margin-left: 3rem;
`;
