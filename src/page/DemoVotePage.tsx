import styled from 'styled-components';
import CEOS from 'assets/images/ceos.png';
import { Team } from 'utils/constant';
import { useState } from 'react';
import { VotePageStatus } from 'utils/type';
import { DemoVote } from 'components/DemoVote/DemoVote';
export const DemoVotePage = () => {
  const [rightStatus, setRightStatus] = useState<VotePageStatus>('vote');
  const [selectedDemoItem, setSelectedDemoItem] = useState<number>(-1);
  return (
    <DemoPageWrapper>
      <VoteSelect isLeft={true}>
        <Img src={CEOS} />
        <PartText>데모 데이</PartText>
        {selectedDemoItem > -1 ? (
          <>
            <SelectText hover={false}>
              {Object.entries(Team)[selectedDemoItem][1]} 팀을 선택하셨습니다.
            </SelectText>
            <SelectText
              onClick={() => {
                //여기서 post
                setRightStatus('result');
                setSelectedDemoItem(-1);
              }}
              hover={true}
            >
              ✅투표 확정 후 결과 확인
            </SelectText>
          </>
        ) : (
          <>
            <SelectText
              onClick={() => {
                setRightStatus('vote');
              }}
              hover={true}
            >
              투표하기
            </SelectText>
            <SelectText
              onClick={() => {
                setRightStatus('result');
              }}
              hover={true}
            >
              결과 확인하기
            </SelectText>
          </>
        )}
      </VoteSelect>
      <DemoVote
        status={rightStatus}
        selectedItem={selectedDemoItem}
        setSelectedItem={setSelectedDemoItem}
      />
    </DemoPageWrapper>
  );
};

const DemoPageWrapper = styled.div`
  display: flex;
  height: 100%;
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
  position: relative;
`;

const PartText = styled.div`
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -1.2px;
`;
const SelectText = styled.div<{ hover: boolean }>`
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.05rem;
  margin-top: 1.5rem;
  cursor: ${(props) => (props.hover ? 'pointer' : null)};
  opacity: 1;
  transition: opacity 0.3s;
  &:hover {
    ${(props) => (props.hover ? 'opacity: 0.7' : null)};
  }
`;
const Img = styled.img`
  height: 15rem;
  border-radius: 1.25rem;
  margin-bottom: 2rem;
`;
