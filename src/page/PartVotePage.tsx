import styled from 'styled-components';
import FE from 'assets/images/FE.png';
import BE from 'assets/images/BE.png';
export const PartVote = () => {
  return (
    <PartPageWrapper>
      <VoteSelect isLeft={true}>
        <Img src={FE} />
        <PartText>FRONTEND</PartText>
        <SelectText>투표하기</SelectText>
        <SelectText>결과 확인하기</SelectText>
      </VoteSelect>
      <VoteSelect isLeft={false}>
        <Img src={BE} />
        <PartText>BACKEND</PartText>
        <SelectText>투표하기</SelectText>
        <SelectText>결과 확인하기</SelectText>
      </VoteSelect>
    </PartPageWrapper>
  );
};

const PartPageWrapper = styled.div`
  display: flex;
  height: 100%;
  background-color: pink;
`;
const VoteSelect = styled.div<{ isLeft: boolean }>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.isLeft ? '#ffffff' : '#3E4CF7')};
  color: ${(props) => (props.isLeft ? '#3E4CF7' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const PartText = styled.div`
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -1.2px;
`;
const SelectText = styled.div`
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.05rem;
  margin-top: 1.5rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
const Img = styled.img`
  height: 21.25rem;
  margin-bottom: 2rem;
`;
