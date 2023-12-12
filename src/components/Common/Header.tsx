import styled from 'styled-components';
import ceosLogo from 'assets/images/logo.png';
import { ReactComponent as Votes } from 'assets/images/votes.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GreenBorder } from 'assets/images/GreenBorder';
//로그아웃 or 회원가입 나중에 코드 리팩토링
export const Header = () => {
  const navigate = useNavigate();
  //hover state
  const [loginHoverd, setLoginHoverd] = useState<boolean>(false);
  const [signupHoverd, setSignupHoverd] = useState<boolean>(false);
  //로그인 여부, 추후 백 연결, header 로그인 or user 정보
  const [isLogined, setIsLogined] = useState<boolean>(false);
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
      <LoginWrapper>
        {isLogined ? (
          <UserName>✨Shareminde FE 이규호</UserName>
        ) : (
          <HeaderRightButton
            onMouseEnter={() => {
              setLoginHoverd(true);
            }}
            onMouseLeave={() => {
              setLoginHoverd(false);
            }}
            onClick={() => {
              navigate('/login');
            }}
          >
            <GreenBorder isHovered={loginHoverd} />
            <Text>로그인</Text>
          </HeaderRightButton>
        )}
        <Divider />
        {isLogined ? (
          <HeaderRightButton
            onMouseEnter={() => {
              setSignupHoverd(true);
            }}
            onMouseLeave={() => {
              setSignupHoverd(false);
            }}
          >
            <GreenBorder isHovered={signupHoverd} />
            <Text>로그아웃</Text>
          </HeaderRightButton>
        ) : (
          <HeaderRightButton
            onMouseEnter={() => {
              setSignupHoverd(true);
            }}
            onMouseLeave={() => {
              setSignupHoverd(false);
            }}
            onClick={() => {
              navigate('/signup');
            }}
          >
            <GreenBorder isHovered={signupHoverd} />
            <Text>회원가입</Text>
          </HeaderRightButton>
        )}
      </LoginWrapper>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  height: 4.375rem;
  width: 100%;
  border: 1px solid #d8d8d8;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;
`;
const LogoWrapper = styled.div`
  display: flex;
  margin-left: 10rem;
  cursor: pointer;
`;
const Img = styled.img`
  height: 2.5rem;
`;
const VotesLogo = styled(Votes)`
  padding-top: 0.25rem;
`;
const LoginWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-right: 4rem;
`;
const HeaderRightButton = styled.div`
  position: relative;
`;
const Text = styled.div`
  color: #b0b5bd;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.4px;
  border: 2px solid #ffffff;
  padding: 3px;
  transition:
    border 0.3s,
    color 0.3s;
  &:hover {
    color: #04d1a8;
    border: 2px solid #04d1a8;
  }
`;
const UserName = styled.div`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.32px;
`;
const Divider = styled.div`
  height: 1.5rem;
  width: 2px;
  background-color: rgba(0, 0, 0, 0.13);
`;
