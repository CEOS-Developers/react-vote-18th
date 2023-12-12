import styled from 'styled-components';
import { ReactComponent as Star } from 'assets/images/star.svg';
import { useNavigate } from 'react-router-dom';
function MainPage() {
  const navigate = useNavigate();
  return (
    <MainPageWrapper>
      <VoteSelect
        isLeft={true}
        onClick={() => {
          navigate('/partVote');
        }}
      >
        <StarIcon isLeft={true} />
        파트장 투표
        <br />
        바로가기
      </VoteSelect>
      <VoteSelect isLeft={false}>
        <StarIcon isLeft={false} />
        데모데이 투표
        <br />
        바로가기
      </VoteSelect>
    </MainPageWrapper>
  );
}

export default MainPage;
const MainPageWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const StarIcon = styled(Star)<{ isLeft: boolean }>`
  position: absolute;
  top: 40%;
  left: ${(props) => (props.isLeft ? '30%' : '27%')};
  opacity: 0;
  transition: opacity 0.3s;
`;
const VoteSelect = styled.div<{ isLeft: boolean }>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => (props.isLeft ? '#ffffff' : '#3E4CF7')};
  color: ${(props) => (props.isLeft ? '#3E4CF7' : '#ffffff')};
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -1.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  cursor: pointer;
  &:hover {
    ${StarIcon} {
      opacity: 1;
    }
  }
`;
