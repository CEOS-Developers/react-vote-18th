import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false); //나중에 token 따라,,

  return (
    <Wrapper>
      <Logo onClick={() => navigate("/")}>CEOS</Logo>
      <InfoDiv>
        {isLogin ? (
          <>
            <Team>GOTCHA</Team>
            <Info>FE</Info>
            <Info>김세오</Info>
            <Btn onClick={() => navigate("/")}>로그아웃</Btn>
          </>
        ) : (
          <>
            <Btn onClick={() => navigate("/login")}>로그인</Btn>
            <Btn onClick={() => navigate("/signup")}>회원가입</Btn>
          </>
        )}
      </InfoDiv>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5rem;
  background-color: #f4f6f9;
  padding: 0 2.5rem;
  gap: 1rem;
`;

const Logo = styled.div`
  color: #3e4cf7;
  text-align: center;
  font-family: "Pretendard-regular";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;

  //나중에 이미지로 넣을 수 있으면 좋을 듯?
`;

const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Info = styled.div`
  color: #000;
  text-align: center;
  font-family: "Pretendard-regular";
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Team = styled(Info)`
  color: #abadaf;

  @media (max-width: 650px) {
    display: none;
  }
`;

const Btn = styled(Info)`
  width: 8.75rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 3px solid #3e4cf7;

  color: #3e4cf7;
  font-size: 1.5rem;

  cursor: pointer;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #3e4cf7;
    color: #fff;
  }

  @media (max-width: 650px) {
    width: 6.25rem;
    height: 3rem;

    font-size: 1.25rem;
  }
`;
