import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../components/TopBar";

const Login = () => {
  const [isFilled, setIsFilled] = useState(true);

  return (
    <>
      <TopBar />
      <Wrapper>
        <Container>
          <InputDiv>
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" />
          </InputDiv>
          <LoginBtn isFilled={isFilled}>로그인</LoginBtn>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4.8rem;

  width: 36rem;
  height: 31.5rem;
  flex-shrink: 0;

  border-radius: 6.5rem;
  background: #f4f6f9;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  gap: 1.7rem;
`;

const Input = styled.input`
  width: 100%;
  height: 4.6rem;
  background: transparent;

  border: none;
  outline: none;
  border-bottom: 0.2rem solid #d9d9d9;
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom-color: #01d1a8;
  }
`;

const LoginBtn = styled.div<{ isFilled: boolean }>`
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

  color: ${(props) => (props.isFilled ? "#01D1A8" : "#d9d9d9")};
  border: 0.3rem solid ${(props) => (props.isFilled ? "#01D1A8" : "#d9d9d9")};
`;
