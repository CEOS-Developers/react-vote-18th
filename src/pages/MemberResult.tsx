import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TopBar from '../components/TopBar';
import Candidate from '../components/Candidate';
import { useGetMember } from '../apis/get/useGetMember';

const MemberResult = () => {
  const partName = localStorage.getItem('partName') || '';
  const [memberData, setMemberData] = useState(['1', '2', '3']);

  interface DataItem {
    id: number;
    name: string;
    count: number;
  }

  //custom-hook
  const fetchData = useGetMember(partName);

  useEffect(() => {
    if (!fetchData.isLoading) {
      setMemberData(fetchData.member.map((item: DataItem) => item.name));
      console.log(memberData);
    }
  }, [fetchData.isLoading, fetchData.member]);

  return (
    <>
      <TopBar />
      <Wrapper>
        <Title>프론트 파트장 투표 결과</Title>
        <Candidate elected={true} memberName={memberData[0]} />
        <MemDiv>
          <Candidate memberName={memberData[1]} />
          <Candidate memberName={memberData[2]} />
        </MemDiv>
      </Wrapper>
    </>
  );
};

export default MemberResult;

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
  color: #01d1a8;

  margin-bottom: 3.75rem;
`;

const MemDiv = styled.div`
  display: flex;
  margin-top: 3.75rem;
  gap: 3.75rem;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
