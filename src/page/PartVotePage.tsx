import styled from 'styled-components';
import FE from 'assets/images/FE.png';
import BE from 'assets/images/BE.png';
import { useEffect, useState } from 'react';
import { PartCandidateArrayType, VotePageStatus } from 'utils/type';
import { PartVoteFront, PartVoteBack } from 'components/PartVote';
import { ReactComponent as BackBlack } from 'assets/images/back-black.svg';
import { ReactComponent as BackWhite } from 'assets/images/back-white.svg';
import { getPartLeader } from 'api/get';
import { changePartCandIdToName } from 'utils/changeUtils';
import { instance } from 'api/axios';
import { useNavigate } from 'react-router-dom';
//left, right 반반씩 화면의 status로 구분함
export const PartVotePage = () => {
  const [leftStatus, setLeftStatus] = useState<VotePageStatus>('default');
  const [rightStatus, setRightStatus] = useState<VotePageStatus>('default');
  //선택된 candidateId state
  const [selectedCandIdFE, setSelectedCandIdFE] = useState<number>(-1);
  const [selectedCandIdBE, setSelectedCandIdBE] = useState<number>(-1);
  //FE, BE 파트장후보 array
  const [candidateFE, setCandidateFE] = useState<PartCandidateArrayType>([]);
  const [candidateBE, setCandidateBE] = useState<PartCandidateArrayType>([]);
  useEffect(() => {
    const fetchCandidateFE = async () => {
      const params = {
        part: 'FRONTEND',
      };
      const res: any = await getPartLeader({ params });
      setCandidateFE(res.data);
    };
    const fetchCandidateBE = async () => {
      const params = {
        part: 'BACKEND',
      };
      const res: any = await getPartLeader({ params });
      setCandidateBE(res.data);
    };
    fetchCandidateFE();
    fetchCandidateBE();
  }, []);
  const voteFEAfterResult = async () => {
    try {
      await instance.patch(
        `/partLeader/${candidateFE[selectedCandIdFE].candidateId}`,
        null,
        {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        },
      );
      setRightStatus('result');
      setSelectedCandIdFE(-1);
    } catch (err) {
      alert('이미 그전에 표를 행사하셨습니다. (취소 불가)');
      setRightStatus('result');
      setSelectedCandIdFE(-1);
    }
  };
  const voteBEAfterResult = async () => {
    try {
      await instance.patch(
        `/partLeader/${candidateBE[selectedCandIdBE].candidateId}`,
        null,
        {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        },
      );
      setLeftStatus('result');
      setSelectedCandIdBE(-1);
    } catch (err) {
      alert('이미 그전에 표를 행사하셨습니다. (취소 불가)');
      setRightStatus('result');
      setSelectedCandIdBE(-1);
    }
  };
  return (
    <PartPageWrapper>
      {leftStatus == 'default' ? (
        <VoteSelect isLeft={true}>
          {rightStatus !== 'default' ? (
            <BackBlackButton
              onClick={() => {
                setRightStatus('default');
                setSelectedCandIdFE(-1);
              }}
            />
          ) : null}
          <Img src={FE} />
          <PartText
            onClick={() => {
              console.log(candidateFE, selectedCandIdFE);
            }}
          >
            FRONTEND
          </PartText>
          {selectedCandIdFE > -1 ? (
            // 아이템을 골랐을 시, 체크한 후보 이름을 띄우기 위한 삼항연산자
            <>
              <SelectText hover={false}>
                {changePartCandIdToName(selectedCandIdFE, candidateFE)} 님을
                선택하셨습니다.
              </SelectText>
              <SelectText
                onClick={() => {
                  //여기서 결과 확인 api
                  // setRightStatus('result');
                  // setSelectedCandIdFE(-1);
                  voteFEAfterResult();
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
      ) : (
        // status가 default가 아니면 backend 투표 혹은 결과 확인
        <PartVoteBack
          status={leftStatus}
          selectedItem={selectedCandIdBE}
          setSelectedItem={setSelectedCandIdBE}
          candidate={candidateBE}
        />
      )}
      {rightStatus == 'default' ? (
        <VoteSelect isLeft={false}>
          {leftStatus !== 'default' ? (
            <BackWhiteButton
              onClick={() => {
                setLeftStatus('default');
                setSelectedCandIdBE(-1);
              }}
            />
          ) : null}
          <Img src={BE} />
          <PartText>BACKEND</PartText>
          {selectedCandIdBE > -1 ? (
            <>
              <SelectText hover={false}>
                {changePartCandIdToName(selectedCandIdBE, candidateBE)} 님을
                선택하셨습니다.
              </SelectText>
              <SelectText
                onClick={() => {
                  //여기서 post
                  voteBEAfterResult();
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
                  setLeftStatus('vote');
                }}
                hover={true}
              >
                투표하기
              </SelectText>
              <SelectText
                onClick={() => {
                  setLeftStatus('result');
                }}
                hover={true}
              >
                결과 확인하기
              </SelectText>
            </>
          )}
        </VoteSelect>
      ) : (
        <PartVoteFront
          status={rightStatus}
          selectedItem={selectedCandIdFE}
          setSelectedItem={setSelectedCandIdFE}
          candidate={candidateFE}
        />
      )}
    </PartPageWrapper>
  );
};

const PartPageWrapper = styled.div`
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
const BackBlackButton = styled(BackBlack)`
  position: absolute;
  height: 2rem;
  width: 2rem;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
const BackWhiteButton = styled(BackWhite)`
  position: absolute;
  height: 2rem;
  width: 2rem;
  top: 2rem;
  left: 2rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
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
  height: 21.25rem;
  margin-bottom: 2rem;
`;
