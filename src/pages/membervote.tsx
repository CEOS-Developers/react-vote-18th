import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import TopBar from '../components/TopBar';
import MemberDiv from '../components/MemberDiv';
import { useGetMember } from '../apis/get/useGetMember';

const MemberVote = () => {
  const navigate = useNavigate();
  const [isVoteSelected, setIsVoteSelected] = useState(false);
  const partName = localStorage.getItem('partName') || '';

  interface DataItem {
    id: number;
    name: string;
    count: number;
  }

  //custom-hook
  const fetchData = useGetMember(partName);
  const [memberData, setMemberData] = useState(['1', '2']);

  useEffect(() => {
    if (!fetchData.isLoading) {
      setMemberData(fetchData.member.map((item: DataItem) => item.name));
    }
  }, [fetchData.isLoading]);

  return (
    <>
      <TopBar />
      <Wrapper>
        {partName === 'FRONTEND' ? (
          <Title>프론트 파트장 투표</Title>
        ) : partName === 'BACKEND' ? (
          <Title>백엔드 파트장 투표</Title>
        ) : partName === 'PRODUCT_PLANNER' ? (
          <Title>기디 파트장 투표</Title>
        ) : partName === 'DESIGNER' ? (
          <Title>디자인 파트장 투표</Title>
        ) : (
          <Title>파트장 투표</Title> // Default title when partName is empty or has unexpected value
        )}
        <MemberDiv
          setIsVoteSelected={setIsVoteSelected}
          memberData={memberData}
        />
        <VoteBtn
          isVoteSelected={isVoteSelected}
          onClick={() => navigate('/memberresult')}
        >
          투표하기
        </VoteBtn>
      </Wrapper>
    </>
  );
};

export default MemberVote;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Font = styled.div`
  text-align: center;
  font-family: 'Pretendard-regular';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Title = styled(Font)`
  color: #3945d7;

  margin-bottom: 3.75rem;
`;

const VoteBtn = styled(Font)<{ isVoteSelected: boolean }>`
  display: flex;
  width: 12.5rem;
  height: 4.3rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 2.5rem;

  cursor: pointer;

  border-radius: 2.5rem;
  border: 0.25rem solid #d9d9d9;

  font-size: 1.75rem;
  transition: border-color 0.3s, color 0.3s;

  color: ${(props) => (props.isVoteSelected ? '#01D1A8' : '#d9d9d9')};
  border: 0.3rem solid
    ${(props) => (props.isVoteSelected ? '#01D1A8' : '#d9d9d9')};
`;
