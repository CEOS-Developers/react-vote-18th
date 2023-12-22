import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Logo onClick={() => navigate("/")}>CEOS</Logo>
      <InfoDiv>
        <Team>GOTCHA</Team>
        <Info>FE</Info>
        <Info>김세오</Info>
        <Btn onClick={() => navigate("/login")}>로그인</Btn>
        <Btn onClick={() => navigate("/signup")}>회원가입</Btn>
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
`;

const Team = styled(Info)`
  color: #abadaf;
`;

const Btn = styled(Info)`
  width: 140px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 3px solid #3e4cf7;

  color: #3e4cf7;
  font-size: 23px;

  cursor: pointer;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #3e4cf7;
    color: #fff;
  }
`;
