import styled from 'styled-components';
import ceosLogo from 'assets/images/logo.png';
import { ReactComponent as Votes } from 'assets/images/votes.svg';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <LogoWrapper
        onClick={() => {
          navigate('/');
        }}
      >
        <Img src={ceosLogo} />
        <VotesLogo />
      </LogoWrapper>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  height: 4.375rem;
  width: 100%;
  border: 1px solid #d8d8d8;
  background-color: white;
  display: flex;
  position: fixed;
  top: 0;
`;
const LogoWrapper = styled.div`
  display: flex;
  margin-left: 2.5rem;
  cursor: pointer;
`;
const Img = styled.img`
  height: 2.5rem;
  margin-top: 1rem;
`;
const VotesLogo = styled(Votes)`
  margin-top: 1.25rem;
`;
