import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import TopBar from '../components/TopBar';
import TeamDiv from '../components/TeamDiv';
import { usePostVoteTeam } from '../apis/post/usePostVoteTeam';

const TeamVote = () => {
  const navigate = useNavigate();
  const [isVoteSelected, setIsVoteSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  //custom-hook
  const fetchData = usePostVoteTeam();

  const handleSubmit = () => {
    fetchData.voteTeam({
      teamName: selectedItem,
    });
  };

  //로그인 성공,실패에 따른 모달과 페이지 이동 (처리필요)

  return (
    <>
      <TopBar />
      <Wrapper>
        <Title>데모데이 팀 투표</Title>
        <TeamDiv
          setIsVoteSelected={setIsVoteSelected}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
        <VoteBtn isVoteSelected={isVoteSelected} onClick={handleSubmit}>
          투표하기
        </VoteBtn>
      </Wrapper>
    </>
  );
};

export default TeamVote;

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

  color: ${(props) => (props.isVoteSelected ? '#FFC466' : '#d9d9d9')};
  border: 0.3rem solid
    ${(props) => (props.isVoteSelected ? '#FFC466' : '#d9d9d9')};
`;
